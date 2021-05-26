const { bubbleSort } = require('./bubble-sort');

let originalList = [12, 23, 34, 1, 56, 33];
let sortedArray = bubbleSort(originalList);
console.log(sortedArray);