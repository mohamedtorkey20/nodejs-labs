
let valid=require("../Utils/ItemValidation");

let ModelItem=require("../Models/Item.Model");






let GetAllItems= async(req,res)=>{

    let Items= await ModelItem.find();
    return res.status(200).json({data:Items})
};



const GetItemByID = async (req, res) => {
 
        const ItemId = req.params.id;
        
        const getItem = await ModelItem.findOne({ _id: ItemId });
        
        if (!getItem) {
            return res.status(404).json({ error: "Item not found" });
        }
        
        return res.status(200).json({ getItem });
   

    }


let AddItem=(req,res)=>{
    
    let newItem=req.body;

    if(valid(newItem))
    {
        
        let ItemObj=new ModelItem(newItem);

        ItemObj.save();
        
        return  res.status(201).json({data:newItem})
    }else{

        return res.status(404).json({'Message':`${valid.errors[0].instancePath.split("/")[1]} ${valid.errors[0].message}`})

    }

};

let UpdateItem=async(req, res) => {

  
    if (valid(req.body)) {

        ItemId = req.params.id;
        updateData=req.body;

         const updateUser = await ModelItem.findOneAndUpdate({ _id: ItemId }, updateData, { new: true });
        
        if(updateUser)
        {
            return  res.status(200).send("Item updated successfully!");

        }
    
    }else{
        return res.status(404).json({'Message':`${valid.errors[0].instancePath.split("/")[1]} ${valid.errors[0].message}`})

    }

};


let DeleteItem=async(req,res)=>{
    let ItemId=req.params.id;

    const deleteUser = await ModelItem.findOneAndDelete({ _id: ItemId });

    if(deleteUser)
    {
        return  res.status(200).send("User deleted successfully");

    }else{
        return  res.status(404).send("User Not Exists");

    }
};



module.exports={
    GetAllItems,
    GetItemByID,
    AddItem,
    UpdateItem,
    DeleteItem
}