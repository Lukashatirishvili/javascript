"use strict"

// Task 1 - Filter through function
let arr = [1, 2, 3, 4, 5, 6, 7];

const inBetween = function (a, b) {
    return x => x >= a && x <= b;
}

const inArray = function (arr) {
    return x => arr.includes(x);
}

console.log(arr.filter(inBetween(2, 5)));
console.log(arr.filter(inArray([2, 3, 8])));

// Task 2 - Sort by field
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

const byField = function (property) {
    return (a, b) => a[property] > b[property] ? 1 : -1;
};

users.sort(byField("name"));
users.sort(byField("age"));

console.log(users);
