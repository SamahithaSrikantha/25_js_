function catAndDogYears(catYears, dogYears) {
    let humanYears = [];
    
    // Convert cat years to human years
    if (catYears === 1) {
        humanYears.push(15);
    } else if (catYears === 2) {
        humanYears.push(24);
    } else if (catYears > 2) {
        humanYears.push(24 + (catYears - 2) * 4);
    } else {
        return "Invalid number of cat years.";
    }
    
    // Convert dog years to human years
    if (dogYears === 1) {
        humanYears.push(15);
    } else if (dogYears === 2) {
        humanYears.push(24);
    } else if (dogYears > 2) {
        humanYears.push(24 + (dogYears - 2) * 5);
    } else {
        return "Invalid number of dog years.";
    }
    
    return humanYears;
}

// Example usage:
let catYears = 4;
let dogYears = 5;
console.log("Human years for cat and dog:", catAndDogYears(catYears, dogYears));