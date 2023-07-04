'use strict';

// splice method
let arr = ['John', 'Peter', 'Ann', 'Bella'];

arr.splice(2, 1) // from index 2 remove 1 element
console.log(arr); // 'John', 'Peter', 'Bella'

arr.splice(0, 3, 'Jack', 'Nina'); // Remove fist 3 elements and replace first 2 
console.log(arr);

let removed = arr.splice(0, 1); // slice return removed elements
console.log(removed);

// We can also insert element without any removals 
arr.splice(0, 0, 'Ramsey', 'Jamie');
console.log(arr);

// Slice method
console.log(arr.slice(0, 2)); // from 0 index to 2 index (not include 2)

// concat method
let arr1 = [2, 3];
console.log(arr1.concat([4, 5])); // 2, 3, 4, 5 - Concat method creates new array
     
// indexOf - lastIndexOf - includes
let cities = ['London', 'NY', 'Berlin', 'Washington', 'Dortmund', 'London'];
 
console.log(cities.indexOf('Berlin')); // 2
console.log(cities.includes('London')); // true 
console.log(cities.lastIndexOf('London')); // 5 - rigth to left

// map method 
let arr3 = ['Audi', 'Ferrari', 'Porsche', 'BMW', 'Mercedes'];

let lengths = arr3.map(item => item.length);

console.log(lengths); // We transform each element into its length

// sort method
let arr4 = [4, 1, 2, 7, 8];

console.log(arr4.sort()); // it returns sorted array

// reverse method
console.log(arr4.reverse()); // it returns reverses the order of elements in array

// split and join method 
let names = 'Peter, John, Ann, Bella';
let arr5 = names.split(', '); // split string into the array    
console.log(arr5);

let str = arr5.join(' '); // create string of array
console.log(str);

// reduce method
let sumArr = arr4.reduce((sum, item) => sum + item, 0);
console.log(sumArr);