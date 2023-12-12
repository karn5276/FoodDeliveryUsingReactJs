const express=require("express");
const router=express.Router();
const User=require("../models/user");
const { validateUser,validateUserLogin }=require("../middleware");


router.post("/createuser",validateUser,async(req,res)=>{
    console.log(req.body);
    try{
        await User.create({
            name:  req.body.name || "sham" ,
            email: req.body.email || "sham123@gmail.com",
            password:  req.body.password || "sham123",
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

        if(req.body.password!==userData.password){
            return res.status(400).json({error:"enter valid credentials"});
        }

        res.json({success:true})

    }
    catch(err){

        res.json({success:false,message:"enter valid credentials"});

    }
})


module.exports=router;