const user = {
  username: "Ripunjay",
  price: 555,
  welcomeMessage: function () {
    console.log(`hello!  ${this.username} welcome to this website`); //here this is refers the current context.
    console.log(this); //this will return the whole context.- {username: 'abhay',price: 555, welcomeMessage: []}
  },
};
user.welcomeMessage();
user.username = "abhay";
user.welcomeMessage(); //this will return after changes done in username

console.log(this); // this will return an empty object -{} , because we are in node enviornment , and at this time not any context in global

// ****************** Arrow Function  *****************************

function chai() {
  let username = "ripunjay";
  console.log(this.username); //"this" is  work in object not in functions, here this will print undefined
}
chai();

// another example
const chai2 = function () {
  let username = "ripunjay";
  console.log(this); //this will return  me all the context in form object ...
  //but if we use ..
  console.log(this.username); // "this.username" is only work in object not here , here this will print undefined
};
chai2();

//How to declare Arrow Function--
const chai3 = () => {
  let username = "ripunjay";
  console.log(this); // this will return me all the context in form object like {uername:"ripunjay",price: 555,welc..}

  //but if we use

  // console.log(this.username); //"this.username" key is only work is object not here, here this will print undefined
}; //declare an arrow function..
chai3();

// basic syntax of Arrow Function: ()=> {}
// we can store this function in name like this
const addTwo = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwo(4, 6));

//another example:Implicit return- this is use when code will be in only one line.
const addNum = (num3, num4) => num3 + num4; //we can close this num3 and num4 in parenthesis but in we close this in curly bracket then we should use return keyword compulsory
console.log(addNum(8, 7));

// if we want to return any object then we should do this
const addNum4 = (num3, num4) => ({ name: "ripu" }); //this will return {name: "ripu"}
console.log(addNum4());
