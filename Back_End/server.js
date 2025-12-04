const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const cors = require('cors');
const sendMailer = require('./controllers/sendMail');
require("dotenv").config();
app.use(cors());

app.use(express.json());

const PORT = 5000;

app.get("/",(req,res)=>{
    res.send("server is runing")
});

app.post("/mail",sendMailer);

const start = async()=>{
    try {
        app.listen(PORT,()=>{
            console.log("live");
            
        })
    } catch (error) {
        console.log(error);
        
        
    }
}

start();