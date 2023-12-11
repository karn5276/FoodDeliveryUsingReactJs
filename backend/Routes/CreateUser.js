const express=require("express");
const router=express.Router();
const User=require("../models/user");


router.post("/createuser",async(req,res)=>{
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
})


module.exports=router;