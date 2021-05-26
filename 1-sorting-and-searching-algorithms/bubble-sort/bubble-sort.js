function bubbleSort(inputList) {
    let isSorted = false

    // copy array
    const list = [...inputList]

    for (let i = 1; i < list.length - 1; i++) {
        // assume already sorted in each iteration
        isSorted = true;

        for (let j = 0; j < list.length - i; j++) {
            // right value is less than left value
            if (list[j + 1] < list[j]) {
                // swap values
                [list[j], list[j + 1]] = [list[j + 1], list[j]];
                isSorted = false;
            }
        }
        if (isSorted) {
            return list;
        }
    }
    return list;
}

module.exports = { bubbleSort }