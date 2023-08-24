/* How to Create a File in a particular folder and add text in it 
const fs = require('fs')
const path = require('path')

const dirpath = path.join(__dirname,'crud')
const filepath = `${dirpath}/apple.txt`;
fs.writeFileSync(filepath,"Successfully we added text in a particular file");
*/

/* How to read the text of file 
const fs = require('fs')
const path = require('path')

const dirpath = path.join(__dirname,'crud')
const filepath = `${dirpath}/apple.txt`;
fs.readFile(filepath,'utf-8',(err,item)=>{
    console.log(item);
})

*/

/* How to update the content of file 
const fs = require('fs')
const path = require('path')

const dirpath = path.join(__dirname,'crud')
const filepath = `${dirpath}/apple.txt`;
fs.appendFile(filepath,"Text updated successfully",(err)=>{
    if(!err){
        console.log('Your file updated Successfully');
    }
})

*/

/*How to rename the file 
const fs = require('fs')
const path = require('path')

const dirpath = path.join(__dirname,'crud')
const filepath = `${dirpath}/apple.txt`;

fs.rename(filepath,`${dirpath}/fruit.txt`,(err)=>{
    if(!err){
        console.log('Your apple.txt file change to fruit.txt')
    }
})

*/

// How to delete the particular file from particular directory 
const fs = require('fs')
const path = require('path')

const dirpath = path.join(__dirname,'crud')
const filepath = `${dirpath}/apple.txt`;
fs.unlinkSync(`${dirpath}/fruit.txt`)