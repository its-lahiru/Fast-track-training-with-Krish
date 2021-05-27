function anagramChecker(word1, word2) {
    const letterArray1 = getLowerCaseArray(word1);
    // console.log(letterArray1);
    const letterArray2 = getLowerCaseArray(word2);
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

function getLowerCaseArray(word) {
    const letterArray = word.split('');
    const lowerLetterArray = [];
    for (let i = 0; i < letterArray.length; i++) {
        lowerLetterArray.push(letterArray[i].toLowerCase());
    }
    return lowerLetterArray;
}

const word1 = 'racce'
const word2 = 'care'
anagramChecker(word1, word2);