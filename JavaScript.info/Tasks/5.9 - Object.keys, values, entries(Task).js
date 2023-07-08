'use strict';

// Task 1 - Sum the properties
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

let sumSalaries = function (obj) {
  let sum = 0;
  for (let x of Object.values(obj)) {
    sum += x;
  }
  return sum;
}

console.log(sumSalaries(salaries));

// Task 2 - Count properties
let user = {
  name: 'John',
  age: 30
};

let count = function (obj) {
  let c = 0;
  for (let x of Object.keys(obj)) {
    c++;
  }
  return c;
}

console.log(count(user));
