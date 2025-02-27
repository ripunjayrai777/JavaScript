// If do any compare in variable then we will always get answer in Boolean, which is True or False..
//some comparisons examples:::
console.log(2 > 6); //2 is greater than 6 ?? if true then we will get answer "True" otherwise We will get "False"

console.log(2 >= 6); //2 is greater than  or equal to 6 ?? if true then we will get answer "True" otherwise We will get "False"

console.log(2 < 6); //2 is less than 6 ?? if true then we will get answer "True" otherwise We will get "False"

console.log(2 <= 6); //2 is less than or equal to 6 ?? if true then we will get answer "True" otherwise We will get "False"

console.log(2 == 6); //2 is equal to 6 ?? if true then we will get answer "True" otherwise We will get "False"

console.log(2 != 6); //2 is not equal to 6 ?? if true then we will get answer "True" otherwise We will get "False"

// What if we compare different data types values
console.log("2" > 1); // In this case JS will convert String "2" into the number
// In TypeScript not allowed different data type comparison
console.log("02" > 1); //in this case js will convert string "02" into the number

console.log(null < 0); // return result False
console.log(null > 0); // return false
console.log(null == 0); // return false
console.log(null <= 0); // return True
console.log(null >= 0); // return True reason is given below for all these

//The reason is that and equality check == and Comparisons '<', '>', '>=', '<=' work differently , Comparisons convert null to a number , treating it as 0.
//Thats why <= and >=  cases are true and others are false

console.log(undefined < 0);
console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined <= 0);
console.log(undefined >= 0);
//In the case of 'undefined' all are return False.....

// ******************  Strict Check ---means-->  "==="     *************************************
console.log("2" == 2); // This will return true because here String to Number Conversion are allowed but in Strict Check Data Type Conversion is Not Allowed.

//Example:
console.log("2" === 2); // this will return false because in Strict Check Conversion is not allowed..

// In the most of case we should avoid this types of comparisons check, in which data type is  different, null or undefined
