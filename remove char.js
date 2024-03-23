function removeCharacters(str, charsToRemove) {
    return str.split('').filter(char => !charsToRemove.includes(char)).join('');
}


const originalString = "Hello World!";
const charsToRemove = "aeiou"; 
const modifiedString = removeCharacters(originalString, charsToRemove);
console.log("Original string:", originalString);
console.log("Modified string:", modifiedString);
