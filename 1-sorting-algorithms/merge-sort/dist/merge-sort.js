"use strict";

var _require = require('./merge-arrays'),
    mergeArrays = _require.mergeArrays; // split, sort, merge
// divide and conquer


function mergeSort(list) {
  if (list.length <= 1) {
    return list;
  }

  var middle = Math.floor(list.length / 2);
  var left = mergeSort(list.slice(0, middle));
  var right = mergeSort(list.slice(middle));
  return mergeArrays(left, right);
}

module.exports = {
  mergeSort: mergeSort
};