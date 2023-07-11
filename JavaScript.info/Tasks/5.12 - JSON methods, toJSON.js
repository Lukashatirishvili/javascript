'use strict';

// Task 1 - Create a date
let date = new Date(2012, 1, 20, 3, 12);
console.log(date);

// Task 2 - Show a weekday
let getWeekDay = function(date) {
    let days = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SUN'];

    return days[date.getDay()];
};

console.log(getWeekDay(date));

// Task 3 - European weekday
let getLocalDay = function(date) {
    let days = [1, 2, 3, 4, 5, 6, 7];

    return days[date.getDay()] - 1;
}

let date1 = new Date(2012, 0, 3);

console.log(getLocalDay(date1));

// Task 4 - Which day of month was many days ago?
let date2 = new Date(2015, 0, 2);

let getDateAgo = function (date, day) {
    let newdate = new Date(date);

    newdate.setDate(newdate.getDay() - day);
    return newdate;
}

console.log(getDateAgo(date2, 1));
console.log(date2);