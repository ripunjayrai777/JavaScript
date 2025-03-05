// how to declare object with the help of constructor or as a singleton.
const tinderUser = new Object(); // this is singleton object
// const tinderUser = {}; // this is non singleton object
tinderUser.name = "ripunjay";
tinderUser.age = 25;
tinderUser.loggedIn = true;
//above all data will save in tinderUser object as a key values pairs..
console.log(tinderUser);

const regularUser = {
  email: "ripu@google.com",
  fullName: {
    userfullName: {
      firstName: "ripunjay",
      lastName: "rai",
    },
  },
};
//we are using here object as nested object. means that object is declare in object ..
// console.log(regularUser.fullName.userfullName.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

const obj3 = Object.assign({}, obj1, obj2, obj4); // this means key and value of obj1 and obj2 will be assign in obj3 as stings.Here  curly bracket   is a optional parameter, assur that all value of obj1 and obj2 will be merge and output will be in { '1': 'a', '2': 'b', '3': 'a', '4': 'b' , '5': 'a', '6': 'b' }, means that {}- this is a target and all others(obj1, obj2, obj4) are source..
console.log(obj3);

//but we also use here spread method to combine all key values pairs in one object  --
const obj5 = { ...obj1, ...obj2, ...obj4 }; // this spread all the keys values pairs in same object
console.log(obj5); // expected output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

//if get arrays of object user data from database then---how to access them...
const users = [
  {
    id: 1,
    gmail: "r@gmial.com",
  },
  {
    id: 2,
    gmail: "s@gmial.com",
  },
  {
    id: 3,
    gmail: "t@gmial.com",
  },
  {
    id: 4,
    gmail: "u@gmial.com",
  },
];

console.log(users[1].gmail); // here we are accessing the gmail of first object from the users array and print on console.

console.log(tinderUser); // print the all key value pairs which are in object tinderUser.

console.log(Object.keys(tinderUser)); // here are we accessing the all keys of tinderUser object and we print it on the console in the form of array.

console.log(Object.values(tinderUser)); // here are we accessing the all values of tinderUser object and we print it on the console in the form of array.

console.log(Object.entries(tinderUser)); //here are gets the all entries of the tinderUser in the form of arrays in the array.Output of this is --: [ [ 'name', 'ripunjay' ], [ 'age', 25 ], [ 'loggedIn', true ] ]

console.log(tinderUser.hasOwnProperty("isLoggedIn")); // this will return value in boolean , if isLoggedIn properties is exits in tinderUser then it will return true otherwise return false,

// **************************   De-structuring Object   ***************************************************

const course = {
  courseName: "JS In Hindi",
  courseFee: 999,
  courseInstructor: "Hitesh Chaudhary",
};

// course.courseInstructor; // we can access by this method also but course word is repeats more and create confusions so we decide to use destructuring...

const { courseInstructor: instructor } = course; //this is called de-structuring object and now we can use 'instructor' at the place of courseInstructor directly..
console.log(instructor);

// apna kaam kisi ko de dena hota hai - api
// Data in form of Json---mostly like a object but their will no name and key and value both will in string so in double qotes
// {
// "name": "ripu",
// "coursename": "Javascript",
// "fee": "Free"
// }
