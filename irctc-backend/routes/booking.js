const express=require('express')
var router = express.Router();
const Train=require('../models/train')


const days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
router.post("/train_list",async function(req,res){
    const searchItem=req.body.searchParams;
    console.log(searchItem)
    let dayIndex=new Date(searchItem.date).getDay()
    const allTrains=await Train.find()
    let allAvailableTrains=[];
    for(let i=0;i<allTrains.length;i++)
    {
        let train=allTrains[i];
        if(train.availableDays[days[dayIndex]]){
            if( train.sourceCode==searchItem.from && train.destinationCode == searchItem.to){
                allAvailableTrains.push(train)
            }
            else if(train.sourceCode==searchItem.from ){
                for(let stationIndex=0;stationIndex<train.intermediateStation.length;stationIndex++){
                    if(searchItem.to==train.intermediateStation[stationIndex].stationCode){
                        allAvailableTrains.push(train)
                        break;
                    }
                }
            }
            else if(train.destinationCode == searchItem.to){
                for(let stationIndex=0;stationIndex<train.intermediateStation.length;stationIndex++){
                    if(searchItem.from==train.intermediateStation[stationIndex].stationCode){
                        allAvailableTrains.push(train)
                        break;
                    }
                }
            }
            else{
                //looking for intermediate stations
                let startIndex=null
                let endIndex=null
    
                for(let stationIndex=0;stationIndex<train.intermediateStation.length;stationIndex++){
                    if(searchItem.from==train.intermediateStation[stationIndex].stationCode){
                        startIndex=stationIndex
                    }
                    else if(searchItem.to==train.intermediateStation[stationIndex].stationCode){
                        endIndex=stationIndex
                    }
    
                }
                if(startIndex && endIndex && startIndex<endIndex){
                    allAvailableTrains.push(train)
                }
                console.log(train)
            }
        }
        
    }

    console.log(allAvailableTrains)

    res.status(200).send(allAvailableTrains)
})


module.exports = router;