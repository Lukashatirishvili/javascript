'use strict';

 // An array can store any type of elements
let arr = ['London', {name: 'Ann'}, true, function() {console.log('function in array')}];

// Get the function and run it 
arr[3]();

// Methods pop/push, shift/unshift
let arr1 = ['London', 'Arsenal', 'Madrid', 'Berlin', 'Liverpool'];

arr1.pop(); // Remove last elemnt 
arr1.push('Kutaisi'); // Add elements to the end of the array

arr1.shift() // Remove first elemnt
arr1.unshift('Paris'); // Add elements to the beginning of the array    

console.log(arr1); // Pop and push method are much faster than shift and unshift
