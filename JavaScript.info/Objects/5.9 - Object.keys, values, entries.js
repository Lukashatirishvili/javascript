'use strict';

'use strict';

// Object.keys, values, entries
let user = {
  name: 'John',
  surname: 'Peterson',
  age: 44,
  profesion: 'acc'
}

console.log(Object.keys(user)); // return an array of keys
console.log(Object.values(user)); // return an array of values
console.log(Object.entries(user)); // return an array of keys and values both

// Transforming objects 
let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

// We get an array from object and use map method to change its these key/value
let arr = Object.entries(prices).map(entry => ([entry[0], entry[1] * 2]));

// here, we get an object from array 
let obj = Object.fromEntries(arr);

console.log(obj);
