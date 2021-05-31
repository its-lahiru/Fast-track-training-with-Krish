const { pivot } = require('./pivot');

function quickSort(arr, left = 0, right = arr.length - 1) {

    if (left < right) {
        const pivotIndex = pivot(arr, left, right);
        // recursively sort left potion of the array
        quickSort(arr, left, pivotIndex - 1);
        // recursively sort right potion of the array
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

module.exports = { quickSort };