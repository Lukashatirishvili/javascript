'use strict';

let billion = 1000000000;

// We can use underscore to write number, js engine ignores it
billion = 1_000_000_000;

// Also we can shorten number by appending the letter "e"
let num = 1e6;

console.log(num);

num = 4.3e9; // 4.3 billion

// If we want zeroes from left we can user 'e-'
let msc = 1e-3; // 3 zeros from left

console.log(msc); // 0.001  

// toString(base) method

let num1 = 255;

console.log(num1.toString(16)); // base16 used for hex colors
console.log(num1.toString(2)); // base2 used for debugging bitwise operators
console.log(num1.toString(36)); // base36 used for 

// Rounding
let num2 = 4.7;

console.log(Math.floor(num2)); // Rounds down - 4.7 becomes 4
console.log(Math.ceil(num2)); // Rounds up - 4 becomes 5
console.log(Math.round(num2)); // Rounds to the nearest integer - 4 becomes 5
console.log(Math.trunc(num2)); // Removes everything after the decimal point without rounding

// If we want to round number after the decimal

let num3 = 3.6437;

console.log(Math.round(num3 * 100) / 100); // 3.6437 -> 364.37 -> 364 -> 3.64

// another way
console.log(num3.toFixed(2)); // 3.64 as string   

// Imprecise calculations
console.log(0.1 + 0.2); // 0.30000000000000004

// we can fix it with method 
let sum = 0.1 + 0.2;
console.log(sum.toFixed(2)); // 0.3 as string

// parseInt and parseFloat
/* Numeric convertion using '+' or 'Number()' doesn't work if
   value is not exactly a number
*/
console.log(+'100px'); // Nan (because value not contain only numbers)

// To fix this problem we can use parseInt and parseFloat
console.log(parseInt('150px')); // 150 (parseInt returns integer)
console.log(parseFloat('13.2em')) // 13.2 (parseFloat returns floating-point number)

// We also can use parseInt and parseFloat to hex numbers, binary and so on
console.log(parseInt('0xff', 16)); // 255

// Other math functions
console.log(Math.random()); // returns random number from 0 to 1 (not include 1)
console.log(Math.max(1, 3, 5, -2)); // returns max numbers
console.log(Math.min(1, 3, 5, -2)); // returns min numbers
console.log(Math.pow(3, 2)); // 3 in power 2 = 9