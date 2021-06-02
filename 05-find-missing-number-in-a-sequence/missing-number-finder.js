const missingNumberFinder = (arr) => {
    const array = [...arr];
    const arrayLength = arr.length - 1;
    // differences array for check mismatch differences
    let differences = [];
    // index of missing number
    let misMatchDifferenceIndex;
    // general diffrencce of the sequnce
    let difference;
    let isNumberMissed = false;

    for (let index_i = 0; index_i < arrayLength; index_i++) {
        // get the difference between each pair and add to the array
        differences.push(array[index_i + 1] - array[index_i]);
    }

    // for (let index_j in differences) {
    for (let index_j = 0; index_j < differences.length; index_j++) {
        // when right difference is large
        if (differences[index_j - 1] < differences[index_j]) {
            // so missing number index should be index_j + 1
            // because difference between (i) and (i+1) is stored in "i" th position in difference array
            misMatchDifferenceIndex = index_j;
            // normal difference is equal to difference[index_j] divided by 2
            difference = differences[index_j] / 2;
            // definitely number is missed
            isNumberMissed = true;
            break;
        }
    }

    if (isNumberMissed) {
        // missing number is equal to supercede value + differnce of the sequnce
        return array[misMatchDifferenceIndex] + difference;
    }
    else {
        return -1;
    }
}


// missingNumbersFinderV2
const missingNumbersFinderV2 = (givenArray, arraySize) => {
    // copy the given array
    const array = givenArray;
    // size of the sequence
    const size = arraySize;
    // array for store missing numbers
    let missingNumbers = [];

    // iterate over given sequence size and compare it with the given array
    for (let value = 1; value <= size; value++) {
        // assume number is not found
        let isFound = false;
        for (const element of array) {
            // if the value is exists
            if (element === value) {
                isFound = true;
                break;
            }
        }
        // if value is not exists
        if (!isFound) {
            missingNumbers.push(value);
        }
    }
    return missingNumbers;


    // start from zero since sequence does not start with zero
    // for (let index = 1; index <= size; index++) {
    //     // if the number is not in array it return -1
    //     if (array.indexOf(index) === -1) {
    //         // add missing number to the array
    //         missingNumbers.push(index);
    //     }
    // }
    // return missingNumbers;
}

module.exports = { missingNumberFinder, missingNumbersFinderV2 };