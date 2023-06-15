const express=require('express')
var router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const {auth} = require('../middleware/authMiddleware');
const { route } = require('./trains');


router.post("/username_availablity",async function(req,res){
    const userName=req.body.userName;
    const userExists = await User.findOne({userName});
    if(userExists){
       return res.status(200).send("username is not available")
    }else{
       return res.status(200).send("")
    }
})

router.post("/phonenumber_availablity",async function(req,res){
    const phoneNumber=req.body.phoneNumber;
    const userExists = await User.findOne({phoneNumber});
    if(userExists){
       return res.status(200).send("phone number is already regsitered")
    }else{
       return res.status(200).send("")
    }
})

router.post("/email_availablity",async function(req,res){
    const email=req.body.email;
    const userExists = await User.findOne({email});
    if(userExists){
       return res.status(200).send("email is already regsitered")
    }else{
       return res.status(200).send("")
    }
})


router.post("/register", async function(req,res){
    const registerDetails=req.body.userDetails;
    console.log(req.body)
    const {email,password}=registerDetails
    const userExists = await User.findOne({email});
    if(userExists)
    {
        return res.status(400).json({err : "User Already Exists"});
    }
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);
    registerDetails["password"]=encryptedPassword
    
    const user = await User.create(registerDetails)
    return res.status(201).send("user created successfully")


})

router.post("/details",async function(req,res){
    const {userName}=req.body.forgotDetails
    const user=await User.findOne({userName})
    if(user){
        res.status(200).send(user)
    }
    else{
        res.status(200).send("user name is not valid")
    }
})

router.post("/login", async function(req,res) {
    const {userName, password} = req.body.loginData;
    const user = await User.findOne({userName});

    if(user && (await bcrypt.compare(password, user.password))){
        return res.status(201).json({
            user,
            token : generateToken(user._id),
            status : "Login Successfully"
        });
    }else{
        return res.status(201).send({msg : "Invalid User Data"});
    }

})

router.post("/update",async function(req,res){
    const {password,userId}=req.body.forgotDetails;
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);
    const updatedDonor=await User.findByIdAndUpdate(
        userId,
        {password:encryptedPassword},
        {new: true},
    );
    return res.status(200).send("Password updated successfully")
})


const generateToken = (id) =>{
    return jwt.sign({id}, "IRCTC_LOGIN_CREDENTIAL_SECRET", { expiresIn : '300s'})
}
  

router.get("/show",auth, async function(req,res) {
    const {_id,name,email} = await User.findById(req.user.id);
    return res.status(200).json({_id,name,email});
})


module.exports = router;
