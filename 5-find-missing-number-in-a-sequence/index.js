function findMissingNumber(arr) {
    const arrLength = arr.length + 1;
    let indices = [];
    let diffreces = [];
    // let diffrence;
    for (let i = 0; i < arrLength; i++) {
        let diff;
        for (let j = 0; j < arrLength; j++) {
            diff = arr[j + 1] - arr[j];
        }
    }
}

console.log(findMissingNumber[1, 2, 3, 5, 6, 7, 8, 9]);