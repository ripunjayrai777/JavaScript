//for-of loop:
// mainly we implement of this  "for-of loop" in array like ....

//["", "", "",""]
//[{}, {}, {}]

// for (const iterator of object) {
    
// }// this is base code of for-of loop

//ex-
const arr = [1,2,3,4,5];
for (const num of arr) {// esme ek variable num  laga h aur arr par lagaya gya hai baki kaam apne aap hoga.. 
    console.log(`This is iteration of ${num}`)
}//here no condition is needed , yaha pe for-of loop ka use arr ke liya huva hai means arr ke sabhi element iterate honge...


// Ex--
const greetings = "Good Night";
for (const greet of greetings) { // here we declare a variable greet and for-of loop if applied on greetings
    console.log(`Each char is : ${greet}`)
}

//Maps: the Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive value) may be used as either a key or a value. duplication is not allowed in map objects.. 

const map = new Map();
map.set("IN", "India");
map.set("US", "United State");
map.set("NP", "Nepal");
map.set("FR", "France");
map.set("IN", "India"); // HEre is duplicate.. but in the output this will not show.. 
map.set("USA", "United States of America");
map.set("PAK", "Pakistan");
// order in maintende in map object
// console.log(map) 
//for-in loop is not valid for map objects or we can say it is not iteratable.

for (const [key, value] of map) {
    console.log(key, ":-", value)
    
}// for-of loop on the map object... how to acces the key and value of map objects

//Ex--

const myObj = {
    "game1": 'NFS',
    'game2': 'spiderman'
}
for (const [key, value] of myObj) {
    console.log(key," :-", value)
}// this will return the error - this is not iteratable like this 

