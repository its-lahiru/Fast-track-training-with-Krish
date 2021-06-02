const reverseNumber = function (num) {
    // copy input number
    let number = num;
    let reversedNumber = 0;

    // loop until number > 0
    while (number > 0) {
        // get remainder
        let remainder = number % 10;
        reversedNumber = (reversedNumber * 10) + remainder;
        // round down the divided number
        number = Math.floor(number / 10);
    }
    // if number < 0 return -1
    if (number < 0) {
        return -1;
    }
    return reversedNumber;
}

module.exports = { reverseNumber };