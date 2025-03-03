//arrays: arrays can store different types of elements at same time..it will be closed in square brackets - [], array of JS is resizable..
//index of array is starts from zero.
//we can access each elements of array by their index position.
// how to declare array..
//Javascript : array copies operation create shallows copies.(All standard built-in copy operation with any javascript objects create shallows copies, rather than deep copies)

//Shallows copy: A shallow copy of an object is a copy whose properties share the same references  as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too.(jo bhi main changes karunga vo original array me bhi change hoga , ye heap me store hota h ...)

//Deep Copy: A deep copy of an object is a copy whose properties do not share the same references as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too. (jo bhi changes karoge vo k original pr changes nahi hoga, ye stack me store hota h..)

const myArr = [1, 2, 3, "ripu", true, 9]; // Declaration of Array
console.log(myArr[0]); //this will print the zeroth indexed element of myArr
console.log(myArr); // this will print all the elements of the Array.

const newArr = new Array(1, 5, 3, 2); //this is the way to define the array, this will automatically put in square brackets.
console.log(newArr);

// Array Methods*****************************************************
myArr.push(6); //this will add or push the data in myArr which argument is passed in the push method.
myArr.pop(); // this will delete one element from last of the array and for the pop method no need to pass the argument.

myArr.unshift(5); // this method will add a element in the zeroth index of array and shift all element right by one index.

myArr.shift(); // this will delete one element from the zeroth index in the array and in this method no need to pass the arguments.
console.log(myArr); // now all elements of array will be print

console.log(myArr.includes(3)); //this includes method  will check that the given data is available in myArr or not. this will return boolean data type.
console.log(myArr.indexOf(9)); //this indexOf method will check that given data is available on which index number, if given data is not available in the array then output will be -1

const newArr2 = myArr.join(); //here join() method is bind the element of array and covert into the string.
console.log(myArr); // simply print the array
console.log(newArr2); // simply data will print without square bracket and data type is string here
console.log(typeof newArr2); //typeof method is used for check the data type of newArr2, which is string

//       *********************   slice and splice methods  **********************************************

console.log("A", myArr); //this will simply print A and myArry

const myn1 = myArr.slice(1, 3); // using slice method, from myArr only range of element will consider excluded last rang, here index 3 will not consider, and here store in the myn1, slice will not change the original array
console.log(myn1); // this will print [2,3]
console.log("B", myArr); //array will be same, changes..

const myn2 = myArr.splice(1, 3); // cut the element from myArr from index 1 to index 3 and it will store in myn2, and here will change the original data because of splice.
console.log("C", myArr); //after applying the splice original myArr will changed and print: C [1, true, 9]
console.log(myn2); // print spliced element : [2,3,'ripu']

// Major difference in Slice and Splice Method is that Splice manipulate the original array and Slice don't.
