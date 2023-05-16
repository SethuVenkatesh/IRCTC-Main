const express=require('express')
var router = express.Router();
const Train=require('../models/train')


router.post("/train_list",async function(req,res){
    const searchItem=req.body.searchParams;
    const allTrains=await Train.find({sourceCode:searchItem.from,destinationCode:searchItem.to})
    console.log(allTrains)
    res.status(200).send(allTrains)
})


module.exports = router;