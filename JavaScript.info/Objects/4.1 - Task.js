"use strict";

// Task 1
let user = {};

user.name = 'Jonh';
user.surname = 'Smith';
user.name = 'Pete';

delete user.name;

// Task 2
const isEmpty = function(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

alert(isEmpty(user));

// Task 3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;

const sum_objvalue = function(obj) {
    for (let key in obj) {
        sum += obj[key];
    }
}

sum_objvalue(salaries); 
console.log(sum);

// Task 4
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

const multiplynumeric = function(obj) {
    for (let key in obj) {
        obj[key] = obj[key] * 2;
    }
}

multiplynumeric(menu)
console.log(menu.width);

