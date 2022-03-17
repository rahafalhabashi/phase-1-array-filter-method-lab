function findMatching(arrNames, string) {
    return arrNames.filter(elementInArray => elementInArray.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(arrNames, string) {
    return arrNames.filter(driverName => driverName.charAt(0) === string.charAt(0))
}

function matchName(drivers, str) {
    return drivers.filter(driver => driver.name === str)
}

console.log(matchName);












// const findMatching = drivers.filter() 

//(array, check against array)
// 