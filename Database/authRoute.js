const express = require('express');
const router = express.Router();
const User = require('./User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
require('dotenv').config();


//nodemailer

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: "chaudharypras434@gmail.com",
        pass: "rtkt ofvn vpxq vrwy"
    }
})
async function main(receiveradd, code) {
    await transporter.sendMail({
        from: 'chaudharypras434@gmail.com',
        to: `${receiveradd}`,
        subject: "Msg from Telemko and Co.",
        text: `Your Verification code is: ${code}`,
        html: `<html><body><b>Your Verification Code is: ${code} </b></body></html>`
    });
}
router.post('/reset', async (req,res)=>{
    const {email} = req.body;
    const savedUser = await User.findOne({email: email});
    if(!savedUser){
        return res.status(422).json({error:'Email not registered'});
    }
    try{
        let verificationCode = Math.floor(100000 + Math.random()*900000);
        let email = savedUser.email;
        await main(email, verificationCode);
        res.send({ message: "Verification code sent to your email", userdata: email, verify: verificationCode });
    }
    catch(err){
        console.log("Error :"+err.message);
    }
})
router.post('/resetpassword', async (req,res)=>{
    const {useremail, rpassword} = req.body;
    const hashedpass =  await bcrypt.hash(rpassword, 8);
    const users = await User.findOne({email: useremail});
    await User.findByIdAndUpdate({_id: users._id}, {password: hashedpass});
    res.send({message: "Your password reset successfully"})
})

router.post('/verify', (req, res) => {
    const { name, email, password, cpassword } = req.body;

    if (!name || !email || !password || !cpassword) {
        return res.status(422).send({ error: "Please fill in all the fields" });
    }
    User.findOne({ email: email })
        .then(async (savedUser) => {
            if (savedUser) {
                return res.status(422).send({ error: "Invalid Credentials" });
            }
            try {
                let verificationCode = Math.floor(100000 + Math.random() * 900000);
                let user = [{
                    name,
                    email,
                    password,
                    verificationCode
                }]
                await main(email, verificationCode);
                res.send({ message: "Verification code sent to your email", userdata: user });
            }
            catch (err) {
                console.log(err.message);
            }
        })
})

router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
            const user = new User({
                name,
                email,
                password
            })
            try {
                await user.save();
                const token = jwt.sign({ _id: user._id }, process.env.jwt_secret);
                res.send({message:'User registered successfully',token });
            }
            catch (err) {
                return res.status(422).send({ error: err.message });
            }
        })

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const saveduser = await User.findOne({ email: email });
    if (!saveduser) {
        return res.status(422).json({ error: "Invalid Credentials" });
    }
    try {
        bcrypt.compare(password, saveduser.password, (err, result) => {
            if (result) {
                console.log("Your login is successful");
                const token = jwt.sign({ _id: saveduser._id }, process.env.jwt_secret, {expiresIn: 10});
                return res.send({message:'Login successful' ,token });
            }
            else {
                return res.status(422).json({ error: "Invalid Credentials" });
            }
        })
    }
    catch (err) {
        console.log("error msg is", err);
    }
})


module.exports = router;