// returns pivot's sorted location index
function pivot(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start];
    // position which pivot fits in sorted array
    let swapIndex = start;

    // swap values function
    const swap = (list, i, j) => [list[i], list[j]] = [list[j], list[i]];

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            // swap current index value with swap index value
            swap(arr, swapIndex, i);
            // console.log(arr);
        }
    }
    // end of the loop exchange swap index value and start index values;
    swap(arr, start, swapIndex);
    return swapIndex;
}

module.exports = { pivot };