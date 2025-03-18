// if --
const isUserLoggedIn = 45;
if(isUserLoggedIn>50){ // In the parenthesis, we will provide a condition which result is in Boolean, if true then scope will execute if condition is false then else block will execute.
    console.log("User is Logged In.")
}else{ // Else block
    console.log("elese block executed.")
}
//their are some comparison operater which we use at the place of condition..and return boolean result
// <   - Less than 
// >   - Greater than
// <=  - Less than or Equal to 
// >=  - Greater than or Equal to
// !=  - Not Equal to
// ==  - Is Equal to or not
// === - Is Equal to or not, but it also check the data type
// !== - Is Not Equal to , it also chech the sign.

const score = 200;
if(score>100){ //this is false 
    const power = "fly"; // we can use power only in this if scope, not at any other places.
    console.log(`Power is : ${power}`); 
}else{ //else block executed only when condition is false otherwise not execute and power will not give the error
    console.log(`Power is destructured : ${power}`); // here we will get error: power is not defined.
}


//Short Hand Notation:

const bal =1000;
if (bal>500) console.log("This is one line scope without curly bracket, if we want to write more than one line than separate with comma"),
console.log("this is second line") // this type of code writing is not recommended

// Nested Conditions:

if(bal<500){
    console.log("less than 500")
}else if(bal<750){
    console.log("less than 750")
}else if(bal<900){
    console.log("less than 900")
}else{
    console.log("All if else condition is false, less than 1200")
}

//Checking Multiple Conditions:
const userLogIn =true;
const debitCard = true;
if(userLogIn && debitCard){ // here we uses && opertor means both should be true then if scope will execute.
    console.log("If the userLogin and debitCard both codition is true then it will execute.")
}

const logInFromGoogle = false;
const logInFromEmail = true;
if(logInFromEmail || logInFromGoogle){ // we use here pipe sign as a OR Operator. Any one will true then if scope execute
    console.log("If any one of logInFromEmail and logInFromGoogle will be true then if block execute.")
    console.log("User Logged In")
}