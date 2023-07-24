"use strict"

let user = {
    firstName: 'John',
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'firstName');
/* the returned value is so called 'property descriptor' object: it contains
   the value and the flags
*/

console.log(JSON.stringify(descriptor, null, 2))

// To change the flags, we can use Object.defineProperty

// If property exist defineProperty updates its flags
Object.defineProperty(user, "firstName", {
    writable: false,
});

console.log(Object.getOwnPropertyDescriptor(user, 'firstName'));

// if not exist it creates property with given value and flags
let mannager = {};

Object.defineProperty(mannager, "age", {
    value: 23,
    // if flags is not supplied it is assumed false
});

console.log(Object.getOwnPropertyDescriptor(mannager, 'age'));

// Non-writable
let user1 = {
    firstName: 'Peter',
};

Object.defineProperty(user1, "firstName", {
    writable: false,
});

// user1.firstName = "Ann"; // error (because user.name is non-writable)

// another example
Object.defineProperty(user1, "lastName", {
    value: "Smith",
    configurable: true,
    enumarable: true,
});

// user1.lastName = 'Wick'; // error (same as above)

// Non-enumerable
let car = {
    brand: "BMW",
    model: "M6",
    year: 2017,

    age() {
        return 2023 - this.year;
    },
}

for (let key in car) {
    console.log(key); // by defaul all our properties are listed
}

// if we want to not appear any property we can set enumerable: false
Object.defineProperty(car, "age", {
    enumerable: false,
});

for (let key in car) {
    console.log(key); // now all properties appear except "age"
}

// Non-configurable
let user2 = {
    name: 'jack'
};

Object.defineProperty(user2, "name", {
    configurable: false
});

user2.name = 'Will' // it works 
// delete user2.name; // but we can not delete it because 'configurable: false'

Object.defineProperty(user2, 'name', {
    writable: false
});

// and also we can make user2.name forever sealed
/*
Object.defineProperty(user2, 'name', {
    writable: true,
    configurable: true,
});
*/

console.log(Object.getOwnPropertyDescriptor(user2, 'name'));

// Object.defineProperties - that allows to define many properties at once
let house = {
    city: 'Miami',
    address: '2b 13th'
};

Object.defineProperties(house, {
    city: {writable: false},
    address: {value: '3b 16th'}
});
