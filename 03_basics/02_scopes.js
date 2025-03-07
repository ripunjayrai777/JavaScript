// story of scope is started from 'let' , 'const' and 'var'

//  {} -this is scope in approx 98% programming languages..
// if we get into any curly brackets then that we will be a scope like - function scope , if scope, if-else scope for scope and more..
let a = 100;
let b = 50;
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  console.log("this is block scope- a: ", a);
  console.log("this is block scope- b: ", b);
}
// inside of curly bracket is block scope and outside of curly is global scope

// Recommended : Do not use of var

console.log("this is global scope: ", a);
console.log("this is global scope: ", b);
console.log(c);

//how work NESTED SCOPE

function one() {
  const username = "ripunjay";

  function two() {
    const website = "youtube";
    console.log(username); // ye username variable scope ke andar in use ho raha hai ,(username variable function one ke andar declare bhi aur useke andar function two hai , username scope ke andar hai)
  }

  // console.log(website); //yaha pr website scope se use ho raha , website variable declare nahi hai es scope ke liye.

  two();
}

one();

//jo bhi variable hai vo scope me declare kiye ja rahe hai use me use honge ...use baha nahi honge..

// jo child scope hoga vo hi kaeval parent scope ke variables ko use kar payega..
//jo bhi variables global scope me declare hai vo kisi bhi scope me use ho skta hai but block scope keval usi block me use hoga jisme declare hai.

// New Example:-
if (true) {
  const username = "abhay";
  if (username === "abhay") {
    const web = " leetcode";
    console.log(username + web);
  }

  // console.log(web); //this will give the error that - web is not defined. because web is declare in child scope so we can not access it in parent scope..
}
// console.log(username); ////this will give the error that - username is not defined. because web is declare in child scope so we can not access it in parent scope..

// ***************************** interesting question  ******************************************

console.log(addOne(5)); //it will not give any error

function addOne(num) {
  return num + 1;
}

// console.log(addTwo(5)); //it will through error- Cannot access 'addTwo' before initialization ,because
const addTwo = function (num) {
  //here  function in stored in a variable..
  return num + 2;
};
console.log(addTwo(5));
