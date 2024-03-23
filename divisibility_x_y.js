function isDivisibleByXAndY(number, x, y) {
    return number % x === 0 && number % y === 0;
}

let number = 12;
let x = 3;
let y = 4;
console.log(`${number} is divisible by ${x} and ${y}:`, isDivisibleByXAndY(number, x, y));