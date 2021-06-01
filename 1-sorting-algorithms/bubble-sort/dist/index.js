"use strict";

var _bubbleSort = require("./bubble-sort");

var unsortedArray = [12, 23, 34, 1, 56, 33];
console.log('unsorted array =', unsortedArray);
var sortedArray = (0, _bubbleSort.bubbleSort)(unsortedArray);
console.log('sorted array =', sortedArray);