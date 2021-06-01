// use the concept of sorted and and unsorted array
// smallest value will be sorted first
export const selectionSort = function (inputList) {

    // copy input list
    let list = [...inputList];

    for (let i = 0; i < list.length - 1; i++) {
        // assume minimum is in the first index
        let min = i;
        for (let j = i + 1; j < list.length; j++) {
            if (list[j] < list[min]) {
                // update new min index
                min = j;
            }
        }
        if (min != i) {
            // swap if min != to i
            [list[i], list[min]] = [list[min], list[i]];
        }
    }
    return list;
}