//Dates
let myDate = new Date();
console.log(myDate); // this will print the data but we can not understand that language.
console.log(myDate.toString()); // after applied toString method date will be readable..
console.log(myDate.toLocaleString()); // this will return : 3/3/2025, 3:53:58 pm
console.log(myDate.toISOString()); //this will return : 2025-03-03T10:24:35.230Z
console.log(myDate.toJSON()); //this will also return : 2025-03-03T10:24:35.230Z
console.log(myDate.toDateString()); //this will return : Mon Mar 03 2025
// their are very different types of method for Date and we can apply them and check them that how date will print.
console.log(typeof myDate); // Date  will be object in JS

let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate.toDateString()); // this will return the date: Mon Jan 23 2023. In JS Month will start form zero , like if we say Date(2023 1 22)- it means we will taking about Feb 22 2023

//there is more to define date like as-
let newDate = new Date(2023, 0, 23, 13, 5); //here In Date last of two will be time in 24 hours formate, it means 1:05: 0 PM , basically this will return :23/1/2023, 1:05:00 pm
console.log(newDate.toLocaleString()); // for print newDate we use toLocaleString() Method because in toLocalString() method date and time all data will print.

let newDate2 = new Date("11-25-2025"); //mm-dd-yyyy but it will print in dd-mm-yyyy
console.log(newDate2.toLocaleString()); //we use here toLocaleString method be it will print time also.

//learn time stamps//
let myTimeStamp = Date.now();
console.log(myTimeStamp); // this will return in mille-seconds value and it will be start from 1 jan 1970 and till now.. return like : 1740999188474

console.log(newDate2.getTime()); // this means mille-seconds value starts from 1 Jan 1970 and till Date which stored in newDate2// this will print : 1764009000000

console.log(Date.now()); // we get it in mille-seconds
console.log(Date.now() / 1000); //we get it in seconds but their will 3 numbers after decimal
console.log(Math.floor(Date.now() / 1000)); // Here all sorted we get in seconds from 1 Jan 1970 to till now.

let newDate3 = new Date(); // we are storing here today date in newDate3
console.log(newDate3.getDate()); // here we applied getDate() method on newDate3 and this will return on date ,
console.log(newDate3.getMonth()); // here we get only months and month will start from 0.
console.log(newDate3.getFullYear()); // here we get only Years : 2025

// Important********************************************
let latestDate = newDate3.toLocaleString("default", {
  weekday: "long",
}); // we can customize the data of date by this way
console.log(latestDate);
