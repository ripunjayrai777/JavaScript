//Going to Introduce filter Method..................

// const coding = ["js", "py", "cpp", "java", "ruby"];

// const values = coding.forEach((item)=>{
//     console.log(item);
// });// this is simple forEach loop implementation which are storing in values.

// console.log(values);//here this is returning the all data which are store in values after iteration of forEach loop
// //forEach dont return any value esliye  undefined return kar dega


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// we are going to use here filter operation and we give callback fuction in the filter
const newNums = myNums.filter ((num)=> {
    return num>5 // return keyword is necessary when
} )
// we use filter on the myNums array and give the callback function , and stote in to the newNums ..
// there is one differece btw filter and forEach --filter return some values.. but forEach return nothings

//agar same thing hame forEach me karna ho to..

const newNums2 = []

myNums.forEach( (num)=> {
    if(num>6){
        newNums2.push(num)
    }
})
// console.log(newNums);
// console.log(newNums2);

const books =[
    {title: 'book1', genre: 'fiction', publish: '1981', edition: '2004'},
    {title: 'book2', genre: 'fiction', publish: '1984', edition: '2007'}, 
    {title: 'book3', genre: 'history', publish: '1985', edition: '2005'}, 
    {title: 'book4', genre: 'fiction', publish: '1980', edition: '2002'}, 
    {title: 'book5', genre: 'history', publish: '1983', edition: '2005'}, 
    {title: 'book6', genre: 'fiction', publish: '1989', edition: '2008'},
];

const userBooks = books.filter((bk)=> bk.genre ==='history'); //here we are printing books which genre are 'history' using filter on books array...
// console.log(userBooks);

const userBooks2 = books.filter((bk)=> bk.publish >= 1984); //here we are printing those books which publish after the 1984 using filter on books array...
// console.log(userBooks2)

const userBook3 = books.filter ((bk)=> bk.genre ==="fiction" && bk.publish >= 1984);
console.log(userBook3);


// we put conditions for iterations in callback functions while using filter
