"use strict"; // treat all JS code as newer version

// alert(3 + 3); //this is only work in browser .. and we are working in nodejs

console.log(3 + 3);
// code readability should be high
console.log("Ripunjay");

// Premitive Data Type-----------------------------------

let name = "Ripunjay"; //Data Type - String , this data type is allowed in single and double quotes both.
let age = 20; // Data Type - Integer , Range - 2 to pwr 53   esse bade number ke liye 'bigint' Data type ka use karenge.
let isLoggedIn = false; // Data Type-  Boolean, means - True or False .

let abc = null; // null is a specially data type which is in Object data type..or we can say "standalone value " or null is a representation of empty value . It is totally different from - {let abc = ""}
console.log(abc);

let state; // this means value is not defined still so "undefined"
// here is one more data type in premetive data type is "symbol" this is use for unique

// Non- Premitive Data Type -----------------------------------------

// object is non premitive data type we do more disscussion on it

console.log(typeof "ripu"); //In console.log we use a function which name is typeof function for know the data types.

console.log(typeof abc); // here we use typeof function for get the data type of all ready declared variable abc

console.log(typeof null); //here we get data type of 'null' is 'object'
