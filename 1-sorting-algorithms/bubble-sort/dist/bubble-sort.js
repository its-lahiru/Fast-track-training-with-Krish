"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bubbleSort = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var bubbleSort = function bubbleSort(inputList) {
  var isSorted = false; // copy array

  var list = _toConsumableArray(inputList);

  for (var index_i = 1; index_i < list.length - 1; index_i++) {
    // assume already sorted in each iteration
    isSorted = true;

    for (var index_j = 0; index_j < list.length - index_i; index_j++) {
      // right value is less than left value
      if (list[index_j + 1] < list[index_j]) {
        // swap values
        var _ref = [list[index_j + 1], list[index_j]];
        list[index_j] = _ref[0];
        list[index_j + 1] = _ref[1];
        isSorted = false;
      }
    }

    if (isSorted) {
      return list;
    }
  }

  return list;
};

exports.bubbleSort = bubbleSort;