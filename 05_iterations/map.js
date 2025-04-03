//Going to Introduce map Method..................

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];// we want to add 10 in each element of array..
//single map useing
const addNum = myNumbers.map((num)=> num+10 );

// we are going to use chain of map , after using of multiple map we can use filter also..
const newNums = myNumbers.map((num)=> num*10).map((num)=> num+1).filter((num)=> num>=40);

console.log(addNum);
console.log(newNums);




