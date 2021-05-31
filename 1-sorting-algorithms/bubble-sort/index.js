const { bubbleSort } = require('./bubble-sort');

const unsortedArray = [12, 23, 34, 1, 56, 33];
console.log('unsorted array =', unsortedArray);

const sortedArray = bubbleSort(unsortedArray);
console.log('sorted array =', sortedArray);