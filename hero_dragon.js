function fightDragons(heroPower, dragonStrength) {
    return heroPower > dragonStrength ? "Hero wins!" : (heroPower < dragonStrength ? "Dragons win!" : "It's a draw!");
}

// Example usage:
const heroPower = 100;
const dragonStrength = 80;
console.log(fightDragons(heroPower, dragonStrength));
