const perf = require("execution-time")();
//Step 2: Write Code

//1. Sum Zero (a.k.a play on words that refers to sub zero from mortal kombat)
function subZero() {
  let array = [1, 2, 3, 4, 5, 6, 7, 87, 5, 0, 4, 5, 6, 0];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; i++) {
        if (array[i] + array[j] === 0) {
          return true
        } else {
          return false
        }
      }
    }
  }

console.log(subZero());

perf.start(); // Starts timer
subZero();
let resultsZero = perf.stop();

console.log("runtime", resultsZero.preciseWords);

// Answers: 

//function will be in runtime 136.6 μs
//space complexity is O(n)

//2. Unique Characters
function hasUniqueChars(word) {
  let uniqueChars = new Set([]);
  for (let i = 0; i < word.length; i++) {
    uniqueChars.add(word[i]);
  }
  return uniqueChars.size === word.length;
}
console.log(hasUniqueChars('!!!'))
// console.log(uniqueChar("holy"));

perf.start(); // Starts timer
hasUniqueChars("!!!");
let resultsUniqChar = perf.stop();

console.log("runtime", resultsUniqChar.preciseWords);

// Answers: 

//runtime 26.7 μs
//space complexity of O(1)

//3. Pangram Sentance
function pangrams(s) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let regex = /\s/g;
  let lowercase = s.toLowerCase().replace(regex, "");

  for (let i = 0; i < alphabet.length; i++) {
    if (lowercase.indexOf(alphabet[i]) === -1) {
      return "not pangram";
    }
  }

  return "pangram";
}

console.log(pangrams("We promptly judged antique ivory buckles for the prize"));

perf.start(); // Starts timer
pangrams("We promptly judged antique ivory buckles for the prize");
let resultsPangrams = perf.stop();

console.log("runtime", resultsPangrams.preciseWords);

//Answers:

//runtime 17.5 μs
//space complexity is O(n)

//4. Longest Word
function findLongestWord(str) {
  var strSplit = str.split(" ");
  var longestWord = 0;
  for (var i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longestWord) {
      longestWord = strSplit[i].length;
    }
  }
  return longestWord;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

perf.start(); // Starts timer
findLongestWord("The quick brown fox jumped over the lazy dog");
let resultsLongestWords = perf.stop();

console.log("runtime", resultsLongestWords.preciseWords);

//Answers:

//runtime 17.6 μs
//space complexity is O(n)

