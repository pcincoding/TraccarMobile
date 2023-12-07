const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
app.use(bodyParser.json());

const port = 3000;

require('./Connection');
require('./User');
const authroutes = require('./authRoute');
const webtoken = require('../Middlewares/Authtoken');

app.use(authroutes);


app.get("/",webtoken,(req,res)=>{
    res.send(req.User);
})

app.listen(port,()=>{
    console.log(`Server started at http://localhost:${port}`);
})