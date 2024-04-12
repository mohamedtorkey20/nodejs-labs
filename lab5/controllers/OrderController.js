
let valid=require("../Utils/OrderValidation");

let ModelOrder=require("../Models/Order.Model");






let GetAllOrders= async(req,res)=>{

    let orders= await ModelOrder.find();
    return res.status(200).json({data:orders})
};



const GetOrderByID = async (req, res) => {
  
        const orderId = req.params.id;
        
        const getOrder = await ModelOrder.findOne({ _id: orderId });
        
        if (!getOrder) {
            return res.status(404).json({ error: "Order not found" });
        }
        
        return res.status(200).json({ getOrder });
   
};



let AddOrder=(req,res)=>{
    
    let newOrder=req.body;

    if(valid(newOrder))
    {
        
        let OrderObj=new ModelOrder(newOrder);

        OrderObj.save();
        
        return  res.status(201).json({data:newOrder})
    }else{

        return res.status(404).json({'Message':`${valid.errors[0].instancePath.split("/")[1]} ${valid.errors[0].message}`})

    }

};

let UpdateOrder=async(req, res) => {

  
    if (valid(req.body)) {

        orderId = req.params.id;
        updateData=req.body;

         const updateUser = await ModelOrder.findOneAndUpdate({ _id: orderId }, updateData, { new: true });
        
        if(updateUser)
        {
            return  res.status(200).send("Order updated successfully!");

        }
    
    }else{
        return res.status(404).json({'Message':`${valid.errors[0].instancePath.split("/")[1]} ${valid.errors[0].message}`})

    }

};


let DeleteOrder=async(req,res)=>{
    let orderId=req.params.id;

    const deleteOrder = await ModelOrder.findOneAndDelete({ _id: orderId });

    if(deleteOrder)
    {
        return  res.status(200).send("Order deleted successfully");

    }else{
        return  res.status(404).send("Order Not Exists");

    }
};



module.exports={
    GetAllOrders,
    GetOrderByID,
    AddOrder,
    UpdateOrder,
    DeleteOrder
}