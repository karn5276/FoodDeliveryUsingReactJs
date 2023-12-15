const mongoose=require("mongoose");


const orderSchema = new mongoose.Schema({
    
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
    date:{
        type:date,
        default:Date.now()
    },
    img:{
        type:String,
        required:true
    }

    
});

const Order=mongoose.model("Order",orderSchema);

module.exports=Order;