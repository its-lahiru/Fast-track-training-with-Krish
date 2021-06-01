import { selectionSort } from './selection-sort';

const unsortedArray = [12, 23, 1, 23, 56, 7, 4];
const sortedList = selectionSort(unsortedArray);

console.log('unsorted array =', unsortedArray);
console.log('sorted array =', sortedList);