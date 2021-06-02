// inspired by bubble sort
const findThirdLargestNumber = function (arr) {
    const list = [...arr];
    let thirdLargest;
    let isSorted = true;

    for (let i = 0; i < list.length; i++) {
        // assume array is already sorted
        isSorted = true;
        for (let j = 0; j < list.length - 1; j++) {
            if (list[j] > list[j + 1]) {
                // everytime largest find set it as thrid largest
                thirdLargest = list[j];
                [list[j], list[j + 1]] = [list[j + 1], list[j]];
                // obviously array is not sorted
                isSorted = false;
            }
        }
        // break when outer loop loops 3 times (0th, 1st, 2nd)
        if (i === 2) {
            break;
        }
    }
    // if sorted already, return 3rd index value from last
    if (isSorted) {
        thirdLargest = list[list.length - 3];
        return thirdLargest;
    }
    return thirdLargest;
}

module.exports = { findThirdLargestNumber };