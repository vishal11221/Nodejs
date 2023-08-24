/* How to find the path of current directory
   const path = require('path')
   const dirPath = path.join(__dirname,'files');
   console.log(dirPath);
*/
/* How to create five files at a time in a particular folder
    const fs = require('fs')
    const path = require('path')
    const dirPath = path.join(__dirname,'files')

    for(var i=0; i<=5; i++){
      fs.writeFileSync(dirPath + "/hello" + i + ".txt", "A simple text file");
   }

*/

// How to know the files name of a particular directory 

const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname,'files')

fs.readdir(dirPath,(err,files)=>{
     files.forEach((item)=>{
        console.log(item);
     })
})