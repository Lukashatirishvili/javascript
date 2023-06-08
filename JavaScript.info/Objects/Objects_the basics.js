"use strict";

// An empty object can be created using one of two syntaxes
let user = new Object();
let user1 = {};

user.name = 'Peter';
user.age = 27;

// Get property values of the object
console.log( user.age ); // 27
console.log( user.name); // Peter

// To remove a property we can use delete operator
delete user.age;

// Computed properties
let fruit = prompt('Which fruit to buy?', 'Orange');

let bag = {};

bag[fruit] = 5; // Take property name from the fruit variable

// Check if property exist
let mannager = {
    name: 'John',
    age: 22,
    experience: 7,
    licence: true
}

console.log("age" in mannager); // true, mannager.age exists

// For in loop
for (let key in mannager) {
    console.log(key); // properties - name, age, ....
    console.log(mannager[key]) // values - 'john', 22, ...
}