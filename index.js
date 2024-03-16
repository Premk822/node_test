require('dotenv').config();
const express = require('express');
const app = express();
const port = 4000;

const data ={
    "name":"Prem",
    "email":"prem.kumar@ens.enterprises",
    "phone":976543210,
    "pincode":201301,
    "address":"noida"
}

app.get('/',(req,resp)=>{
    resp.send("welcome")
});

app.get('/home', (req,resp)=>{
    resp.send("<h1>hello</h1>")
});

app.get('/about',(req,resp)=>{
    resp.send("About Page")
})

app.get('/details',(req,resp)=>{
    resp.json(data);
})

app.listen(process.env.PORT,()=>{
    console.log(`Port running ${port}`)
})
