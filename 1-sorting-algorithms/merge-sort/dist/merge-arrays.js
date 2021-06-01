"use strict";

var mergeArrays = function mergeArrays(list_i, list_j) {
  var list = [];
  var i = 0;
  var j = 0;

  while (i < list_i.length && j < list_j.length) {
    if (list_i[i] < list_j[j]) {
      list.push(list_i[i]);
      i++;
    } else {
      // else if (list_i[i] > list_j[j])
      list.push(list_j[j]);
      j++;
    }
  }

  while (i < list_i.length) {
    list.push(list_i[i]);
    i++;
  }

  while (j < list_j.length) {
    list.push(list_j[j]);
    j++;
  }

  return list;
};

module.exports = {
  mergeArrays: mergeArrays
};