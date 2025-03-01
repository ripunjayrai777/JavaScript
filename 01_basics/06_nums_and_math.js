const score = 100; //This is automatically defined as a number..
console.log(score); //this return simply 100

const balance = new Number(200); //we define here proper that 'balance' will be only number data type, and we stored here 200 in the balance.
console.log(balance); //this will print [Number: 200], we can simply apply some method here if we want..
console.log(balance.toString()); // toString method is applied on balance so it will convert in to the strings , after conversion in string we can use the properties/methods of String
//Example:
console.log(balance.toString().length); // Here we will get 3 because length method is applied on string 100 which length is 3
console.log(balance.toFixed(2)); // this will return the 2 decimal number meant after the decimal 2 digits

const anotherNum = 56.8915225;
console.log(anotherNum.toPrecision(3)); //Number of significant digits. Must be in the range 1 - 21, inclusive. Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits. it will return 56.9

const newNum = 1000000;
console.log(newNum.toLocaleString()); //this will return like this 10,00,000
