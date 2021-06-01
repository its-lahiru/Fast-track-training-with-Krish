"use strict";

var _binarySearch = require("./binary-search");

var inputList = [1, 13, 34, 56, 67, 88, 100];
var searchItem = 100;
console.log('searchItem:', searchItem, ', inputList:', inputList);
var itemIndex = (0, _binarySearch.binarySearch)(inputList, searchItem);
console.log('itemIndex:', itemIndex);