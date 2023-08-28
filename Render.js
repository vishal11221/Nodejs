const express = require('express')
const app = express()

app.get('',(req,res)=>{
    res.send(`
    Welcome to home page <br>
    <a href="/about">Go to about page</a>
    `);
})

//Render html data
app.get('/about',(req,res)=>{
    res.send(`
               <input type='text' placeholder='Enter your name' value="${req.query.name}">
               <button>Click-Me</button> <br>
               <a href="/">Go to home page </a>
               
              `)
})

//Render json data
app.get('/contact',(req,res)=>{
    res.send([
        {
        name: 'vishal raj',
        Designation: 'Software-Engineer',
        contact: 8809739667
       },
       {
        name: 'kundan raj',
        Designation: 'Sales-Man',
        contact: 908070605544
       }
    ])
})

app.listen(7000);