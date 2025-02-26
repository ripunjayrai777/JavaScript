const accountId = 454545;
let accountEmail = "ripunjay@gmail.com ";
var accountPassword = "123456";
accountCity = "Gorakhpur"; //in javascript - bina kuchh(const, let , var) variable ke likkhe hi ham variable ki memory reserver kar skte hai {but this is not good way to write the code}
let accountState; //  this will be 'undefined' {agar js me variable bina decleare kiye chhor dete hai to js uski value 'undefined' kr deti hai}
// accountId = 2; not allowed because this is a constant..
accountEmail = "agv@gmail.com";
accountPassword = "454512";
accountCity = "Deoria";

console.log(accountId);
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

/*
prefer not use to 'var' because issue of 'block scope' and 'functional scope'
*/
