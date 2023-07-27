const mongoose=require('mongoose');

require("dotenv").config();


const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        //useNewUnifiedTopology:true,
    })
    .then(()=>console.log("connection Success"))
    .catch((error)=>{
        console.log("issue in DB Connection");
        console.error(error.message);

        //pending samjana.
        process.exit(1);
    });
}

module.exports=dbConnect;