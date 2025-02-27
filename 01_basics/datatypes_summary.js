//Primitive Data type-- Call by Value: means that whenever we want to get this data for our usage then data will be copied as values and gives us.
//There are approx 7 types-- Strings, Number, Boolean, Null, Undefined, Symbol, BigInt
const score = 50;
const score2 = 50.2;
const isLoggedIn = true;
const outsideTemp = null;
let userEmail;
const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId); // this will return false because symbol is use for unique ID and here id and anotherId both are symbol
const bigNumber = 45649879456654975164n; //this is automatically store in BigInt data type because we use "n" in the end of number.

// Non Premitive Data Type(Reference)
// type : Array, Object, Functions

const superHeros = ["Ironman", "Antman", "Saktiman"]; //this is a array and we can also say reference data type

//Object -- In the form of key values pairs and closed in curly bracket
//Example--
{
  name: "rupali";
  age: 23;
  loggedIn: true;
}

//we can store this object in any variable like--
let myObj = {
  name: "ripunjay",
  age: 21,
  loggedIn: false,
};

//In Object, in the form of key value pairs we can store any thing like as - string, number, boolean, also can be another Object..

//there is many type for declare functions , we see here function is treated as variable...

const myFunction = function () {
  console.log("hello");
};
console.log(typeof myFunction); // this will return function
//this is the function for print hello on console which is store in myFunction

//Study Link : https://262.ecma-international.org/5.1/#sec-11.4.3

console.log(typeof myObj); //this will return object

console.log(typeof superHeros); // this will also return object but this is a array named superHeros

console.log(typeof bigNumber); //this will return bigint data type because this is stored as a bit integer
