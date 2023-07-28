"use strict"

// Using class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    age() {
        const date = new Date();
        return date.getFullYear() - this.year;
    }
};

const myCar = new Car("BMW", "M8", "2022");

console.log(myCar.age());

// Class inheritance
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHi() {
        return `Hello ${this.firstName} ${this.lastName}`;
    }
};

class Country extends User {
    constructor(firstName, lastName, country) {
        super(firstName, lastName); // The super() method refers to the parent class.
        this.country = country;
    } 
};
/* By calling the super() method in the constructor method, we call the parent's 
constructor method and gets access to the parent's properties and methods. */

const user = new Country("Jack", "White", "Poland");

console.log(user.sayHi());  

// Getters and Setters
class TechBag {
    constructor(item1, item2, item3) {
        this.item1 = item1;
        this.item2 = item2;
        this.item3 = item3;
    }
    get items() {
        return `${this.item1}, ${this.item2} and ${this.item3}`;
    }

    set items(value) {
        this.item1 = value;
    }
}

let person1 = new TechBag('Iphone 14 Pro', "Lenovo X1 carbon", "Airpods");
person1.items = 'Pixel 6 Pro';

console.log(person1.items)