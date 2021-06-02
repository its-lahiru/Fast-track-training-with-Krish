const { findThirdLargestNumber } = require('./third-largest-finder');

const array = [6, -5, -4, -3, -2, -1];
console.log('Given array =', array);
const thirdLarget = findThirdLargestNumber(array);

console.log(`${thirdLarget} is the third largest number`);