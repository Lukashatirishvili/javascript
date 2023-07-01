'use strict';

// Task 1 - Uppercase the first character

const ucFirst = function(name) {
    return name[0].toUpperCase() + name.slice(1);
    /* We can't replace first character because string 
       in javascript are immutable
    */    
}

console.log(ucFirst('jason'));

// Task 2 - Check for spam
const checkSpam = function(str) {
    let lowc = str.toLowerCase();
    if (lowc.includes('back') || lowc.includes('xxx')) {
        return true;
    }
    return false;
}

console.log(checkSpam('give it BAcK'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));

// Task 3 - Truncate the text
const truncate = function(str, max) {
    if (str.length > max) {
        return str.substr(0, (max - 1)  ) + '...'
    }
    return str; 
}

console.log(truncate("What I'd like to tell on this topic is:", 20))

// Task 4 - Extract the money
const extractCurrencyValue = function(str) {
    return +str.slice(1);
}

console.log(extractCurrencyValue('$120'))