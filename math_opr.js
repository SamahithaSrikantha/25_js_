
function promptNumber(message) {
    let input;
    do {
        input = parseFloat(prompt(message));
    } while (isNaN(input));
    return input;
}

let num1 = promptNumber("Enter the first number:");

let operation;
do {
    operation = prompt("Enter the operation (+, -, *, /):");
} while (!['+', '-', '*', '/'].includes(operation));

let num2 = promptNumber("Enter the second number:");

let result;
switch (operation) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
    
        if (num2 === 0) {
            result = "Error! Division by zero.";
        } else {
            result = num1 / num2;
        }
        break;
}
console.log("Result:", result);
