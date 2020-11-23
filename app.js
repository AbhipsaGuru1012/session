const express=require('express');
const app=express();
const weatherRoute=require('./routes/weather');

app.set("view engine", "ejs");


app.get('/', weatherRoute);

const port=process.env.port || 3000;
app.listen(port, ()=>{
    console.log(`Server is listening in ${port}`);
})