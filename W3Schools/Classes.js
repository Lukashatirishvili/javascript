'use strict';

// Using class - We can use "class" to create object
class User {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

let employee1 = new User("John", "Wick", 1400);
let employee2 = new User("Jordan", "Peterson", 2100);

console.log(employee1);
console.log(employee2);
// -------------------------------------------------------------------------

// Class Methods
class Country {
    constructor (country, capitalCity) {
        this.country = country;
        this.capitalCity =capitalCity;
    }

    time() {
        let date = new Date();
        return date;
    }
}

let c1 = new Country("France", "Paris");

console.log(c1.time()); // call method in object    

