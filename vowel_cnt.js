function countVowels(str) {

    const vowelPattern = /[aeiou]/g;
    const vowels = str.match(vowelPattern);

    return vowels ? vowels.length : 0;
}

console.log(countVowels("hello")); 
console.log(countVowels("world"));