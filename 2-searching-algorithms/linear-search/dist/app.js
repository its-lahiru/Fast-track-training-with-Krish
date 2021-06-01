"use strict";

var _linearSearch = require("./linear-search");

var givenArray = ['a', 'b', 'c', 'd'];
var searchItem = 'b';
console.log('search item =', searchItem, ', given array =', givenArray);
var itemIndex = (0, _linearSearch.linearSearch)(givenArray, searchItem);
console.log("location index of the item = ".concat(itemIndex));