const express=require("express");
const router=express.Router();

const user_con=require("../controllers/UserController");



//#region User
router.get('/',user_con.GetAllUsers)

router.get('/:id',user_con.GetUserByEmail)

router.put('/:id',user_con.UpdateUser )


router.delete('/:id',user_con.DeleteUser)

router.post('/signup',user_con.Register)

router.post('/login',user_con.Login)






module.exports=router;