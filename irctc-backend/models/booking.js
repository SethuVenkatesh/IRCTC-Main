const mongoose = require('mongoose');

const Booking = mongoose.Schema({
    startPlace:"String",
    endPlace:"String",
    bookingDate:"String",
    trainNumber:"String",
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    class:"String",
    ticketPrice:"String",
    passengerDetails:{
        type:Array,
        default:[]
    }
});

module.exports = mongoose.model('Booking', Booking);