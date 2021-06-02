import { mergeArrays } from './merge-arrays';

// split, sort, merge
// divide and conquer
export const mergeSort = function (list) {
    if (list.length <= 1) {
        return list;
    }

    let middle = Math.floor(list.length / 2);
    let left = mergeSort(list.slice(0, middle));
    let right = mergeSort(list.slice(middle));
    return mergeArrays(left, right);
}