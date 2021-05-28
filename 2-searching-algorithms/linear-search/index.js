const { linearSearch } = require('./linear-search');

let givenArray = ['a', 'b', 'c', 'd'];
console.log('given array =', givenArray);
let searchItem = 'b';
console.log('search item =', searchItem);

const itemIndex = linearSearch(givenArray, searchItem);

console.log(`location index of the item = ${itemIndex}`);