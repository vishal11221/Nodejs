const express = require('express')
const app = express()

app.get('',(req,res)=>{
    console.log('Data receive from browser is:-', req.query.name);
    res.send('Welcome' + req.query.name);
})

app.listen(6000);