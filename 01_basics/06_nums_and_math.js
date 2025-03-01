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

const maxNum = Number.MAX_VALUE; //this will store maximum number which can be store in Number, which is 1.797693134862348623157 to the exponent 308
console.log(maxNum);

const minNum = Number.MIN_VALUE; //yaha pr Number.MIN_VALUE me Number likhane ke baad hum uske properties use kr payenge , jo ki yaha pr hum MIN_VALUE ka use kar rahe h.
console.log(minNum);

//************** ******************  Maths  **************************************************************** */

console.log(Math); //here Math is an Object, this will return 'Object [Math] {}' and Using Math their many properties will unlocked...like this will give some mathematics fundamental rule methods...

console.log(Math.abs(-9)); //this 'abs' method will return absolute value of given number

console.log(Math.round(99.8)); // this "round" function will return round value of given number.

console.log(Math.ceil(4.2)); //this "ceil" method will return upper round off value means 4 se thoda bhi jyda hua to return 5 hoga. here return 5

console.log(Math.floor(7.9)); //this "floor" method is opposite to "ceil" method , here return will 7,

console.log(Math.sqrt(25)); //this "sqrt" method will calculate the square root of given number, here is 5

//In Math library we have many methods. Most of the time we are using Math library as Math.random ...Example--
console.log(Math.random()); //using this random method we get output in the rang of 0 to 1, it will in decimals. but every this it will be random generation...

console.log(Math.random() * 10); // here after the generation of random number between 0 and 1, will be multiplied by 10 then one decimal will be shifted right side and number will be from 0 to 10 but number can be zero also .so add one for ignore zero
console.log(Math.floor(Math.random() * 10)); //for avoiding all numbers after decimal use floor

//Question: Here we want to generate random number between 10 to 20
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
