"use strict";

// OR operator - ||

let hour = 9;
let isWeekend = true;

// Start left to right and if the result is true stops and return value
//
if (hour < 11 || hour > 7 || isWeekend) {
  console.log("Office is closed");
}

// And operator - &&

let age = 18;

if (age >= 18 && age < 30) {
  console.log("You passed control");
}

// Not operator - !

let x = true;

console.log(!x); // It returs inverse value
