const { bubbleSort } = require('./bubble-sort');

let unsortedArray = [12, 23, 34, 1, 56, 33];
console.log('unsorted array =', unsortedArray);
let sortedArray = bubbleSort(unsortedArray);
console.log('sorted array =', sortedArray);