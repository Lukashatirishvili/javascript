'use strict';

// Task 1 - Sum numbers from the visitor
let num1 = +prompt('The first number?', '');
let num2 = +prompt('The second number?', '');

alert(num1 + num2);

// Task 2 - Why 6.35.toFixed(1) == 6.3?
console.log(Math.round(6.35 * 10) / 10);

// Task 3 - Repeat until the input is a number
const readNumber = function() {
    let x;

    do {
        x = prompt('Enter a number please?', '');
    } while (isNaN(x));
    
    if (x == null || x == '') {
        return null;
    }

    return x;
}

alert(`Read: ${readNumber()}`)

// Task 4 - A random number from min to max
const random = function(min, max) {
    return min + Math.random() * (max - min);
}

console.log(random(1, 5));

// Task 5 - A random integer from min to max
const randomInteger = function(min, max) {
    return Math.trunc(min + Math.random() * (max - min));
}

console.log(randomInteger(1, 5));
