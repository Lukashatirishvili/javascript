'use strict';

// Task 1 - Destructuring assignment
let user = {
    name: "John",
    years: 30
};

let {
    name: name,
    years: age,
    isAdmin = false    
} = user;

console.log(name);
console.log(age);
console.log(isAdmin);

// Task 2 - The maximal salary
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

let topSalary = function (salaries) {
    let name;
    let max = 0;

    for (let [key, value] of Object.entries(salaries)) {
        if (max < value) {
            max = value;
            name = key;
        }
    };

    if (Object.keys(salaries).length === 0) {
        return null
    }

    return name;
}

console.log(topSalary(salaries));
