function isLeap(year) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

const year = parseInt(prompt("Enter the year:"));
let message;

if (isNaN(year)) {
    message = 'Please, enter a year...'
} else {
    if (year > 1582) {
        message = 'The year is ' + (isLeap(year) ? 'leap' : 'not a leap');
    }
    else message = 'Year must be greater than 1582 - the first year of Gregorian calendar.'
}

alert(message);


