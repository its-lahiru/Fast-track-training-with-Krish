function reverseString(inputString) {
    const length = inputString.length;
    let reversedString = '';
    for (let index = length - 1; index >= 0; index--)
        reversedString += inputString[index];
    return reversedString;

    // return inputString.split().reverse().join('');
}

export default { reverseString };