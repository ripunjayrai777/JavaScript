// const coding = ["js", "py", "cpp", "java", "ruby"];

// const values = coding.forEach((item)=>{
//     console.log(item);
// });// this is simple forEach loop implementation which are storing in values.

// console.log(values);//here this is returning the all data which are store in values after iteration of forEach loop
// //forEach dont return any value


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// we are going to use here filter and we give callback fuction in the filter
const newNums = myNums.filter ((num)=> {
    return num>5 // return keyword is necessary when
} )
// we use filter on the myNums array and give the callback function , and stote in to the newNums ..
// there is one differece btw filter and forEach --filter return some values.. but forEach return nothings

//agar same thing hame forEach me karna ho to..

console.log(newNums);