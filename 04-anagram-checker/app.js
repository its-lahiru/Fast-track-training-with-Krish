const { isAnagramV1, isAnagramV2 } = require("./anagram-finder");

const word1 = "racee";
const word2 = "care";

// not case sensitive
// console.log('isAnagramV1:', isAnagramV1(word1, word2));

// case sensitive
console.log('isAnagramV2:', isAnagramV2(word1, word2));
