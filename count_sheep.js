function countSheep(arr) {
    return arr.reduce((acc, current) => acc + current, 0);
}

const sheepArray = [0, 1, 0, 1, 1, 0, 1, 1];
console.log("Number of sheep present:", countSheep(sheepArray));
