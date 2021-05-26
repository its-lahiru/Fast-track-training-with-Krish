function quickSort(inputList) {

    // less than pivot
    let leftSmall = [];
    // greater that pivot
    let rightBig = [];

    // copy input array
    const list = [...inputList];

    // return if the list has only one value
    if (list.length < 2) {
        return list;
    }

    // define first values of the list as pivot
    const pivot = list[0];

    // filter values smaller than pivot
    leftSmall = list.filter((item) => item < pivot);
    // filter values bigger than pivot
    rightBig = list.filter((item) => item > pivot);

    // recursively filter values until list has only one value
    return [...quickSort(leftSmall), pivot, ...quickSort(rightBig)];
}

module.exports = { quickSort };