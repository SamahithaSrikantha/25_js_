function findPlanetId(name) {
    const ids = {
        "mercury": 1,
        "venus": 2,
        "earth": 3,
        "mars": 4,
        "jupiter": 5,
        "saturn": 6,
        "uranus": 7,
        "neptune": 8
    };

    let lowercaseName = name.toLowerCase();

    if (lowercaseName in ids) {
        return ids[lowercaseName];
    } else {
        return "Planet not found";
    }
}

let name = "saturn";
let id = findPlanetId(name);
console.log(`The ID of ${name} is ${id}`);
