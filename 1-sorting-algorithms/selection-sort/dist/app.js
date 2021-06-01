"use strict";

var _selectionSort = require("./selection-sort");

var unsortedArray = [12, 23, 1, 23, 56, 7, 4];
var sortedList = (0, _selectionSort.selectionSort)(unsortedArray);
console.log('unsorted array =', unsortedArray);
console.log('sorted array =', sortedList);