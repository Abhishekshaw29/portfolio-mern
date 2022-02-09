const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticate = require('../middleware/authenticate');
const cookies = require('cookie-parser');
router.use(cookies());


//connection
require('../db/conn');

//userschema
const User = require('../model/userSchema');

// register
router.post('/register', async (req, res) => {

    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "please fillup all the fields" });
    }

    try {


        const userExist1 = await User.findOne({ email: email });
        const userExist2 = await User.findOne({ phone: phone });

        if (userExist1) {
            return res.status(422).json({ error: " Email already Exist" });
        }
        if (userExist2) {
            return res.status(422).json({ error: "phone number Exist" });
        }
        if (password != cpassword) {
            return res.status(422).json({ error: "password are not matching" });
        }
        const user = new User({ name, email, phone, work, password, cpassword });
        //pre
        await user.save();
        res.status(201).json({ message: "user succcesfully registered" });
    } catch (err) {
        console.log(err);
    }
});

//sign in 
router.post('/signin', async (req, res) => {
    try {

        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Please fill the details" });
        }

        const userLogin = await User.findOne({ email: email });
        // console.log(userLogin);
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);
            if (!isMatch) {
                res.status(400).json({ message: "Invalid credintails" });
            }
            else {
                const token = await userLogin.generateAuthToken();
                res.cookie("jwtoken",token,{
                  expires: new Date(Date.now() + 2589200000),
                  httpOnly: true 
                });
                res.status(201).json({ message: "logged in succesfully" });

                
            }
        }
        else {
            res.status(400).json({ message: "Invalid credintials" });
        }

    } catch (err) {
        console.log(err);
    }


});

//logout

router.get("/logout",(req, res) => {
    res.clearCookie('jwtoken',{
        path:'/'
    });
    res.status(200).send("Logged out Succesfully ");
    console.log("hello my logout");
});


//getdata for homepage and contact page

router.get("/getdata",authenticate, (req, res) => {
    res.send(req.rootUser);
    console.log("hello get your data");
});

router.post("/message",authenticate,async (req,res) =>{
    try {
            const message = req.body.messages;
            if(!message){
                return res.status(400).json({message:"Please fill the contact form"});
            }
            const usercontact  = await User.findOne({ _id : req.userID });
            if(usercontact){
            await  usercontact.addMessage(message);
              await usercontact.save();
              return res.status(201).json({message:"Message Sent"})
            }
            else{
                return res.status(400).json({message:"Message not sent, Try again"});
            }

    } catch (error) {
        console.log(error);
    }
});

module.exports = router;