const mongoose=require("mongoose");


let UserSchema= new mongoose.Schema({
    name:String,
    age:Number,
    address:String,
    email:String,
    password:String
})


module.exports=mongoose.model("user",UserSchema);

