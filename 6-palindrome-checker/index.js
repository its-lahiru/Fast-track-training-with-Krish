const { palindromeChecker } = require('./palindrome-checker');

const mockValues = [
    'mom',
    'civiC',
    new Date('11-11-11'),
    67,
    909,
    'Poopy',
    'youi',
    'qqq',
    { id: 101, name: 'anna', job: 'baker' },
    new Date('09-11-11'),
    true,
];


palindromeChecker(mockValues);