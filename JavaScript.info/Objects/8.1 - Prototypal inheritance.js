"use strict"

//Prototypal inheritance

/* In js object have a special hidden property "[[Prototype]]" that can be 
   either null or references another object */ 
let drinks = {
    cola: 4,
    juice: 5,
    redbull: 3,
};

let alcoholDrinks = {
    vodka: 11,
    whisky: 23,
};

// there are many ways to set prototype, one of them is to use "__proto__"
alcoholDrinks.__proto__ = drinks;
/* now when we read a property from "alcoholDrinks" and its missing js automaticcly
   takes it from the prototype and in this example "alcoholDrinks" prototype is "Drinks"
*/
console.log(alcoholDrinks.juice); /* If "drinks" has any properties or methods they 
become automatically available in "alcoholDrinks. Such property are called "inherited"
*/

// --------------------------------------------------------------------------------------

// Writing doesn’t use prototype - it only used to reading properties
let animal = {
    eats: true,
    walk() {

    },
};

let rabbit = {
    __proto__: animal,
};

rabbit.walk = function() {
    return "I am rabbit";
};

console.log(rabbit.walk()); /* "rabbit.walk()" call finds the methods in the object and
execute it, without using prototype */

// ----------------------------------------------------------------------------------------
let user = {
    name: "Peter",
    surname: "Henderson",

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },

    get fullName() {
        return `${this.name} ${this.surname}`;
    },
};

let admin = {
    __proto__: user,
    isAdmin: true,
};

console.log(admin.fullName); // assing from "user" object because of prototype inheritance

admin.fullName = "John Wick";
console.log(admin.fullName); // now "admin" object gets its own property
console.log(user.fullName); // This will be same as before
