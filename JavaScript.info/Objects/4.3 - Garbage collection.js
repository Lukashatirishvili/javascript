'use strict';

let user = {
    name: 'Peter'
};

// If the value of user is overwritten, The reference is lost
user = null;

console.log(user); // 'name' become unreachable, We can't access it

// Two references 
let car = {
    mark: 'BMW'
};

let temp = car;

car = null // If we do the same, then object is still reachable via 'temp' global variable

