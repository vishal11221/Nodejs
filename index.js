// const app = require('./app');
//Note:- double(==) equal to only check the value but triple equal to (===) to check value as well as datatypes

 var age = '18';

if(age===18){
    console.log('Value match');
}else{
    console.log('Value not match');
}



/*loop example:-  
for(var i=0; i<=10; i++){
    console.log(i);
}
*/

/* const arr = [1,30,'vishal','Raj',100];
console.log(arr);
console.log(arr[1]);
console.log(arr[1,2]);
console.log(arr[1,4]);
*/

/*console.log(app.x);
console.log(app.y);
console.log(app.z());
*/

/*Write a program to filter the value of array that is more than and equal to 4 

const arr2 = [1,7,5,9,0,5,20];

const result = arr2.filter((item)=>{
    return item>=4;
})

console.log(result);
*/

/*How to create a file with module
  
const fs = require('fs');
fs.writeFileSync('hello.text','welcome to your new file');
*/

/* How to know the directory name 
const fs = require('fs');
console.log('This is your directory name', __dirname);
*/

/* How to know the file name
const fs = require('fs');
console.log('This is your current file', __filename);
*/

