const { binarySearch } = require('./binary-search');

const inputList = [1, 13, 221, 4235, 3, 5, 34];
const searchItem = 221;

const itemIndex = binarySearch(inputList, searchItem);
console.log(itemIndex);