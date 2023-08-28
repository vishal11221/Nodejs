const express = require('express')
const app = express()

app.get('',(req,res)=>{
    res.send('Welcome to Home page');
})

app.get('/about',(req,res)=>{
    res.send('Welcome to about page')
})

app.get('/contact',(req,res)=>{
    res.send('Welcome to contact page')
})

app.listen(5000);