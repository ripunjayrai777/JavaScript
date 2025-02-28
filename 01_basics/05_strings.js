const myName = "Ripunjay"; // we store "Ripunjay" in myName in form of String
const repoCount = 30; // we store is 30 in repoCount in form of Number

console.log(myName + repoCount + " Value"); // concatenation will perform here and return 'Ripunjay30 Value', but this is not recommended..

console.log(`Hello, My name is ${myName} and my repo count is ${repoCount}`); // we can insert variable in the string like this but main thing s string will be in backtick (`) and variable insertion in ${...} , This is known as String Interpolation. We can easily add here method in variable like -
console.log(`Hello, my name is ${myName.toUpperCase()}`); //this will be return -
//"Hello, my name is RIPUNJAY".we can also apply  method here..here toUpperCase() method is applied
// this is the new way to declare the string--
const gameName = new String("ripunjay-rai-rai");
console.log(gameName); //this will be display like this on OUTPUT Panel- [String: 'ripunjayrai']
// here string is an object and in the form of key value pairs
console.log(gameName[0]); // here we are applying index method , we will get zeroth index of letter, which is 'r'
console.log(gameName.toUpperCase()); // this will return RIPUNJAYRAI ,   because toUpperCase function is applied..
console.log(gameName.charAt(2)); //this will return character at index 2 position, which is 'p'
console.log(gameName.indexOf("u")); // we are checking here that index number of 'u'

const newName = gameName.substring(0, 4); // this will store the data from gameName String from index 0 to 4 and 4th index will not store in newName. here we are not allowed to use negative indexing we we use then substring method assume it zero.
console.log(newName);

const anotherName = gameName.slice(-8, 7); // "ripunjay-rai" - this is your string and here we applied slicing method and assign in anotherName. Here is negative indexing so we start from last , only in slicing we can use use negative index.
console.log(anotherName);

const newNameOne = "    ripu     ral  ";
console.log(newNameOne.trim()); // trim methods remove the all whitespace from starting and ending only and new line also

const url = "https://ripunjay.com%20dashboard%20navigation";
console.log(url.replace("%20", "-")); // this replace method or function will replace the only first %20 from '-'
console.log(url.includes("ripu")); //In this includes method we are checking that "ripu" is available in url or not. If available then return True otherwise False.

console.log(gameName.split("-")); //we will split the string of gameName on the basis of '-' the we will get and array this [ 'ripunjay', 'rai', 'rai' ]
