const { quickSort } = require('./quick-sort');

let inputList = [5, 4, 3, 2, 1, 6];

const sortedList = quickSort(inputList);
console.log(sortedList);