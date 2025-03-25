// loop on Object... for-in loop

const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
        // console.log(key)
        console.log(`${key} shortcut for ${myObject[key]}`)
}


// loop on array ... for-in loop

const programming =["js","rb","py","java","cpp"];
for (const key in programming) {
    // console.log(key); // we get only index number of array (programming) from key
    console.log(programming[key]); // this will return the array elements of programming
}