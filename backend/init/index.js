const mongoose =require("mongoose");
const database=require("../db");
const foodSchema=require("../models/food");
const categorySchema=require("../models/category");

const initdata=require("./data");

database.connect();

async function initDB(){
    await foodSchema.deleteMany({});
    await categorySchema.deleteMany({});

    await foodSchema.insertMany(initdata.data);
    await categorySchema.insertMany(initdata.data2);

    console.log("data was initialzed");
}

initDB();