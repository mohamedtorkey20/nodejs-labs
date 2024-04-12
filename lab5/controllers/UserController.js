let valid=require("../Utils/UserValidation");
let userModel=require("../Models/User.Model");
const bcrypt = require("bcrypt");




let GetAllUsers= async(req,res)=>{

    let Users= await userModel.find();
    return res.status(200).json({data:Users})
};



const GetUserByEmail = async (req, res) => {
    
        const userEmail = req.params.id.toLowerCase();
        
        let foundUser = await userModel.findOne({email:userEmail});
        
        if (!foundUser) {
            return res.status(404).json({ error: "user not found" });
        }
        
        return res.status(200).json({ foundUser });
   
};


let UpdateUser=async(req, res) => {

  
    if (valid(req.body)) {

        userEmail = req.params.id.toLowerCase();

        const salt=await  bcrypt.genSalt(10);
        let HashPassword= await bcrypt.hash(req.body.password,salt);
        req.body.password=HashPassword;
        req.body.email=userEmail;

        updateData=req.body;

         const updateUser = await userModel.findOneAndUpdate({email: userEmail}, updateData, { new: true });
        
        if(updateUser)
        {
            return  res.status(200).send("User updated successfully!");

        }
    
    }else{
        return res.status(404).json({'Message':`${valid.errors[0].instancePath.split("/")[1]} ${valid.errors[0].message}`})

    }

};

let DeleteUser=async(req,res)=>{
    let userEmail=req.params.id.toLowerCase();

    const deleteUser = await userModel.findOneAndDelete({email:userEmail});

    if(deleteUser)
    {
        return  res.status(200).send("User deleted successfully");

    }else{
        return  res.status(404).send("User Not Exists");

    }
};




let Register=async (req,res)=>{

    if(valid(req.body)){


        let foundUser = await userModel.findOne({email:req.body.email.toLowerCase()});

        
        if(foundUser) return res.send("User Already Exist, Please Login");

        const salt=await  bcrypt.genSalt(10);
        let HashPassword= await bcrypt.hash(req.body.password,salt);
        req.body.password=HashPassword;
        req.body.email=req.body.email.toLowerCase();
        let userObj=new userModel(req.body);
        
    await userObj.save();
    
    return res.json({message:"User Registerd Successfully", data: userObj});
    
  }else{

    return res.status(404).json({'Message':`${valid.errors[0].instancePath.split("/")[1]} ${valid.errors[0].message}`})

}

}

let Login = async (req, res)=>{
    
    let foundUser = await userModel.findOne({email: req.body.email.toLowerCase()})
  
    if(!foundUser) return res.send("Invalid Emaill / Password");
    let passTrue = await bcrypt.compare(req.body.password, foundUser.password)
    if(!passTrue) return res.send("Invalid Email / Password");
    
    return res.send("Logged-In Successfully")
}




module.exports={
    GetAllUsers,
    GetUserByEmail,
    UpdateUser,
    DeleteUser,
    Register,
    Login

}