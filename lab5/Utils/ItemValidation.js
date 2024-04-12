 
 
 const AJV=require("ajv");
 const ajv=new AJV();

 
 
 //#region  Schema
 let  itemSchema={
    type:"object",
    properties:{
        name:{type:"string"},
        price:{type:"number"},
        desc:{type:"string"}
    },
    required:['name','price','desc'],
    additionalProperties:false

}

module.exports=ajv.compile(itemSchema);

//#endregion Schema