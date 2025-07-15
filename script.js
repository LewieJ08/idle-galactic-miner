const button = document.getElementById("button");
const oreH1 = document.getElementById("ore");
const droneButton = document.getElementById("drone");
const opsH3 = document.getElementById("ops");

// Building Costs and Amounts
const droneCost = document.getElementById("droneCost");
const droneAmount = document.getElementById("droneAmount");

// Building Amounts & New Costs

let droneNum = 0;
let droneNewCost = 15;

let ops = 0;
let ore = 0;

function updateHTML() {
    oreH1.innerHTML = Math.round(ore * 10) / 10;
    opsH3.innerHTML = Math.round(ops * 10) / 10; 

    if (isNaN(droneNewCost)) {
        droneNewCost = 15;
    }
    
    droneCost.innerHTML = Math.ceil(droneNewCost);
    droneAmount.innerHTML = droneNum
}

function priceIncrease(baseCost, buildingNum) {
    const price = baseCost * Math.pow(1.15, buildingNum);
    return price;
}

// OPS Func + OPS Interval 

function opsFunc() {
    ore += ops;
    updateHTML();
}

setInterval(opsFunc, 1000)

button.addEventListener("click", function () {
    ore++;
    updateHTML();
});

// SHOP BUTTONS

// drone Func
droneButton.addEventListener("click", function () {
    if (ore >= droneNewCost) {
        ore -= droneNewCost;
        ops += 0.1;
        droneNum++;
        droneNewCost = priceIncrease(15, droneNum);
        updateHTML();
    }
    else {
        window.alert("Not Enough Funds");
    }
})