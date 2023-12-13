const express=require("express");
const app=express();
const dbmain=require("./db");
const cors=require("cors");
const food=require("./models/food");
const foodCat=require('./models/category');
port=2000;



app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:2000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept"
    );
    next();
})


app.use(cors());
app.use(express.json());
app.use("/api",require("./Routes/CreateUser"));
dbmain();

app.get("/",async(req,res)=>{
    const data=await food.find({});
    res.send(data);
});
app.get("/foodcat",async(req,res)=>{
    const data=await foodCat.find({});
    res.send(data);
});

app.listen(port,()=>{
    console.log(`app is listing on port ${port}`);
});
