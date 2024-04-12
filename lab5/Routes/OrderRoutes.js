const express=require("express");
const router=express.Router();

const Order_con=require("../controllers/OrderController");


//#region Orders
router.get('/',Order_con.GetAllOrders)

router.get('/:id',Order_con.GetOrderByID)

router.post('/',Order_con.AddOrder)


router.put('/:id',Order_con.UpdateOrder );


router.delete('/:id',Order_con.DeleteOrder)
//#endregion



module.exports=router;