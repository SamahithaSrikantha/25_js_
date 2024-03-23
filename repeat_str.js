function repeatString(str, numTimes) {
    return Array.from({ length: numTimes }, () => str).join('');
}


const originalString = "Hello";
const repeatedTimes = 3;
console.log("Repeated string:", repeatString(originalString, repeatedTimes));
