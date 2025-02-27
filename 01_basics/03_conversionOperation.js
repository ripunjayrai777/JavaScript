let score = "33"; // this is a string coz this is closed in quotes
let score2 = "33ab"; // this is also a string

console.log(typeof score); //function for check and print data type of 'score'
console.log(typeof score2); //function for check and print data type of 'score2'

let valueInNumber = Number(score); //conversion of data type in 'Number' from 'string' using 'Number()' function  or {this will change the data type of 'score' from String to Number , which is 33.}

let valueInNumber2 = Number(score2); //conversion of data type in 'Number' from 'String' using Number() , or {this will change the data type of 'score2' from String to Number, but only data type will change, value of score will be 'NaN'- (Not a Number)  }

console.log(valueInNumber); // this will print the value of score after changes the data type, which is 33
console.log(valueInNumber2); // this will also print the value of score2 , after change the data type but this in Not a Number (NaN), because its include ab in 33 which is in string..

console.log(typeof valueInNumber); // this will print the data type after changes the data type of score from string to number, which is number

console.log(typeof valueInNumber2); // this will also print the data type after changes the data type of score2 from string to number , which is number

//what if value will null
let score3 = null;
console.log(typeof score3); // data type will be object in this case.
let valueInNumber3 = Number(score3); // after changing of data type of score3 it will be 0 because this is null and numerical value of null is zero.
console.log(valueInNumber3); // this will display zero, because after changing the data type of score3, which is null, will numerically zero
console.log(typeof valueInNumber3); // data type will be number

// what if value will be undefined
let score4 = undefined;
console.log(typeof score4); //data type will be undefined
let valueInNumber4 = Number(score4); // changing data type in number
console.log(valueInNumber4); //value  after changes in 'Number' will be Not a Number (NaN)
console.log(typeof valueInNumber4); //data type after changes in Number will be  number

// what if value will be boolean
let score5 = true;
console.log(typeof score5); //data type will be boolean
let valueInNumber5 = Number(score5); //changing data type in to number
console.log(valueInNumber5); // after changing the data type in Number value will 1 in case of False value will be true .
console.log(typeof valueInNumber5); // after changing the data type from boolean data type will be number

//jab bhi ham koe conversion karte hai aur vo Number me convert nahi ho skta to uski value Not a Number (NaN) ho jati hai

//What if we convert number and string into boolean
let isLoggedIn = 1; // data type of 'isLoggedIn' variable is number.
let covertInBoolLogged = Boolean(isLoggedIn); //here 'isLoggedIn' data type is converted in Boolean using the Boolean() function.
console.log(covertInBoolLogged); // After the conversion, the value of convertInBoolLogged is true , until isLoggedIn is 0 or Empty String

let someNumber = 54; // data type will be number
let covertInStr = String(someNumber); //converting 'someNumber' in 'String' using String() function
console.log(covertInStr); // Value will the 54 or remains same because use changing number in String.
console.log(typeof covertInStr); //covertInStr  is converted into String from Number

//************************************************ Operations **************************************** */

let value = 3;
let negValue = -value;
console.log(negValue); // this will print negative 3, because in upper line we assign the 'negative of value' in 'negValue'

// console.log(2 + 2); // addition operators
// console.log(2 - 2); // subtraction operators
// console.log(2 * 2); // multiply operators
// console.log(2 ** 2); // power or exponential operators
// console.log(2 / 2); // division operators
// console.log(2 % 2); // modular operators

let str1 = "hello";
let str2 = " ripu";
console.log(str1 + str2); //this will print "hello ripu"

// console.log("1" + 2); // this will print '12'
// console.log(1 + "2"); // this will print '12'
// console.log("1" + 2 + 2); // this will print '122'
// console.log(1 + 2 + "2");  //this will print '32' , but these type of code are not allowed to the perspective of code readability.

console.log(+true); // this will  print 1, but is this not a good way to write the code.
console.log(+""); //this will print 0

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2; //this is not the good way to assign the values
console.log(num1, num2, num3);

let gameCounter = 100; //gameCounter is assign as 100
gameCounter++; //this known as post increment.
console.log(gameCounter); //here gameCounter will be print after the increment

//If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

//If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.

//study link for Pre-increment and Post-increment: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

let num = 3; //assign 3 to num
const y = num++; //assign post-increment of num to y, so value 'y' will 3 and then after 'num' assign to 'y' increment in the 'value of num' which is 4
console.log(num, y);

// Tip : jaha per prefix aur post fix ka use hua hai us par dhayan dijiye
