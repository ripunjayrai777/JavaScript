function myName() {
  console.log("R");
  console.log("I");
  console.log("P");
  console.log("U");
} //Here we define the function myName. when ever we want to use then simply call this function.

//myName is a reference whenever we want to execute the function then put () with the reference. like --

myName(); // this is known as function call.

function addTwoNum(num1, num2) {
  console.log(num1 + num2);
} // here we are defining addTwoNum function where we pass two parameters num1 and num2 in javascript their is no need to define data types of parameters. And whenever we execute this function then we should pass two argument for the given parameters. like--

addTwoNum(4, 3); //here we call the addTwoNum function and passes two arguments 4 and 3 . this will return 7

const result = addTwoNum(5, 6);
console.log("Result is : ", result); // this will return undefined.. because function addTwoNum is not returning anything only print the sum of num1 and num2 on the console ..If you want to print as the result then function should return something.

function newAdd(number1, number2) {
  let sum = number1 + number2;
  return sum; //return the sum.
  // return number1 + number2;  // we can do directly return like this without declaring the new variables like sum...and result will be same.
} // Here we define the function which name is newAdd and return the sum of Two numbers number1, number2
const res = newAdd(7, 9); //now here we can store the returns of newAdd function in res.
console.log("Your new result is : ", res);

//new...
function loginUserMessage(username) {
  if (username === undefined) {
    console.log("Please Enter the username");
    return;
  } // here we pass the condition if username is not given the it will print "please Enter the username" on the console.
  return `${username}! abhi login hua hai!`;
  // loginUserMessage is returning this
} //here we defined a function named loginUserMessage
// loginUserMessage(); //now we executed the function loginUserMessages but it will not print because hamne kahi print karane k liye bole hi nahi hai..

const msg = loginUserMessage("ripunjay"); //here we stores the returns of loginUserMessage function in msg
console.log(msg);
//we can do this in single line also like-
console.log(loginUserMessage("abhay")); // yaha pr hame extra new variable nahi banane pade..

// what if whenever we don't pass the arguments at the time of function call..like--
// console.log(loginUserMessage());
console.log(loginUserMessage());
// this will return the undefine at the place of username.. output will be- undefined! abhi login hua hai!

//at the time of defining a function we can give them a default parameter ...like-

function loginUserMsg(username = "sam") {
  // here we pass the default parameter in username is sam
  if (username === undefined) {
    // this will never be execute because their is a already default username same
    console.log("Please Enter the username");
    return;
  } // here we pass the condition if username is not given the it will print "please Enter the username" on the console.
  return `${username}! abhi login hua hai!`;
  // loginUserMessage is returning this
}

console.log(loginUserMsg()); // this will print: sam! abhi login hua hai!
