const button = document.getElementById("button");
const oreH1 = document.getElementById("ore");
const opsH3 = document.getElementById("ops");

// Shop Elements
const droneButton = document.getElementById("drone");
const miningBotButton = document.getElementById("miningBot");
const oreExtButton = document.getElementById("oreExt");
const drillRovButton = document.getElementById("drillRov");

// Building Costs and Amounts
const droneCost = document.getElementById("droneCost");
const droneAmount = document.getElementById("droneAmount");

const miningBotCost = document.getElementById("miningBotCost");
const miningBotAmount = document.getElementById("miningBotAmount");

const oreExtCost = document.getElementById("oreExtCost");
const oreExtAmount = document.getElementById("oreExtAmount");

const drillRovCost = document.getElementById("drillRovCost");
const drillRovAmount = document.getElementById("drillRovAmount");

const miningSatCost = document.getElementById("miningSatCost");
const miningSatAmount = document.getElementById("miningSatAmount");

// Building Amounts & New Costs

let droneNum = 0;
let droneNewCost = 15;

let miningBotNum = 0;
let miningBotNewCost = 100;

let oreExtNum = 0;
let oreExtNewCost = 1100;

let drillRovNum = 0;
let drillRovNewCost = 12000;

let miningSatNum = 0;
let miningSatNewCost = 130000

let ops = 0;
let ore = 0;

function updateHTML() {
    oreH1.innerHTML = Math.round(ore * 10) / 10;
    opsH3.innerHTML = Math.round(ops * 10) / 10; 
    
    droneCost.innerHTML = Math.ceil(droneNewCost);
    droneAmount.innerHTML = droneNum;

    miningBotCost.innerHTML = Math.ceil(miningBotNewCost);
    miningBotAmount.innerHTML = miningBotNum;

    oreExtCost.innerHTML = Math.ceil(oreExtNewCost);
    oreExtAmount.innerHTML = oreExtNum;

    drillRovCost.innerHTML = Math.ceil(drillRovNewCost);
    drillRovAmount.innerHTML = drillRovNum;
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

button.addEventListener("click", () => {
    ore++;
    updateHTML();
});

// SHOP BUTTONS

// drone Func
droneButton.addEventListener("click", () => {
    if (ore >= droneNewCost) {
        ore -= droneNewCost;
        ops += 0.1;
        droneNum++;
        droneNewCost = priceIncrease(15, droneNum);
        updateHTML();
    }
    else {
        window.alert("Not Enough Ore");
    }
})

// miningBot func
miningBotButton.addEventListener("click", () => {
    if (ore >= miningBotNewCost) {
        ore -= miningBotNewCost;2
        ops += 1;
        miningBotNum++;
        miningBotNewCost = priceIncrease(100, miningBotNum);
        updateHTML();
    }
    else {
        window.alert("Not Enough Ore");
    }
})

// oreExt func
oreExtButton.addEventListener("click", () => {
    if (ore >= oreExtNewCost) {
        ore -= oreExtNewCost;
        ops += 8;
        oreExtNum++;
        oreExtNewCost = priceIncrease(1100, oreExtNum);
        updateHTML();
    }
    else {
        window.alert("Not Enough Ore");
    }
})

drillRovButton.addEventListener("click", () => {
    if (ore >= drillRovNewCost) {
        ore -= drillRovNewCost;
        ops += 47;
        drillRovNum++;
        drillRovNewCost = priceIncrease(12000, drillRovNum);
        updateHTML();
    }
    else {
        window.alert("Not Enough Ore");
    }
})

