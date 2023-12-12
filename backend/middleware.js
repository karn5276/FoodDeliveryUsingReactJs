const { userSchema , userLoginSchema }=require("./schema");

module.exports.validateUser = (req,res,next)=>{
    let {error} = userSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el)=>el.message).join(",");
        return res.status(400).send({errors : errMsg});
    }
    else{
        next();
    }
}

module.exports.validateUserLogin = (req,res,next)=>{
    let {error} = userLoginSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el)=>el.message).join(",");
        return res.status(400).send({errors : errMsg});
    }
    else{
        next();
    }
}