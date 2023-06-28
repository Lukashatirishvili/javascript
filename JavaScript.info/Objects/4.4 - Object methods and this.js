'use strict';

// Method examples  

let user = {
    name: 'Jason',
    age: 22,

};

user.sayHi = function() {
    console.log('Hello');
};

user.sayHi();

// also we can declare and then add as a method
let sayBye = function() {
    console.log('Goobye');
};

user.sayBye = sayBye; // now add as a method

user.sayBye();

// method shorthand

let car = {
    mark: 'Mercedes',
    model: 'W211',

    calcPrice() {
        console.log('21k');
    }   
};

car.calcPrice();

// "this" in method

let user1 = {
    name: "Ross",
    age: 24,

    sayHi() {
        console.log('Hello  ' + this.name); // "this" is the current object - user1
    }
    /* We can use "user1" instead of "this" keyword but such code
       is unreliable, if we decide to create another variable e.g -
       'admin = user1' and overwrite user with something else, then
       it will access the wrong object
    */   
};

user1.sayHi();

// Arrow functions have no "this"

let mannager = {
    firsName: 'Lee',
    lastName: 'White',

    sayHi() {
        let arrow = () => console.log(this.firsName + ' ' + this.lastName);
        arrow();
        /* Arrow function are special: they don't have their "this",
           if we reference "this" from such a function, it's take
           from the outer 'normal' function
        */
    }
}

mannager.sayHi();   