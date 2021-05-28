const { lowerCaseConvertor } = require('./lowercase-convertor');

function anagramFinder(word1, word2) {
    const letterArray1 = lowerCaseConvertor(word1);
    // console.log(letterArray1);
    const letterArray2 = lowerCaseConvertor(word2);
    // console.log(letterArray2);

    const sortedArray1 = letterArray1.sort();
    const sortedArray2 = letterArray2.sort();
    let isAnagram = false;

    for (let i = 0; i < sortedArray1.length; i++) {
        isAnagram = true;
        if (sortedArray1[i] !== sortedArray2[i]) {
            console.log(`'${word1}' and '${word2}' are not anagrams`);
            isAnagram = false;
            break;
        }
    }
    if (isAnagram) {
        console.log(`'${word1}' and '${word2}' are anagrams`);
    }
}

module.exports = { anagramFinder };