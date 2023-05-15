const mongoose = require('mongoose');


const Arrangement=mongoose.Schema({
    price:'Number',
    seats:'Number'
})
const Train = mongoose.Schema({
  trainName:'String',
  trainNumber:'String',
  sourceCode:'String',
  destinationCode:'String',
  startTime:"String",
  endTime:'String',
  availableDays:{
    type:Object,
    default:{}
  },
  intermediateStation:{
    type:Array,
    default:[]
  },
  seatings:{
    type:Array,
    default:[]
  }
  
});

module.exports = mongoose.model('Train', Train);