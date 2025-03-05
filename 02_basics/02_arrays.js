const marvel_heros = ["ironman", " thor ", "spiderman"]; // we are creating here simply array named marvel_heros
const dc_heros = ["superman", "flash", "batman"]; // We are creating here simply array named dc_heros.

//what if we push the dc_heros in marvel_heros let see..
// marvel_heros.push(dc_heros); // here dc_heros whole array is push into the marvel_heros array as a element because in array in JS take multiple types of element in array
// console.log(marvel_heros); //output will be: [ 'ironman', ' thor ', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

//If we want to push the single array element in other array..
// marvel_heros.push(dc_heros[0]); // here we push the array element from dc_heros of index 0 in the marvel_heros,. we give more number of indexes here.like this..
// marvel_heros.push(dc_heros[0], dc_heros[2]); //this will add[ 'ironman', ' thor ', 'spiderman', 'superman', 'batman' ]
// console.log(marvel_heros); // output will be : [ 'ironman', ' thor ', 'spiderman', 'superman' ]

const all_heros = marvel_heros.concat(dc_heros); //this will return the new arrays, which stored in all_heros //

console.log(all_heros);

//how to spread the arrays....
const all_new_heros = [...marvel_heros, ...dc_heros]; // this will the also done the same work and spread all the arrays element in one array.  We mainly prefer to do spread method for merge the all array instead of concat method.
console.log(all_new_heros); // the output will be: [ 'ironman', ' thor ', 'spiderman', 'superman', 'flash', 'batman' ]

const anothere_array = [1, 2, 3, [4, 5], 6, [7, 8, [4, 5]], 2, 3]; // this is an array ,if we want to concat in the only one single array then...
const real_another_array = anothere_array.flat(Infinity); // we use flat method for do all in only one array and here infinity is the depth of the array at which level to solve the array in plane
console.log(real_another_array); //the output will : [1,2,3,4,5,6,7,8,4,5,2,3]

const real2_another_array = anothere_array.flat(1); //here we use depth is 1 , so he array will arrange at level one or depth one, if we use depth as Infinity then all arrays will spread into a single array
console.log(real2_another_array); // the output will : [ 1, 2, 3, 4, 5, 6, 7, 8, [ 4, 5 ], 2, 3 ]

console.log(Array.isArray("Ripunjay")); //this is asking a question that "Ripunjay" is Array or not .if yes then console print true otherwise print false.
console.log(Array.from("Ripunjay")); //this will convert this "Ripunjay" String in to the Array and print :['R','i','p','u','n','j','a','y']
console.log(Array.from({ name: "ripunjay" })); //this will not covert in to the array because we would provide exact which data will will covert in to the array then this will print and empty array like this: []

let score1 = 100;
let score2 = 100;
let score3 = 100;
console.log(Array.of(score1, score2, score3)); // this will convert in to array of all score1, score2, score3
