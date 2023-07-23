"use strict"

// Transparent caching
function slow(x) {
    return x;
};

/* If the function is called often, we may want to cache (remember) the result
   to avoid spending extra-time on recalculations
*/

function cachingDecorator(func) {
    let cache = new Map();

    return function(x) {
        if (cache.has(x)) {
            return cache.get(x);
        }

        let result = func(x);

        cache.set(x, result);
        return cache;
    };
}

slow = cachingDecorator(slow);

console.log(slow(5));

// Using “func.call” for the context
/* The caching decorator mentioned above is not suited to work with object methods.
   We'll get error because 'this' will be undefined.
*/
function sayHi () {
    console.log(this.name);
};

let user1 = {name: 'Will'};
let user2 = {name: 'Jonh'};

sayHi.call(user1); // "this" = user1
sayHi.call(user2); // "this" = user2

// use 'call' for caching decorator
let mannager = {
    firstName: "Jack",
    lastName: "White",
    job: "Designer",
    
    bonus() {
        return 700;
    },

    salary(wage) {
        return wage + this.bonus();
    }
};

function cacheDecorator2 (func) {
    let cache = new Map();

    return function(x) {
         if (cache.has(x)) {
            return cache.get(x);
         }

         let result = func.call(this, x);
         cache.set(x, result);

         return result;
    };
};

mannager.salary = cacheDecorator2(mannager.salary);

console.log(mannager.salary(4000));

// Going multi-argument
let sumSalaries = {
    sum (wage1, wage2, wage3) {
        return wage1 + wage2 + wage3;
    },
};


function cachingDecorator3 (func, hash) {
    let cache = new Map();
    return function() {
        let key = hash(arguments);

        if (cache.has(key)) {
            return cache.get(key);
        }

        let result = func.call(this, ...arguments);

        cache.set(key, result);
        return key;
    };
};

function hash (args) {
   let str = '';
   for (let x of args) {
    str += x + ',';
   }
   return str;
};

sumSalaries.sum = cachingDecorator3(sumSalaries.sum, hash);

console.log(sumSalaries.sum(200, 300, 400, 600));

