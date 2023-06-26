const express=require('express')
var router = express.Router();
const Train=require('../models/train')
const Booking=require("../models/booking")

const stripe = require('stripe')('sk_test_51MKE7DSGL2cGXx2DUKmYWJMyiIcs4rEhumXqEeLhhHYJw6y1CIH0qRwVLd8doUNvkbpB1pZj9dTMeZVJXMOI7E2s00rGUUEzdL');


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

    for(let train=0;train<allAvailableTrains.length;train++){
        console.log(allAvailableTrains[train])
    }

    res.status(200).send(allAvailableTrains)
})

router.post('/complete', async (req, res) => {
    const paymentDetails=req.body.paymentDetails

    console.log(paymentDetails)
    Booking.create(paymentDetails).then((res)=>console.log("Payment Successfull"))
    res.status(200).send("Payment Successfull")
});

router.get("/all",async (req,res)=>{
    let bookings=await Booking.find().populate('user').exec();
    console.log(bookings)
    res.status(200).send(bookings)
})




module.exports = router;