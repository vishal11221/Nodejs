const express = require('express')
const app = express()

app.get('',(req,res)=>{
    console.log('Data receive from browser is:-', req.query.name);
    res.send('Welcome' + req.query.name);
})

app.get('/about',(req,res)=>{
    res.send('Welcome to about page')
})

app.get('/contact',(req,res)=>{
    res.send('Welcome to contact page')
})

app.listen(5000);