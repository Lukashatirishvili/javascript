'use strict';

// Creation
let now  = new Date();
console.log(now); // Show current date/time

let createBirthDate = new Date(2002, 8, 8);
console.log(createBirthDate);

// 0 means 01.01.1970
let jan1970 = new Date(1);
console.log(jan1970);

// add 24 hours
jan1970 = new Date(24 * 3600 * 1000);
console.log(jan1970);

// new Date(datestring)
let date = new Date('2013-12-24');
console.log(date);

// new Date(year, month, date, hours, minutes, seconds, ms)
date = new Date(2014, 11, 26);
console.log(date);

// Access date components
let currentTime = new Date();
console.log(currentTime.getHours());

console.log(currentTime.getTime()); // returns timestaps


// Setting date components
date.setHours(21, 45);  
console.log(date);

// If we want to increase days 
date.setDate(date.getDate() + 2);
console.log(date);

// Measure time - e.g how many ms need to sort numbers
let unsorted = [5, 3, 7, 1, 2, 33, 8, 21];

let start = Date.now();
for (let i = 0; i < 1000000; i++) {
    let doSomething = i * i * i;
  }
let end = Date.now();

console.log(`${end - start} ms`);