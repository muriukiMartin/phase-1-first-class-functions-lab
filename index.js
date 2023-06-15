// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
    let driversSelected = [];
    let firstTwo = function () {
        driversSelected = drivers.slice(0, 2);
        return driversSelected;
    }
    return firstTwo();
}

const returnLastTwoDrivers = (drivers) => {
    let driversSelected = [];
    let lastTwo = function () {
        driversSelected = drivers.slice(-2);
        return driversSelected;
    }
    return lastTwo();
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (multiplier) => {
    let fareMultiplier = function () {
        return multiplier * multiplier;
    }
    return fareMultiplier;
}

function fareDoubler(fare) {
    return fare * 2;
}

function fareTripler(fare) {
    return fare * 3;
}

function selectDifferentDrivers(selectedDrivers, selectedFunction) {
    if (selectedFunction === returnFirstTwoDrivers) {
        return  selectedFunction(selectedDrivers);
    }
    else if (selectedFunction === returnLastTwoDrivers) {
        return selectedFunction(selectedDrivers);
    }
}
