import { quickSort } from './quick-sort';

const unsortedArray = [-12, 4, 8, 2, -8, 1, 5, 7, 6, 3];
console.log('unsorted array =', unsortedArray);

const sortedArray = quickSort(unsortedArray);
console.log('sorted array =', sortedArray);