'use strict'

// Rest parameters ...
const sum = function (...numbers) {
    let sum = 0;
    for (let n of numbers) {
        sum += n;
    }
    return sum;
}

console.log(sum(3, 4, 5)); // 7 

// The "arguments" variable
const sum1 = function () {
    let sum = 0;
    for (let x of arguments) {
        sum += x
    }
    return sum;
}

console.log(sum1(sum1(4, 6, 3, 1)));

// Spread syntax
const maxValue = function (arr1, arr2) {
    let max;
    max = Math.max(...arr1, ...arr2);
    return max;
}

console.log(maxValue([3, 5, 8], [1, 4, 9]));

// Copy an array/object
let arr1 = [3, 5, 1];

let arrCopy = arr1; 
/* If we copy array like this they would have same referene, when we modify 
   our main arr it automaticlly changes "arrCopy"
*/
arr1[0] = 4;
console.log(arr1 === arrCopy); // same referece

// If we want to copy array or object with not same reference we can use spread syntax
arrCopy = [...arr1];
console.log(arr1 === arrCopy); // not same reference 

// We can do the same to copy object
let obj = {
    name: 'Josh',
    age: 22,
};

let objCopy = {...obj};

console.log(obj === objCopy); // false