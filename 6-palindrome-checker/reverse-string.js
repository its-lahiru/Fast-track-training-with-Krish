function reverseString(str) {
    let length = str.length;
    let reversedString = '';
    for (let i = length - 1; i >= 0; i--)
        reversedString += str[i];
    return reversedString;
}

module.exports = { reverseString };