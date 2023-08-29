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
        contact: 8809739667
    }
    res.render(`${viewPath}/profile.ejs`,{user})
})

app.listen(2000);