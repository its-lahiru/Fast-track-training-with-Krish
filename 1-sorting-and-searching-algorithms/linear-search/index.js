const { linearSearch } = require('./linear-search');

let list = ['a', 'b', 'c', 'd'];
let searchItem = 'd';
const itemIndex = linearSearch(list, searchItem);

console.log(itemIndex);