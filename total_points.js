function calculateTotalPoints(wins, draws) {
    return (wins * 3) + draws;
}

// Example usage:
let wins = 5;
let draws = 2;
console.log("Total points:", calculateTotalPoints(wins, draws));