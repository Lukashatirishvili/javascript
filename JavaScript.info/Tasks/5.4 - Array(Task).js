'use strict';

// Task 1 - Array operations
let styles = ['Jazz', 'Blues'];

styles.push('Rock-n-Roll');
styles[(styles.length - 1) / 2] = 'Classics';
styles.shift();
styles.unshift('Rap', 'Reggae');

console.log(styles);

// Task 2 - Sum input numbers
let sumInput = function() {
    let arr = [];
    let sum = 0;

    while (true) {
        let question = prompt('Number please?', '');
        
        if (isNaN(question) || question == '' || question == null) break;
        
        arr.push(+question);
        sum += +question;
    }
    return sum;
}

console.log(sumInput());



