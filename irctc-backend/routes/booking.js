const express=require('express')
var router = express.Router();
const Train=require('../models/train')
const Booking=require("../models/booking")

const stripe = require('stripe')('sk_test_51MKE7DSGL2cGXx2DUKmYWJMyiIcs4rEhumXqEeLhhHYJw6y1CIH0qRwVLd8doUNvkbpB1pZj9dTMeZVJXMOI7E2s00rGUUEzdL');


const days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
router.post("/train_list",async function(req,res){
    const searchItem=req.body.searchParams;
    let today=new Date(searchItem.date)
    var date = (today.getDate())+ '/' + (today.getMonth()+1) + '/' + today.getFullYear();
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
    let currentAvailableTrain=[]
    for(let train=0;train<allAvailableTrains.length;train++){
        let trainDetails= allAvailableTrains[train]
        const dateBookings=await Booking.find({bookingDate:date,trainNumber:trainDetails.trainNumber})
        let filteredSeatings=[]
        for(let seat=0;seat<trainDetails.seatings.length;seat++){
            let availableSeats=parseInt(trainDetails.seatings[seat].totalSeats)
           
            let seatClass=trainDetails.seatings[seat].trainClass

            for(let booking=0;booking<dateBookings.length;booking++){
                if(dateBookings[booking].class==seatClass){
                    availableSeats=availableSeats-dateBookings[booking].passengerDetails.length
                }
            }
            let seatDetails={
                ...trainDetails.seatings[seat],
                availableSeats
            }
            filteredSeatings.push(seatDetails)
        }
        trainDetails.seatings=filteredSeatings
        currentAvailableTrain.push(trainDetails)

    }
    console.log(currentAvailableTrain)
    res.status(200).send(currentAvailableTrain)
})


router.post("/check_availablity",async (req,res)=>{
    const {trainNumber,trainClass,passengerCount,bookingDate}= req.body
    const trainDetails=await Train.findOne({trainNumber:trainNumber})
    const dateBookings=await Booking.find({bookingDate:bookingDate,trainNumber:trainNumber,class:trainClass})
    console.log(dateBookings)
    let availableSeats
    for(let seat=0;seat<trainDetails.seatings.length;seat++){
        let seatClass=trainDetails.seatings[seat].trainClass
        if(trainClass==seatClass){
            availableSeats=parseInt(trainDetails.seatings[seat].totalSeats)
        }
    }
    for(let bookingIndex=0;bookingIndex<dateBookings.length;bookingIndex++){
        console.log(dateBookings[bookingIndex])
        availableSeats=availableSeats-dateBookings[bookingIndex].passengerDetails.length
    }
    console.log(availableSeats)
    availableSeats=availableSeats-passengerCount
    console.log(availableSeats)
    if(availableSeats>=0){
        res.status(200).send({availablity:true})
    }
    else{
        res.status(200).send({availablity:false})
    }

})

router.post('/complete', async (req, res) => {
    const paymentDetails=req.body.paymentDetails
    Booking.create(paymentDetails).then((res)=>console.log("Payment Successfull"))
    res.status(200).send("Payment Successfull")
});

router.get("/all",async (req,res)=>{
    let bookings=await Booking.find().populate('user').exec();
    console.log(bookings)
    res.status(200).send(bookings)
})




module.exports = router;