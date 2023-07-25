"use strict"

// getters and setters
let user = {
    name: 'Peter',
    surname: 'Willson',

    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },
};

console.log(user.fullName); /* We don't call user.fullName as a function we read it
normally (the getter runs behind the scenes) */

user.fullName = "Jack Nikolson";

console.log(user);  

// We can use getter and setter to gain more control over operations with them
let user2 = {
    get username() {
        return this._username;
    },

    set username(value) {
        if (value.length < 4) {
            console.log("Need at least 4");
            return;
        }
        this._username = value;
    }
};

user2.username = "Jordan";
console.log(user2);

// Using for compatibility
function User(name, birthday) {
    this.name = name;
    this.birthday = birthday; 

    Object.defineProperty(this, "age", {
        get() {
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
        }
    })
};


let john = new User("John", new Date(1991, 4, 2));
console.log(john.age);



