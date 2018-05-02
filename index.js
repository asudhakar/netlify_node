const express = require('express');
const app = express();

var welcome = require('./routes/welcome');
app.use('/mohan',welcome);


app.get('/',(req,res)=>{
    res.send('welcome');
})

app.get('/mohan',(req,res)=>{
    res.send('Welcome Mohan');
})


app.listen(3000);