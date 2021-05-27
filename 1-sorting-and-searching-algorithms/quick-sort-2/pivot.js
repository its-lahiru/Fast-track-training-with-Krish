function pivot(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start];
    // position which pivot fits in sorted array
    let swapIndex = start;

    // swap values
    const swap = (list, i, j) => [list[i], list[j]] = [list[j], list[i]];

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            // swap current index value with swap index value
            swap(arr, swapIndex, i);
            // console.log(arr);
        }
    }
    swap(arr, start, swapIndex);
    // console.log(arr);
    return swapIndex;
}

// pivot([4, 8, 2, 1, 5, 7, 6, 3]);


module.exports = { pivot };