const fs = require('fs')
const path = require('path')

const dirpath = path.join(__dirname,'crud')
const filepath = `${dirpath}/apple.txt`;
fs.writeFileSync(filepath,"Successfully we added text in a particular file");