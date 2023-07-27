const express=require('express');
const app=express();

//import the port 
require("dotenv").config();
const PORT=process.env.PORT||4000; 


//middleware for reading json
app.use(express.json());


//import routes for TODO API
const todoRoutes=require("./routes/todoroute");

//mount the todo API routes
app.use("/api/v1",todoRoutes);


app.listen(PORT ,()=>{
    console.log("SERVER started SUCCUSSFULLY");
})

//connect to database
const dbConnect=require("./config/database");
dbConnect();

//default route
app.get("/",(req,res)=>{
    res.send("<h1>HOME PG</h1>");
})