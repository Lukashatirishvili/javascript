'use strict';

// Symbol can be created using Symbol()
let id = Symbol('G');

// Symbols are unique
let id1 = Symbol('black');
let id2 = Symbol('black');

console.log(id1 == id2); // False

// Symbol don't auto-convert to a string
// If we want to show symbol 
alert(id2.toString());

// or get symbol description
alert(id2.description);

// Symbols in object literal
let user = {
    name: "Peter",
    age: 22,
    [id]: 'PP'  
};

// Symbols are skipped by for in loop
for (let key in user) {
    console.log(key); // name, age - (No symbols)
}

