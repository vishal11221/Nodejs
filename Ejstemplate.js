const express = require('express')
const path = require('path')
const app = express()

const viewPath = path.join(__dirname,'views')

app.set('view engine', 'ejs')

app.get('/profile',(req,res)=>{
    const user = {
        name: 'Vishal Raj',
        course: 'MCA',
        roll: 78,
        contact: 8809739667,
        skills: ['HTML','CSS','BOOTSTRAP','JAVASCRIPT','ANGULAR','NODEJS','MYSQL']
    }
    res.render(`${viewPath}/profile.ejs`,{user})
})

app.get('/login',(req,res)=>{

    res.render(`${viewPath}/login.ejs`)

})

app.listen(2000);