"use strict";

'use strict';

// Two object are equal only if they are same object
let a = {};
let b = a;

console.log(a == b); // true
console.log(a === b); // true

// two independent object are not equal
let c = {};
let d = {};

console.log(c == d); // false

// const object can be modified
const user = {
    name: 'John'
}

user.name = 'Lax';
console.log(user.name) // 'Lax'

// Duplicate (clone) object 
let england = {
    capitalcity: 'London',
    population: 140
}

let clone = {};

for (let key in england) {
    clone[key] = england[key];
}

clone.population = 110;
console.log(england.population) // new object is fully independent

// We can also use method Object.assing to create duplicate object
let duplicate2 = {};

Object.assign(duplicate2, clone); // Copies all properties from 'clone' object

console.log(duplicate2);