const { quickSort } = require('./quick-sort');

const array = [-12, 4, 8, 2, -8, 1, 5, 7, 6, 3];
const sortedArray = quickSort(array);
console.log(sortedArray);