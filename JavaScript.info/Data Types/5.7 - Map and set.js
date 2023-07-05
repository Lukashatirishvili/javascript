'use strict';

// Map
let map = new Map();

map.set(1, 'London'); // Stores the value by the key
console.log(map.get(1)); // any type of key is possible

// We can use object as a key
let john = {name: 'John'};
let visitsCountMap = new Map();

visitsCountMap.set(john, 22);  // Same we can't do with obejct 
console.log(visitsCountMap.get(john));

// Iteration over Map
let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);

// keys
for (let vegetable of recipeMap.keys()) {
    console.log(vegetable);
}

// Values
for (let price of recipeMap.values()) {
  console.log(price);
}

// Entries
for (let entries of recipeMap.entries()) {
  console.log(entries);
}

// Map and foreach loop
recipeMap.forEach((value, key, map) => {
  console.log(`${key} : ${value}`);
})

// If we have object and we want to create map from it
let obj = {
  name: "John",
  age: 30
};

let map1 = new Map(Object.entries(obj));
console.log(map1.get('age'));

// and If we want to get object from map
let price = Object.fromEntries(map1);
console.log(price.name);

// Set
// The main feature of set is that we can't repeat value in set
let set = new Set();

let pete = { name: "Pete" };
let mary = { name: "Mary" };

set.add(pete);
set.add(pete);
set.add(pete);

console.log(set.size); // 1, keep only unique value


// Iterate over set
let set2 = new Set(["oranges", "apples", "bananas"]);

for (let value of set2) {
  console.log(value);
}