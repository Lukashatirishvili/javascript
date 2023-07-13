'use strict';

// JSON.stringify
let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
};

let json = JSON.stringify(student);

console.log(json);

let user = {
    sayHi() { // ignored
      alert("Hello");
    },
    [Symbol("id")]: 123, // ignored
    something: undefined // ignored
};

console.log(JSON.stringify(user)); /* '{}' - empty because JSON skip function, 
symbol and properties which is undifined */

// but nested object are supported and converted automaticlly
let user1 = {
    name: 'john',

    proffesion : {
        job: 'ACC'
    }
};

console.log(JSON.stringify(user1));

// Excluding and transforming: replacer

let license = {
    driveLicence: true
};

let mannager = {
    firstName: 'Alexander',
    lastName: 'White',
    age: 32,
    licens: license
}

license.person = mannager;

/* if we pass only 'mannager' what would cause error because circular reference,
so we choose which element we need bellow
*/
console.log(JSON.stringify(mannager, ['firstName', 'lastName', 'age', 'licens']));

// but we can use function instead
let room = {
    number: 23
};
  
let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room // meetup references room
};
  
room.occupiedBy = meetup; // room references meetup

let str = (JSON.stringify(meetup, function replacer(key, value) {
    console.log(`${key} : ${value}`)
    return (key == 'occupiedBy') ? undefined : value;
}));

// JSON.parse
let numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);
console.log(numbers[0])

let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
let user2 = JSON.parse(userData);
console.log(user2);
