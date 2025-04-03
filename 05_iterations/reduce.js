//Going to Introduce reduce Method..................
//Defination: The reduce() method executes as a user-supplied "reducer" callback fuction on each element of the array, in order , passing in the returen value form the calculation of preceding elements...

//example---
const array1 =[1, 2, 3, 4, 5];
//0+1+2+3+4+5
const sumTotal = array1.reduce((accumulator, currentValue)=> {
    console.log(`acc: ${accumulator} and currentValue: ${currentValue}`)
    return accumulator+currentValue;

},0);

console.log(sumTotal);
//Expected output : 15


//example 2---

const shoppingCart = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "py course",
        price: 799
    },
    {
        itemName: "java course",
        price: 1999
    },
    {
        itemName: "html course",
        price: 99
    },
];

const addPrice = shoppingCart.reduce((acc, item)=> acc + item.price, 0 );
console.log(addPrice);