const userEmail = "ripunjay@google.com"

if(userEmail){//here at the palce of condition not any comparison, so we dicide here in the give variable string is empty or not if string empty then condition will fase either condition will true. ese bolte hai truthy value ..
    console.log(`Got the User Email : ${userEmail}`)
} else{
    console.log("We have not any mail.")
}


//falsy values : eska matalb condition ke jagah pr falsy values rakhane se condition false ho jayegi.. niche diye gaye sabhi falsy values hai...
// false, 0, -0, BigInt 0n,  "", null, undefined, NaN


// truthy values : eska matalb condition ke jagah pr truthy values rakhane se codition true ho jayegi... niche diye gaye sabhi truthy values hai..
// "0", 'false', " ", [], {}, function(){}


//Example for check array length is zero or not
const userArray =[ ]
if(userArray.length ===0) {
    console.log("userArray is an empty array")
}  

// Example for check empty object is condition;;
const emptyObj = {}
if(Object.keys(emptyObj).length ===0){
    console.log("Object is Empty")
}else{
    console.log("Not Empty")
}

//Some Conditions.......

//false == 0    this will true
//fase == ''    this will true
//0 == ''       this will true



//Nullish Coalescing Operator (??) : null undefined
//Ex--
let val1;
// val1 = 5 ?? 10  // es case me val1 me 5 hi store hoga..

// val1 = null ?? 20  //eska use jab ham sever se ya kahi se data le rahe hote hai aur vaha par hame data na mile ya fir null mil jaye use case me ham val1 ko 20 assign karane ke liye Nullish Calescing Operator ka use karenge..

//val1 = undefined ?? 47 // If we get value of val1 is undefined then val1 will be 47.

val1 = null ?? 45 ?? 23 // Here If we get value of val1 is null the first value will be assigned to val1, which is 45 here.

console.log(val1)

//Terniary Operator-- terniary operator is totally different from Nullish coalescing operator.. terniary operator likly to if else ...
//Structure of Terniary operator--  condition ? true  :  false
 
const teaPrice =70;
teaPrice >=50 ? console.log("Price is greater than 50") : console.log("Price is less than 50")   