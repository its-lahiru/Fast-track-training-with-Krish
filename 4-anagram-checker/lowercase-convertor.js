function lowerCaseConvertor(word) {
    const letterArray = word.split('');
    const lowerLetterArray = [];
    for (let i = 0; i < letterArray.length; i++) {
        lowerLetterArray.push(letterArray[i].toLowerCase());
    }
    return lowerLetterArray;
}

module.exports = { lowerCaseConvertor };