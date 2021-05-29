function missingNumberFinder(arr) {
    const items = [...arr];
    const length = arr.length - 1;
    // differences array for check mismatch differences
    let differences = [];
    // index of missing number
    let missingNumberIndex;
    // general diffrencce of the sequnce
    let difference;
    let isNumberMissed = false;

    for (let i = 0; i < length; i++) {
        // get the difference between each pair
        let diff = items[i + 1] - items[i];
        // add differences to a array
        differences.push(diff);
    }

    for (let i = 0; i < differences.length - 1; i++) {
        // assume number is not missed
        isNumberMissed = false;
        // when right difference is large
        if (differences[i] < differences[i + 1]) {
            // missing number index should be mismatched difference index + 1
            missingNumberIndex = i + 1 + 1;
            // get the normal difference in the sequence
            difference = differences[i + 1] / 2;
            // definitely number is missed
            isNumberMissed = true;
            break;
        }
        // when left difference is large
        if (differences[i] > differences[i + 1]) {
            // missing number index should be mismatched difference index + 1 
            missingNumberIndex = i + 1;
            // get the normal difference in the sequence
            difference = differences[i] / 2;
            // definitely number is missed
            isNumberMissed = true;
            break;
        }
    }

    if (isNumberMissed)
        // missing number is equal to supercede value + differnce of the sequnce
        return items[missingNumberIndex - 1] + difference;
    else
        return -1;

}

module.exports = { missingNumberFinder };