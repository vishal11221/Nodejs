const express = require('express')
const app = express();

const reqFilter=(req,resp,next)=>{
   if(!req.query.age){
      resp.send("Please provide age")
   }else if(req.query.age<18){
       resp.send("You cannot access the page")
   }
   else{
          next();
   } 
} 

app.use(reqFilter)

app.get("/",(req,resp)=>{
    resp.send('Welcome to the Home page')
})

app.get("/users",(req,resp)=>{
    resp.send('Welcome to the User page')
})

app.listen(5000)