const { selectionSort } = require('./selection-sort');

let unsortedArray = [12, 23, 1, 23, 56, 7, 4];
console.log('unsorted array =', unsortedArray);
const sortedList = selectionSort(unsortedArray);
console.log('sorted array =', sortedList);