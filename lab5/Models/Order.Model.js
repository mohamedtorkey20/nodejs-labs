
// let Orders=[];
// class Order{


//     constructor(ord)
//     {
//         this.totalPrice=ord.totalPrice;
//         this.order=ord.order;
//     }

//      static find()
//     {
//         return Orders;
//     }

//     save()
//     {
//         Orders.push(this)
//     }
// }


// module.exports=Order;



const mongoose=require("mongoose");



let orderSchema= new mongoose.Schema({
    totalPrice:Number,
    order:[{ type: Number }]

})


module.exports=mongoose.model("order",orderSchema)