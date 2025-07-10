const button = document.getElementById("button");
const oreH1 = document.getElementById("value");
const cursorButton = document.getElementById("cursor");
const opsH3 = document.getElementById("cps");

// Building Costs and Amounts
const cursorCost = document.getElementById("cursorCost")
const cursorAmount = document.getElementById("cursorAmount");

// Building Amounts & New Costs

let cursorNum = 0;
let cursorNewCost = 15;

let ops = 0;
let ore = 0;

function updateHTML() {
    oreH1.innerHTML = Math.round(ore * 10) / 10;
    opsH3.innerHTML = Math.round(ops * 10) / 10; 

    if (isNaN(cursorNewCost)) {
        cursorNewCost = 15;
    }
    
    cursorCost.innerHTML = Math.round(cursorNewCost * 10) / 10;
    cursorAmount.innerHTML = cursorNum
}

function priceIncrease(baseCost, buildingNum) {
    const price = baseCost * Math.pow(1.15, buildingNum);
    return price;
}

// OPS Func + OPS Interval 

function OpsFunc() {
    ore += ops;
    updateHTML();
}

setInterval(OpsFunc, 1000)

button.addEventListener("click", function () {
    ore++;
    updateHTML();
});

// SHOP BUTTONS

// Cursor Func
cursorButton.addEventListener("click", function () {
    if (ore >= cursorNewCost) {
        ore -= cursorNewCost;
        ops += 0.1;
        cursorNum++;
        cursorNewCost = priceIncrease(15, cursorNum);
        updateHTML();
    }
    else {
        window.alert("Not Enough Funds");
    }
});