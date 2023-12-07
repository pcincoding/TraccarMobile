require('dotenv').config();
const mongoose = require('mongoose');
const Dbtable = "traccartable";
const url = `${process.env.mongoURI}/${Dbtable}`;
const connectDb = async() =>{
    try {
        const conn = await mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true});
        if(conn){
            console.log("Connected Successfully");
        }
    } catch (error) {
      console.log("MongoDb error",error);
      process.exit(1);  
    }
}
connectDb();