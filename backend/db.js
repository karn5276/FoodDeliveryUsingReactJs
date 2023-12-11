const mongoose=require("mongoose");

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/GoFood')
    .then(()=>console.log("db connected"))
    .catch(()=>console.log("db not connected"));
}

module.exports=main;