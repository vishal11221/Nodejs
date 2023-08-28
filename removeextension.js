const express = require('express')
const path    = require('path')
const app = express()

const publicPath = path.join(__dirname,'public')


app.get('',(req,res)=>{
    res.sendFile(`${publicPath}/index.html`)
})

app.get('/about',(req,res)=>{
    res.sendFile(`${publicPath}/about.html`)
})

app.get('/contact',(req,res)=>{
    res.sendFile(`${publicPath}/contact.html`)
})

app.get('*',(req,res)=>{
    res.sendFile(`${publicPath}/pagenotfound.html`)
})

app.listen(9000);