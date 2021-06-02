// use the concept of sorted and and unsorted array
// smallest value will be sorted first
export const selectionSort = function (inputList) {

    // copy input list
    let list = [...inputList];

    for (let index_i = 0; index_i < list.length - 1; index_i++) {
        // assume minimum is in the first index_i
        let min = index_i;
        for (let index_j = index_i + 1; index_j < list.length; index_j++) {
            if (list[index_j] < list[min]) {
                // update new min index_i
                min = index_j;
            }
        }
        if (min != index_i) {
            // swap if min != to index_i
            [list[index_i], list[min]] = [list[min], list[index_i]];
        }
    }
    return list;
}