//for loop or iterations....
// steps of for loop working;;;;
// step 1: first initialization of i
// step 2: then give the condition ,if condition is true then enter in the loop and execute the code and then..
// step 3: and then increaments..and the again go on first step.

// Example 1 
for (let i = 0; i <= 10; i++) // first initialization; second is condition for number of iterations; third is iteration  
{
    const element = i;
    if (element == 5) {
        // console.log("5 is the Lucky Number.");
    }
    // console.log(element)

}//element variable will not access out side of the scope 


// Example 2 of Nested Loop : means loop ke andar loop

for (let i = 1; i <= 10; i++) {
    // console.log(`Table of : ${i}`);
    for (let j = 1; j <= 10; j++) {
        
        // console.log(i + ' * ' +  j + ' = ' + i*j );

    }

}


//Example 3 : In the form of array

let myArr = ["batman", "flash", "spiderman", "tony"];
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
}// this will return the myArr in form of array.


//About Keywords : break, continue
//Example 4 -- break;
for (let index = 1; index <= 20; index++) {
    if(index == 5){
        // console.log('5 detected')
        break;
    }
    // console.log(`Value of i is : ${index}`)
    
}// kisi bhi controle flow ko rokane ka liye break ka use karte hai..


// Example 5 -- continue;
for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log('5 detected')
        continue;
    }
    console.log(`Value of i is : ${index}`)
    
}// ek bar condition ko continue karne ka mauka deta hai.