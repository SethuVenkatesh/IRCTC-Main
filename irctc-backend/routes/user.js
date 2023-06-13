const express=require('express')
var router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const {auth} = require('../middleware/authMiddleware')

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

router.post("/login", async function(req,res) {
    const {email, password} = req.body;
    const user = await User.findOne({email});

    if(user && (await bcrypt.compare(password, user.password))){
        return res.status(201).json({
            id : user._id,
            name : user.name,
            email : user.email,
            token : generateToken(user._id),
            status : "Login Successfully"
        });
    }else{
        return res.status(404).json({msg : "Invalid User Data"});
    }

})


const generateToken = (id) =>{
    return jwt.sign({id}, "IRCTC_LOGIN_CREDENTIAL_SECRET", { expiresIn : '300s'})
}
  

router.get("/show",auth, async function(req,res) {
    const {_id,name,email} = await User.findById(req.user.id);
    return res.status(200).json({_id,name,email});
})


module.exports = router;
