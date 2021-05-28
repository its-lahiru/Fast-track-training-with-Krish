// divide and conquer
// for sorted arrays
function binarySearch(sortedList, searchItem) {
    let list = [...sortedList];

    let start = 0;
    let end = list.length - 1;

    // initial middle
    let middle = Math.floor((start + end) / 2);


    while (list[middle] !== searchItem && start <= end) {
        // console.log(start, middle, end);
        if (searchItem < list[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        // new middle
        middle = Math.floor((start + end) / 2);
    }
    // console.log(start, middle, end);
    if (list[middle] == searchItem) {
        return middle;
    }
    return -1;

}

module.exports = { binarySearch };