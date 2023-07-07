'use strict';

// Task 1 - Filter unique array members
function unique(arr) {
  return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values));

// Task 2 - Filter anagrams 
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

let aclean = function(arr) {
  let map = new Map();
  
  for (let word of arr) {
    let temp = word.toLowerCase().split('').sort().join('');
    map.set(temp, word);
  }

  return map.values();
}

console.log(aclean(arr));

// Task 3 - Iterable keys
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

console.log(keys);  
console.log(map);