const express=require("express");
const app=express();
const dbmain=require("./db");
port=5000;


app.use(express.json());
app.use("/api",require("./Routes/CreateUser"));
dbmain();

app.get("/",(req,res)=>{
    res.send("hello");
});

app.listen(port,()=>{
    console.log(`app is listing on port ${port}`);
});
