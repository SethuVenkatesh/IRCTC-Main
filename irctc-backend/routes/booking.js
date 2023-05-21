const express=require('express')
var router = express.Router();
const Train=require('../models/train')


const days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
router.post("/train_list",async function(req,res){
    const searchItem=req.body.searchParams;
    let dayIndex=new Date(searchItem.date).getDay()
    const allTrainsDestinationTrains=await Train.find()
    let allAvailableTrains=[];
    console.log(allTrainsDestinationTrains)
    for(let i=0;i<allTrainsDestinationTrains.length;i++)
    {
        let train=allTrainsDestinationTrains[i];
        if(train.availableDays[days[dayIndex]]&&train.sourceCode==searchItem.from && train.destinationCode == searchItem.to){
            allAvailableTrains.push(train)
        }
    }

    console.log(allAvailableTrains)

    res.status(200).send(allAvailableTrains)
})


module.exports = router;