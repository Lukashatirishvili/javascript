'use strict';

// Getter and Setter
const user = {
    firstName: "Walter",
    lastName: "White",
    age: 46,
    driveLicense: true,
    visa: "",

    get licence () {
        return this.driveLicense;
    },

    set setVisa (setVisa) {
        this.visa = setVisa;
    }
}

// accesses license with The get keyword
console.log(user.licence); 

// Set an object property using a setter
user.setVisa = false; 
console.log(user.visa);

// ----------------------------------------------------

// Object.defineProperty() - We can use it to Add Getters and Setters 
const obj = {
    counter: 0,
};


Object.defineProperty(obj, "reset", {
    get : function () {this.counter = 0;}
});

Object.defineProperty(obj, "increament", {
    get : function () {this.counter++;}
});

Object.defineProperty(obj, "deacrement", {
    get : function () {this.counter--;}
});

Object.defineProperty(obj, "add", {
    set : function (value) {this.counter += value;}
});

obj.increament; // counter = 1
obj.add = 3; // counter = 4
obj.reset; // counter = 0

console.log(obj.counter);

console.log(obj);

