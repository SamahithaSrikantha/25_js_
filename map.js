function doubleValues(arr) {
    return arr.map(num => num * 2);
}

// Example usage:
let originalArray = [1, 2, 3, 4, 5];
let doubledArray = doubleValues(originalArray);
console.log("Original array:", originalArray);
console.log("Doubled array:", doubledArray);