const mongoose=require("mongoose");


const cartSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },
    qauntity:{
        type:Number,
        required:true
    },
    option:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    totalprice:{
        type:Number,
        required:true
    },
    img:{
        type:String,
        required:true
    }

    
});

const Cart=mongoose.model("Cart",cartSchema);

module.exports=Cart;