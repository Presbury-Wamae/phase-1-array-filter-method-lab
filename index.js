// Code your solution here
function findMatching(drivers, nameToMatch){
    return drivers.filter(function(driver){
        return driver.toLowerCase() === nameToMatch.toLowerCase()
    })
}

function fuzzyMatch(drivers, letters){
    return drivers.filter(function(driver){
        return driver.toLowerCase().startsWith(letters.toLowerCase())
    })
}

function matchName(driver, name){
    return driver.filter(function(driver){
        return driver.name === name
    })

}
