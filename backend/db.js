const mongoose=require("mongoose");
require('dotenv').config();

async function main(){
    await mongoose.connect(process.env.ATLASDB_URL) 
    .then(()=>console.log("db connected"))
    .catch(()=>console.log("db not connected"));
}

module.exports=main;