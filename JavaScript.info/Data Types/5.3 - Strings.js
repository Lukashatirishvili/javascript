'use strict';

// Special characters
console.log('New\nline'); // New line character written as '\n'

console.log(`Hello
Mr`); // or we can use 'backticks' instead of '\n'

// String length
let str = 'Impossible is nothing';
console.log(str.length); 

// Strings are immutable
let str1 = "Peter";
// str1[0] = 'e'; // String can't be changed in javascript

// Changing the case
console.log(str.toLowerCase()); 
console.log(str.toUpperCase());

// Searching for a substring
let str2 = 'How are you ?';

console.log(str2.indexOf('are')); // 4, because first letter is index of 4
console.log(str2.indexOf('how')); // -1, not found, the search is case-sensitive

console.log(str2.indexOf('o', 2)); // start search from index 2

if (str2.indexOf('r') != -1) {
    console.log("Found it");
};

// includes, startsWith, endsWith
let str3 = 'There is no more time';

console.log(str3.includes('is', 7)) // False, because start position is index 7
console.log(str3.startsWith('there')) // False, because it's case sensitive
console.log(str3.endsWith('time')); // True

// Getting a substring
let str4 = 'Fortunately';

console.log(str4.slice(0, 4)); // return string from index 0 to index 4 (not include 4)
console.log(str4.slice(-5, -1)); /* negative values also possible, they mean 
the position counted from the string end */

console.log(str4.substring(0, 4)); // return string between 0 and 4 index

/* codePointAt(pos) - returns a decimal number representing the code
   for the character at position pos:
*/
console.log('E'.codePointAt(0)); // 69
console.log('G'.codePointAt(0)); // 71

console.log('E' > 'G'); // False, because 69 less than 71

// String.fromCodePoint() - returns character by its numberic code
console.log(String.fromCodePoint(69)); // 'E'
console.log(String.fromCodePoint(0x5a)); // 'Z' -we also can use hex value

// Characters from 65 to 80
let str5 = '';
for (let i = 65; i <= 80; i++) {
    str5 += String.fromCodePoint(i);
}

console.log(str5);

// Correct comparisons
console.log('ABC'.localeCompare('ABD')); // returns -1, if first string is less than second
