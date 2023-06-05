"use strict";

// String conversion

let value = true;

value = String(value);

// Numeric conversion

alert("6" / "2"); // strings are convert to numbers

let str = "2231";

let num = Number(str);

console.log(num);

let str2 = "We are champions";

str2 = Number(str2); // NaN, conversion failed

// Boolean conversion

let result = true;

result = Number(result); // 'true' will be converted '1';
