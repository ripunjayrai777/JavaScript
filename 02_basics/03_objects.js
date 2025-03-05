//*****************************************   objects   *************************************************** */

//there are two to method to declare objects: literals and constructor
//singleton: this is only made from constructor..
// Object.create  // we can create object like this, this called constructor method...

//Object literals:
// const JsUser ={} //this this a empty Object.
//objects will be in keys, value pairs.

const mySym = Symbol("Key11"); //declaration of a Symbol

const JsUser = {
  name: "ripunjay",
  "Full Name": "Ripunjay Rai",
  age: "18",
  [mySym]: "newKey", //this is symbol so we put this key  in []
  location: "Gorakhpur",
  email: "ripunjay@google.ac.in",
  isLoggedIn: false,
  lastLoggingDay: ["Sun", "Mon", "Fri"],
}; // this is the declaration of An Object.

//How to access Objects..
console.log(JsUser.age); //this is way to access the Object but we should not prefer this, because if we want here acces full name then we can not access from this method.

console.log(JsUser["age"]); //this is way to access the Object but we should not prefer this.
console.log(JsUser["Full Name"]); // Full Name will access from this method..
console.log(JsUser[mySym]);
console.log(typeof mySym);

//we can easily overwrite the value of objects like this--
JsUser.age = 20;
console.log(JsUser);

// we can freeze the object so, any changes can not done..
// Object.freeze(JsUser); //JsUser object will be freezed
JsUser.email = "ripu@gmail.com";
console.log(JsUser);

// here we add function in JsUser Object for greeting--
JsUser.greeting = function () {
  console.log("Hello!! Js User");
}; //this will show in object as a anonymous Function

JsUser.greeting2 = function () {
  console.log(`Good Night! ${this.name}`); //Here 'this' keyword for refers the same object and after add dot get their objects property like name, full name, age, ...
}; // this will will also add in object JsUser.

console.log(JsUser); // all key value pairs will print and this function greeting is print as anonymous function
console.log(JsUser.greeting); //this greeting function will not execute, here only tell the greeting function is anonymous.
JsUser.greeting(); // here after execute the greeting function and print on the console

JsUser.greeting2(); // here after execute the greeting2 function and print on the console
