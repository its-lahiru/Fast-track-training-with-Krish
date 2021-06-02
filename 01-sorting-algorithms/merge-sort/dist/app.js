"use strict";

var _require = require('./merge-sort'),
    mergeSort = _require.mergeSort;

var unsortedArray = [21, 67, 43, 1, 99, 33];
console.log('unsorted array =', unsortedArray);
var sortedArray = mergeSort(unsortedArray);
console.log('sorted array =', sortedArray);