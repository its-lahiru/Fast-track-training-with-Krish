const { missingNumberFinder } = require('./missing-number-finder');

const numberSequence = [1, 2, 3, 4, 6, 7, 8, 9];
console.log('find missing number =>', numberSequence);


const missingNumber = missingNumberFinder(numberSequence);
if (missingNumber > 0)
    console.log('missing number is =', missingNumber);
else
    console.log('No number is missed');