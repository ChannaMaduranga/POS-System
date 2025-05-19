
const createHttpError = require("http-errors");
const config = require("../config/config");
const User = require("../models/userModel");

const isVerifiedUser = async(req, res, next) =>{
    try{
        const {accessToken} = req.cookies;

        if(!accessToken){
            const error = createHttpError(401, "Please provide token!");
            return next(error);
        }

        const decodeToken = jwt.verify(acccessToken, config.acccessTokenSecret);

        const user = await User.findById(decodeToken._id);
        if(!user){
            const error = createHttpError(401, "User not exist!");
            return next(error);
        }
        req.user = user;
        next();
    }
    catch(error){
        next(error);
    }
}

module.exports= {isVerifiedUser};