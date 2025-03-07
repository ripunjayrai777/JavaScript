//  IIFE : Immediately Invoked Function Expressions (IIFE)- eska mtalb jab bhi haume fuction ko immediate invoke/execute krana ho declaration ke baad to esi expression ka use karte hai ...
// Eska use esliye bhi krte because we don't want any pollution from global scope.
//global scope ke pollutions ko hatane ke liye mainly use karte j=hai IIFE ka..

function chai() {
  console.log("data connected!");
} // here we declare simple function name chai and console printing "data connected!"
chai(); // simply we are execute here..

//Now if write in IIFE...
(function chai2() {
  console.log("data 2 connected!");
})(); //here first we close the function chai2 in parenthesis and put one close parenthesis for executions..
// ya pr semicolon compulsory  hai because, IIFE invoke ho ho jayega pr es pata nahi hai kaha pr rokana hai tjo semicolon batyega kaha rokna hai esliye semicolon compulsory hai

//NEW Way to write IIFE..

((name) => {
  console.log(`my name is : ${name}`);
})("ripunjay");
// this is alos IIFE , we define here arrow function, and how pass the parameter 'name' and passes the arguments "ripunjay"
