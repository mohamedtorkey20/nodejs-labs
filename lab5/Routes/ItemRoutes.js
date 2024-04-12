const express=require("express");
const router=express.Router();

const Items_con=require("../controllers/ItemController");


//#region Items
router.get('/',Items_con.GetAllItems)

router.get('/:id',Items_con.GetItemByID)

router.post('/',Items_con.AddItem)


router.put('/:id',Items_con.UpdateItem );


router.delete('/:id',Items_con.DeleteItem)
//#endregion Items



module.exports=router;