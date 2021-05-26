const { mergeSort } = require('./merge-sort');

const list = [21, 67, 43, 1, 99, 33];
console.log(list);

const sortedList = mergeSort(list);
console.log(sortedList);