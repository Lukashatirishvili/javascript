'use strict';

// Task 1 - Create a calculator 
let calculator = {};

calculator.read = function() {
  this.a = +prompt('write number', '');
  this.b = +prompt('write number', '');
}

calculator.sum = function() {
  return this.a + this.b;
}

calculator.mul = function() {
  return this.a * this.b;
}

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
