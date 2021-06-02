import { linearSearch } from './linear-search';

const givenArray = ['a', 'b', 'c', 'd'];
const searchItem = 'b';

console.log('search item =', searchItem, ', given array =', givenArray);

const itemIndex = linearSearch(givenArray, searchItem);

console.log(`location index of the item = ${itemIndex}`);