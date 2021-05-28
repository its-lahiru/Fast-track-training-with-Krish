const { palindromeDateChecker } = require('./palindrome-date-checker');
const { reverseNumber } = require('./reverse-number');
const { reverseString } = require('./reverse-string');

function palindromeChecker(arr) {
    let items = [...arr];

    for (const i in items) {
        let item = items[i];
        // check if item is object type
        if (typeof item === 'object') {
            let object = item;
            // if isDate type it should have Date() type function
            if (typeof object.getMonth === 'function') {
                let isPalindrome = palindromeDateChecker(object);
                if (isPalindrome)
                    console.log(`Date '${object}' is palindrome.`);
                else
                    console.log(`Date '${object}' is not palindrome.`);
            } else {
                // loop through object
                for (const property in object) {
                    let valueArray = [];
                    let propertyValue = object[property];
                    valueArray.push(propertyValue);
                    // recursively check object for palindromes
                    palindromeChecker(valueArray);
                }
            }
        } else {
            // check for number type items
            if (typeof item === 'number') {
                let number = item;
                let reversedNumber = reverseNumber(number);
                if (reversedNumber === number)
                    console.log(`Number '${item}' is palindrome.`);
                else
                    console.log(`Number '${item}' is not palindrome.`);
            }
            // check for string type items
            if (typeof item === 'string') {
                let str = item;
                let reversedString = reverseString(str);
                if (reversedString === str)
                    console.log(`String '${item}' is palindrome.`);
                else
                    console.log(`String '${item}' is not palindrome.`);
            }
            // check for boolean type items
            if (typeof item === 'boolean')
                console.log(`Boolean ${item} is not palindrome.`);
        }
    }
}

module.exports = { palindromeChecker };