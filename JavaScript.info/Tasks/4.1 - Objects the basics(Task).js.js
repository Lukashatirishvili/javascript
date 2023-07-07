'use strict';

// Task 1 - Hello, object

let user = {
  name: 'John',
  surname: 'Smith',
}

user.name = 'Pete';

delete user.name;
console.log(user);

// Task 2 - check for emptiness
let schedule = {};

let isEmpty = function(obj) {
  for (let prop in obj) {
    return false;
  }

  return true;
}

console.log(isEmpty(schedule)); // True - there is no property in 'schedule' object

schedule['3b'] = 'compare';

console.log(isEmpty(schedule));

// Task 3 - Sum object properties
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;

for (let prop in salaries) {
  sum += salaries[prop];
}

console.log(sum);

// Task 4 - Multiply numeric property values by 2
let multiplyNumeric = function(obj) {
  for (let prop in obj) {
    if (typeof(obj[prop]) === 'number') {
      obj[prop] *= 2;
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

console.log(menu);