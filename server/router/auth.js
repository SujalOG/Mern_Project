const jwt = require('jsonwebtoken')
const express = require('express');
const bcrypt = require('bcryptjs');
const authenticate = require("../middleware/Authenticate");
const router = express.Router();
const cookieParser = require("cookie-parser");

router.use(cookieParser());

require('../db/conn');
const User = require('../models/userSchema')

router.get('/', (req, res) => {
    res.send('Hello world from server router');
});

// register route

router.post('/register', async (req,res) => {
    
    const { name, email, phone, work, password, cpassword} = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error: "Please Fillup the Field Properly"});
    }

    try{
        const userExist = await User.findOne({email:email})
        if(userExist) {
          return res.status(422).json({error: "Email Already Exist!"});
        }else if(password != cpassword){
          return res.status(422).json({error: "password not matching!"});
        }else{
          const user = new User({ name, email, phone, work, password, cpassword });

        

          await user.save();
  
          res.status(201).json({ message : "user registered successfully"})
  
        }
       
    } catch (err){
        console.log(err);
    }


}) 

// login route

router.post('/signin', async (req,res) => {
    
    try{
        let token;
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "plz filled the data" });
        }
      
        const userlogin = await User.findOne({ email: email });
        
        if(userlogin){

          const isMatch = await bcrypt.compare(password, userlogin.password)

          token = await userlogin.generateAuthToken();

          res.cookie("jwtoken",token, {
            expires:new Date(Date.now()+25892000000),
            httpOnly:true
          });

          if(!isMatch){
            res.status(400).json({error : "Invalid Credientials"});
          }else{
            res.json({message : "User Signin Successfully"})
          }
        }else{
          res.status(400).json({error : "Invalid Credientials"});
        }
      
          // res.send("I am here to check login");
      } catch (error) {
          console.log(error);
        }

});

// About us Page

router.get('/about',authenticate,(req,res) => {
  // console.log('Hello my About');
  res.send(req.rootUser);
});

router.get('/getdata',authenticate,(req,res) => {
  // console.log('Hello my About');
  res.send(req.rootUser);
});

// Logout Page

router.get('/logout',(req,res) => {
  res.clearCookie('jwtoken',{path:'/'})
  res.status(200).send("User Logout");
  // console.log('Hello Logout');
});

module.exports = router;
