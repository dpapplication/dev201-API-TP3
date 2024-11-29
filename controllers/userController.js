const User=require("../models/User")
const bcrypt=require("bcryptjs")
/***
 * 
 * @description creer un compte 
 * @router /user/register
 * @method POST
 */
module.exports.registerUser=async(req,res)=>{
    try {
        const {username,email,password}=req.body
        const userExist=await User.findOne({email})
        if(userExist)
            return res.status(400).json({message:`${email} is already exist`})
        const passwordHash=await bcrypt.hash(password,10)
        const newUser=await User.create({username,email,password:passwordHash})
        res.status(201).json(newUser)
    } catch (error) {
       res.status(500).json({message:error.message}) 
    }
}

/**
 * @description se connecter 
 * @router /user/login
 * @method POST
 */
module.exports.loginUser=async(req,res)=>{
    try {
        const {email,password}=req.body
        const userExist=await User.findOne({email})
        if(!userExist)
            return res.status(401).json({message :"email or password incorrect"})
        const isPassword=await bcrypt.compare(password,userExist.password)
        if(!isPassword)
            return res.status(401).json({message :"email or password incorrect"})
        res.status(200).json({message:"You welcome"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}