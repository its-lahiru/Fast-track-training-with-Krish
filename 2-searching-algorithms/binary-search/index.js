const { binarySearch } = require('./binary-search');

const inputList = [1, 13, 34, 56, 67, 88, 100];
const searchItem = 100;

const itemIndex = binarySearch(inputList, searchItem);
console.log(itemIndex);