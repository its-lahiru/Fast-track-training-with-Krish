const { selectionSort } = require('./selection-sort');

let inputList = [12, 23, 1, 23, 56, 7, 4];
const sortedList = selectionSort(inputList);
console.log(sortedList);