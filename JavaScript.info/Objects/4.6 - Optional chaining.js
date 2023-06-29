'use strict';

// Optional chaining 
let user = {};

console.log( user?.address?.street );
/* The optional chaining stops the evaluation if the value before "?" 
   is undefined or null and returns undefined
*/

// Optional chaining works even if object doesn't exist
let mannager = null;

console.log(mannager?.address);  // undefined, no error

// Short-circuiting 
let user1 = null;
let x = 5;
/* Optional chaining immediately stops the evaluation if the left 
   part doesn't exist
*/
console.log(user1?.sayHi(x++)) // 'user1' doesn't exist so it stops execution

// We can you optional chaining with delete  
let admin = {
   name: 'Ann'
};

delete admin?.name; // if 'admin' exist, delete 'name'

// We can't use '?' to assign
let user2 = {};

user2?.name = 'Ben';

console.log(user2); // Error