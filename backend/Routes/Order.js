const express=require("express");
const router=express.Router();
const orderSchema=require("../models/Order");




router.post("/orders",async(req,res)=>{
    // console.log(req.body);
    const exitUser=await orderSchema.findOne({email:req.body.email});

    if(exitUser){
        for(const item of req.body.data){
            exitUser.data.push(item);

        }
        await exitUser.save();
    }
    else{

        await orderSchema.insertMany(req.body);
    }


});

router.post("/getorder",async(req,res)=>{
    try{

        const userorder=await orderSchema.find({email:req.body.email});
        // console.log("after finding user data ==> ",userorder[0].data);
        if(userorder){
            
            res.send({success:true,data:userorder[0].data});
        }
        else{
            res.send({success:false,message:"No Orders"});
        }
    }
    catch(err){
        res.send({success:false,message:"data send failed"});
    }
    

})
module.exports=router;