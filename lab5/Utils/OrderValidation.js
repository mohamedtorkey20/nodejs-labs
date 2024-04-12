 
 
 const AJV=require("ajv");
 const ajv=new AJV();

 
 
 //#region  Schema
 let  orderSchema={
    type:"object",
    properties:{
        totalPrice:{type:"integer"},
        order:{"type":"array",'items':{type:"integer"}}
    },
    required:['totalPrice','order'],
    additionalProperties:false

}

module.exports=ajv.compile(orderSchema);

//#endregion Schema