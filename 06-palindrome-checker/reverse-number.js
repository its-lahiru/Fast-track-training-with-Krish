function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}

export default { reverseNumber };