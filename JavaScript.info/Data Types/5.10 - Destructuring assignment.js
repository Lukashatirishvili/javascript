'use strict';

// Array destructuring
let arr = ['John', 'Peter', 'Ann'];

let [user1, user2] = arr; // Array itself is not modified

console.log(user1); // John
console.log(user2); // Peter

// We can skip elements by ','
let [, , user3] = arr;
console.log(user3); // Ann

// Looping with .entries()
let user = {
    name: "John",
    age: 30
  };

for (let [key, value] of Object.entries(user)) {
    console.log(`${key}: ${value}`);        
}

// Swapping values
let guest = "Jane";
let admin = "Pete";

[guest, admin] = [admin, guest];

console.log(guest); // Pete
console.log(admin); // Jane

// The rest ‘…’
let cities = ['London', 'NY', 'Berlin', 'Liverpool', 'Paris'];

let [city1, city2, ...rest] = cities;

console.log(rest); // 'rest' in array

// Object destructuring
let car = {
    brand: 'Lexus',
    model: 'CT200',
    year: 2014
}

// Variable name should be the same what we have in object
let {brand, model, year} = car; // When we destructuting object we use '{}'
console.log(model); // 2014

// If we want to change variable name 
let {brand: mark, model: md, year: release} = car;
console.log(brand);

// The rest pattern "..."
let options = {
    title: "Menu",
    height: 200,
    width: 100
};

let {width, ...r} = options;
console.log(r);

// Nested destructuring
let mannager = {
    firstName: 'Josh',
    lastName: 'Emet',
    age: 23, 

    job: {
        company: 'SpaceX',
        experience: 4
    },

    car: ['BMW', 'Porsche'],
}

let {
    firstName,
    lastName,
    age,

    job: {
        company,
        experience
    },

    car: [car1, car2]
} = mannager;

console.log(car1);
console.log(company);