import { mergeSort } from './merge-sort';

const unsortedArray = [21, 67, 43, 1, 99, 33];
console.log('unsorted array =', unsortedArray);

const sortedArray = mergeSort(unsortedArray);
console.log('sorted array =', sortedArray);