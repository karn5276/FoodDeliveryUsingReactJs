const mongoose=require("mongoose");


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    cart:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Cart"
        }
    ],
    order:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Order"
        }
    ]
});

const User=mongoose.model("User",userSchema);

module.exports=User;