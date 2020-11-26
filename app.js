const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// USED TO PARSE REQUEST BODY
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// mongoose.connect("DATABASE URL",{
//         useNewUrlParser: true,
//         useCreateIndex: true,
//         useUnifiedTopology: true
//     });

console.log("connected to database")

const weatherRoute=require('./routes/weather');
const apiRouter = require('./routes/apis');

app.set("view engine", "ejs");


app.get('/', weatherRoute);
app.use('/api', apiRouter);

const port=process.env.port || 3000;
app.listen(port, ()=>{
    console.log(`Server is listening in ${port}`);
})