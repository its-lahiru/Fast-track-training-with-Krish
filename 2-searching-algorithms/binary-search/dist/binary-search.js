"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.binarySearch = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// divide and conquer
// for sorted arrays
var binarySearch = function binarySearch(sortedList, searchItem) {
  var list = _toConsumableArray(sortedList);

  var start = 0;
  var end = list.length - 1; // initial middle

  var middle = Math.floor((start + end) / 2);

  while (list[middle] !== searchItem && start <= end) {
    // console.log(start, middle, end);
    if (searchItem < list[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    } // new middle


    middle = Math.floor((start + end) / 2);
  } // console.log(start, middle, end);


  if (list[middle] == searchItem) {
    return middle;
  }

  return -1;
};

exports.binarySearch = binarySearch;