const mongoose= require("mongoose");
const validator=require("validator");


mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api",{useUnifiedTopology: true, useCreateIndex:true});




const Task = mongoose.model("Task",{
    description:{
        type: String,
        trim: true,
        required: true
    },
    completed:{
        type: Boolean,
        default: false
    }
});



const task1 = new Task({description:"    contest", completed:true});

task1.save().then(()=>{
    console.log(task1);
}).catch((error)=>{
    console.log(error);
})