require('dotenv').config();
const express = require('express');
const app = express();
const port = 4000;

app.get('/',(req,resp)=>{
    resp.send("welcome")
});

app.get('/home', (req,resp)=>{
    resp.send("<h1>hello</h1>")
});

app.get('/about',(req,resp)=>{
    resp.send("About Page")
})

app.listen(process.env.PORT,()=>{
    console.log(`Port running ${port}`)
})
