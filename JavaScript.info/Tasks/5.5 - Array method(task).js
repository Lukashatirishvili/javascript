'use strict';

'use strict';

// Task 1 - Translate border-left-width to borderLeftWidth   
let camelize = function(str) {
    return str.split('-').map((word, index) => index == 0 ?
    word : word[0].toUpperCase() + word.slice(1)).join('');
}

console.log(camelize("background-color"));

// Task 2 - Filter range
let arr = [5, 3, 8, 1];

let filterRange = function(arr, a, b) {
    return arr.filter(item => (item >= a && item <= b));
} 
let filtered = filterRange(arr, 1, 4);

console.log(filtered);
console.log(arr);   

// Task 3 - Filter range "in place"
let arr1 = [5, 3, 8, 1];

let filterRangeInPlace = function(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
        }
    }
}

filterRangeInPlace(arr1, 4, 1);
console.log(arr1)

// Task 4 - Sort in decreasing order
let arr2 = [5, 2, 1, -10, 8];

arr2.sort().reverse();
console.log(arr2);

// Task 5 - Copy and sort array
let arr3 = ["HTML", "JavaScript", "CSS"];

let copySorted = function(arr) {
    let copy = arr.sort();

    return copy;
}

let sorted = copySorted(arr3);  
console.log(sorted);

// Task 6 - Map to names
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

console.log(names);

// Task 7 - Map to object
let john1 = { name: "John", surname: "Smith", id: 1 };
let pete1 = { name: "Pete", surname: "Hunt", id: 2 };
let mary1 = { name: "Mary", surname: "Key", id: 3 };

let users1 = [ john1, pete1, mary1 ];

let usersMapped = users1.map(item => ({fullName: `${item.name} ${item.surname}`, id:`${item.id}`}));

console.log(usersMapped);

// Task 8 - sort users by age
let john2 = { name: "John", age: 25 };
let pete2 = { name: "Pete", age: 30 };
let mary2 = { name: "Mary", age: 28 };

let arr4 = [ pete, john, mary ];

arr4.sort((a, b) => a.age - b.age);

console.log(arr4);

// Task 9 - Get average age
let getAvarageAge = function(arr) {
    let sum = 0;
    let count = 0;
    arr.map(item => sum += item.age);

    return sum / arr.length;
}

console.log(getAvarageAge(arr4));

// Task 10 - Filter unique array members
function unique(arr) {
    let mainArr = []
    for (let str of arr) {
        if (!mainArr.includes(str)) {
            mainArr.push(str);
        }
    }
    return mainArr;    
}
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  console.log(unique(strings));
