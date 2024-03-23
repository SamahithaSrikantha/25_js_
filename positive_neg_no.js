function returnNegative(number) {
    return number < 0 ? +number : -number;
}

const num = 5;
console.log(`Negative value of ${num} is ${returnNegative(num)}`);
