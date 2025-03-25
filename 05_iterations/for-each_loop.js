//for-each loop--
const coding = ["js", "py", "cpp", "java", "ruby"];

coding.forEach(function(items){
    console.log(items)
});// this will simply print the all element of array(coding)

coding.forEach( (val)=> {
    console.log(val);
} );// here we did previous things as defining arrow function


function printMe(grp){
    console.log(grp);
}// first we define the function and then put it in forEach loop
coding.forEach(printMe)  //give here only refrence of function , do not execute here..



coding.forEach((item, index, arr)=>{
    console.log(item, index, arr);
}) //this print all details which are consist in forEach

const myCoding =[
    {
        languageName: "javascript",
        languageFileName:"js"
    },
    {
        languageName: "java",
        languageFileName:"java"
    },
    {
        languageName: "python",
        languageFileName:"python"
    },
];
myCoding.forEach( (val)=>{
    console.log(val.languageName);// now here we can easily access myCoding element. here we are accessing languageName/
} ); // this will print languageName which is stored in myCoding array as a objects