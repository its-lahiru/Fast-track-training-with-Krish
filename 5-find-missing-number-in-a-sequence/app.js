const { missingNumberFinder, missingNumbersFinderV2 } = require("./missing-number-finder");

const numberSequence = [1, 2, 3, 4, 5, 6, 8];
const arraySize = 10;
console.log('missing numbers =>', missingNumbersFinderV2(numberSequence, arraySize));


// const numberSequence = [1, 2, 3, 4, 5, 6, 8];
// console.log('find missing number =>', numberSequence);

// const result = missingNumberFinderV2(numberSequence);
// if (result > 0)
//     console.log('missing number is =', result);
// else
//     console.log('No number is missed');