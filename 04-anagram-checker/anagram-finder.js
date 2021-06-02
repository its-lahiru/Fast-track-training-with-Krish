// not case sensitive
const { lowerCaseConvertor } = require("./lowercase-convertor");

const isAnagramV1 = (word1, word2) => {
  const letterArray1 = lowerCaseConvertor(word1);
  const letterArray2 = lowerCaseConvertor(word2);

  const sortedArray1 = letterArray1.sort();
  const sortedArray2 = letterArray2.sort();
  let isAnagram = true;

  for (const index in sortedArray1) {
    if (sortedArray1[index] !== sortedArray2[index]) {
      isAnagram = false;
      break;
    }
  }
  if (isAnagram) return true;
  else return false;
};




// case sensitive
const isAnagramV2 = (word1, word2) => {
  // assume words are not anagram
  let isAnagram = false;

  // create map using first word
  const charMap1 = createCharMap(word1);
  // create map using second word
  const charMap2 = createCharMap(word2);

  // iterate over maps and compare keys and their respective values
  for (const [character1, count1] of charMap1.entries()) {
    for (const [character2, count2] of charMap2.entries()) {
      if (character1 === character2 && count1 === count2) {
        isAnagram = true;
        break;
      } else {
        isAnagram = false;
      }
    }
  }
  return isAnagram;
};

const createCharMap = (word) => {
  // char array for word
  const charArray = word.split("");
  // create new map
  let charMap = new Map();
  for (const char of charArray) {
    // if key exists increment value count
    if (charMap.has(char)) {
      // get current value count
      let letterCount = charMap.get(char);
      // increment value count by 1
      charMap.set(char, letterCount + 1);
    }
    else {
      // create new key with count value 1
      charMap.set(char, 1);
    }
  }
  return charMap;
}

module.exports = { isAnagramV1, isAnagramV2 };
