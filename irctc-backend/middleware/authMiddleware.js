
const jwt =  require('jsonwebtoken');
const User = require('../models/user');


const auth = async (req,res,next) => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            token = req.headers.authorization.split(' ')[1];
            const decode = jwt.verify(token, "IRCTC_LOGIN_CREDENTIAL_SECRET");
            req.user = await User.findById(decode.id).select('-password');
            next();
        }
        catch(err)
        {
            return res.status(401).json({err : "Not Authorized, Wrong Token"});
        }
    }

    if(!token){
        return res.status(401).json({err : "Not Authorized, No Token Found"});
    }
}

module.exports = {auth};