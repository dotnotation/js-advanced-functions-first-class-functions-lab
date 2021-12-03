const returnFirstTwoDrivers = (array) => [array[0], array[1]];

const returnLastTwoDrivers = (array) => [array[array.length - 2], array[array.length - 1]];

const selectingDrivers =  [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer){
    return (fare) => fare * integer;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, driverFunction){
    return driverFunction(drivers);
}