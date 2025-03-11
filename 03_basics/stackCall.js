let val1 = 10;
let val2 = 5;
function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}
let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);
console.log(result1);
console.log(result2);

// Call Stack:-----
function one() {
  console.log("one");
  two();
}
function two() {
  console.log("two");
  three();
}
function three() {
  console.log("three");
}
one();
two();
three();
// first call stack go for call function "one()" then from their it will enter in function one(), in function one() call stack go on "two()" and from their it will go on function three() still in the call stack function one and two and three all are available.
//after this stack will be empty .
//Now call stack gor for call function two() then from their it  will enter in function two(), in function two() call stack go on "three()" still in the call stack function two and three will in stored ..
// After this stack will be empty..
// in the last it goes for call function three() and from their it will enter in function three() and in the stack their will be only three() stored . after this execution this will also delete/
