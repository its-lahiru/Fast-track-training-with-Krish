const { merge } = require('./merge');

// split, sort, merge
// divide and conquer
function mergeSort(list) {
    if (list.length <= 1) return list;
    let middle = Math.floor(list.length / 2);
    let left = mergeSort(list.slice(0, middle));
    let right = mergeSort(list.slice(middle));
    return merge(left, right);
}

module.exports = { mergeSort };