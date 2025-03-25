// While Loop - we should only give condition , if true the it execute again and again//
//Example 1:
let index =0;
while (index<=10) {
    console.log(`The index value is : ${index}`);
    index = index +2;
}

// Example:2
let myArray =['flash', 'spiderman', 'superman'];
let arr =0;
while(arr<myArray.length){
    console.log(`This is index : ${arr} and this is value: ${myArray[arr]}`);
    arr = arr+1;
}// this will first check the condition if condition is true then code of while scope will executed. .. and again check the codition ... repete this till codition will not false.]

// Example of DO WHILE LOOP

let score =11;
do{
  console.log(`Score is : ${score}`);
  score++;
}while(score<=10)
// this code will firstly execute of code of do scope and then check the condition, if condition is true then code of do scope will execute and again check the condition of while ... repete this .. till conditions will false/ 