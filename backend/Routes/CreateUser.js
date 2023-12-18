const express=require("express");
const router=express.Router();
const User=require("../models/user");
const { validateUser,validateUserLogin }=require("../middleware");

const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const jwtsecret = "aferohugeger4934734fgjkfgoafghgff";


router.post("/createuser",validateUser,async(req,res)=>{


    var salt = bcrypt.genSaltSync(10); // this is length of salt which we want to insert in the password.
    var secpassword = bcrypt.hashSync(req.body.password, salt);

    try{
        await User.create({
            name:  req.body.name || "sham" ,
            email: req.body.email || "sham123@gmail.com",
            password:  secpassword || "sham123",
            location:req.body.location || "pune maharastra"  
        });
        res.json({success:true});

    }
    catch(err){
        console.log(err);
        res.json({success:false});
    }
});


router.post("/login",validateUserLogin,async(req,res)=>{
    let email = req.body.email;
    try{
        const userData = await User.findOne({email});
        if(!userData){
            return res.status(400).json({error:"enter valid credentials"});
        }

        const pwdcompare=await bcrypt.compare(req.body.password,userData.password);

        if(!pwdcompare){
            return res.status(400).json({error:"enter valid credentials"});
        }

        const data = {
            user:{
                id:userData.id
            }
        }
        // const expiresIn='30';
        const authtoken = jwt.sign(data,jwtsecret, { expiresIn: 30 });
        return res.json({success:true,authtoken:authtoken,id:userData._id});


    }
    catch(err){

        res.json({success:false,message:"enter valid credentials"});

    }
})







module.exports=router;