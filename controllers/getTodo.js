//import the model
const Todo = require("../models/Todo");



//define route handler

exports.getTodo=async(req,res)=>{
    try{
        //fetch all todo items
         const todo=await Todo.find({});

         //response update
         res.status(200)
         .json({
            success:true,
            data:todo,
            message:"entire data is fetched"
         });
    }
    catch(err){
       console.error(err),
       console.log(err),
       res.status(500)
       .json({
        success:false,
        error:err.message,
        message:'Server error'
       });
    }
}

exports.getTodoById=async(req,res)=>{
    try{
        //extract data on basis of ID
        const id=req.params.id;
        const todo=await Todo.findById({_id:id})

        //given Id ka data nhi mila
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No data found"
            });
        }
        //data mila
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data successfully fetched`,
        })

    }
    catch(err){
        console.error(err),
        console.log(err),
        res.status(500)
       .json({
        success:false,
        error:err.message,
        message:'Server error'
       });
    }
}