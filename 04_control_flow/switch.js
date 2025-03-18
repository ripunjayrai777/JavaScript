// Swich Case ---------------

// switch (key) {
//     case value:
        
//         break; // break the control flow. after matching the case.

//     default:
//         break;
// }  // This is basic syntax of Switch Case

// Example 1 :

const month = 4;
switch (month) {
    case 1: 
        console.log("Jan")
        break;
    case 2: 
        console.log("Feb")
        break;
    case 3: 
        console.log("Mar")
        break;
    case 4: 
        console.log("April")
        break;

    default: console.log("Default Case Match")
        break;
}

//Example 2:

const month2 = "mar"
switch(month2){
    case "jan": console.log("1");
    break;
    case "feb": console.log("2");
    break;
    case "mar": console.log("3");
    break;
    case "april": console.log("4");
    break;
    default: console.log("default case.")
    break
} //this is also like a if else condition checking