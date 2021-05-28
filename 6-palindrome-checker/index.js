const mockValues = [
    'mom',
    'civiC',
    new Date('11-11-11'),
    67,
    909,
    'Poopy',
    'youi',
    'qqq',
    { id: 101, name: 'anna' },
    new Date('09-11-11'),
    true,
];

function palindromeChecker(arr) {
    let items = [...arr];

    for (const i in items) {
        let item = mockValues[i];
        if (typeof item === 'object') {
            let object = item;
            if (typeof object.getMonth === 'function') {
                let isPalindrome = datePalindromeChecker(object);
                if (isPalindrome)
                    console.log(`Date '${object}' is palindrome.`);
                else
                    console.log(`Date '${object}' is not palindrome.`);
            } else {
                for (const property in object) {
                    let valueArray = [];
                    // console.log(property);
                    let propertyValue = object[property];
                    // console.log(propertyValue);
                    valueArray.push(propertyValue);
                    palindromeChecker(valueArray);
                }
            }
        } else {
            if (typeof item === 'number') {
                let number = item;
                let reversedNumber = reverseNumber(number);
                if (reversedNumber === number)
                    console.log(`Number '${item}' is palindrome.`);
                else
                    console.log(`Number '${item}' is not palindrome.`);
            }
            if (typeof item === 'string') {
                let str = item;
                let reversedString = reverseString(str);
                if (reversedString === str)
                    console.log(`String '${item}' is palindrome.`);
                else
                    console.log(`String '${item}' is not palindrome.`);
            }
            if (typeof item === 'boolean')
                console.log(`Boolean ${item} is not palindrome.`);
        }
    }
}

function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}

function reverseString(str) {
    let length = str.length;
    let reversedString = '';
    for (let i = length - 1; i >= 0; i--)
        reversedString += str[i];
    return reversedString;
}

function datePalindromeChecker(dateObject) {
    let day = dateObject.getDate();
    let month = dateObject.getMonth();
    let year = dateObject.getFullYear().toString().substring(2, 5);
    let date = `${day}-${month}-${year}`;
    let reversedDate = `${year}-${month}-${day}`;
    if (date === reversedDate)
        return true;
    else
        return false;
}

palindromeChecker(mockValues);