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
