function removeSpaces(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            result += str[i];
        }
    }
    return result;
}

// Example usage:
const inputString = "Hello World";
const stringWithoutSpaces = removeSpaces(inputString);
console.log("String without spaces:", stringWithoutSpaces);
