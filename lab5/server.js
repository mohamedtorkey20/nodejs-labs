const express=require('express');
const mongoose=require("mongoose");
const app=express();
const bodyParser = require("body-parser");
let orderRoutes=require("./Routes/OrderRoutes");
let itemRoutes=require("./Routes/ItemRoutes");
let userRoutes=require("./Routes/UserRoutes");


mongoose.connect("mongodb://localhost:27017/OrderItems")
const PORT=process.env.PORT||5004;
const AJV=require("ajv");
const ajv=new AJV();





 //#region MiddleWare
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//#endregion




app.use("/api/Orders",orderRoutes)
app.use("/api/Items",itemRoutes)
app.use("/api/Users",userRoutes)





app.listen(PORT,()=>
{
    console.log(`http://localhost:${PORT}`);
})