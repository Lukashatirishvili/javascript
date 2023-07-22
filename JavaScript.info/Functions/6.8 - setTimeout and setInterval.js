"use strict"

// setTimeout
const greet = function (firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName}`);
};

setTimeout(greet, 1000, "Walter", "White");

// We can also use arrow function
setTimeout((firstName, lastName) => {
    console.log(`Hello ${firstName} ${lastName}`)    
}, 1000, "John", "Emet");

/* 'setTimeout' function returns a timer identifier, which is unique numeric
    value, that can be use to manipulate timer later, e.x - to cancel it 
    using the 'clearTimeout' function
*/

let timerId = setTimeout(() => {
   console.log("Impossible is nothing"); 
}, 1000);

// We can use 'clearTimeout' to cancel it
clearTimeout(timerId);

// setInterval
let timerid2 = setInterval(() => {
   console.log("Attention!!!"); 
}, 2000);

// stop after 5 seconds
setTimeout(() => {
   clearInterval(timerid2); 
   console.log("Stopped");  
}, 5000);
