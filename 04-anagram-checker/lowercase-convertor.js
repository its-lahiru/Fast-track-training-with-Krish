const lowerCaseConvertor = function (word) {
  const letterArray = word.split("");
  const lowerCaseLetterArray = [];
  for (let index = 0; index < letterArray.length; index++) {
    lowerCaseLetterArray.push(letterArray[index].toLowerCase());
  }
  return lowerCaseLetterArray;
};

module.exports = { lowerCaseConvertor };
