const mongoose=require("mongoose");


const foodSchema = new mongoose.Schema({
    categoryName:String,
    name:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    options:{
        half:String,
        full:String
    },
    description:{
        type:String,
        required:true
    }
    
});

const Food=mongoose.model("Food",foodSchema);

module.exports=Food;