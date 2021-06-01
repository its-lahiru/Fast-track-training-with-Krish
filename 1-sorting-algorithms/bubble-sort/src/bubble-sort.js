export const bubbleSort = function (inputList) {
    let isSorted = false;

    // copy array
    const list = [...inputList];

    for (let index_i = 1; index_i < list.length - 1; index_i++) {
        // assume already sorted in each iteration
        isSorted = true;

        for (let index_j = 0; index_j < list.length - index_i; index_j++) {
            // right value is less than left value
            if (list[index_j + 1] < list[index_j]) {
                // swap values
                [list[index_j], list[index_j + 1]] = [list[index_j + 1], list[index_j]];
                isSorted = false;
            }
        }
        if (isSorted) {
            return list;
        }
    }
    return list;
};