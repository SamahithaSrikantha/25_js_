function average(array) {
    
    const sum = array.reduce((acc, num) => acc + num, 0);
    
    
    const avg = sum / array.length;
    

    const roundedAvg = Math.floor(avg);
    
    return roundedAvg;
}

function inputArray() {
    const input = prompt("Enter numbers separated by commas:");
    const array = input.split(",").map(Number);
    return array;
}

const array = inputArray();
const result = average(array);
console.log("Average:", result);
