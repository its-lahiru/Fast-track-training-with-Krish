function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}

module.exports = { reverseNumber };