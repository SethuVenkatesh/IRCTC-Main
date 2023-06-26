import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useEffect,useState } from 'react';
import api from '../axios';
const PaymentForm = ({allDetails,userDetails,passengerDetails}) => {
  const [amount,setAmount]=useState()
  useEffect(()=>{
    allDetails.seatings.map((seat)=>{
      if(seat.trainClass==allDetails.selectedClass){
        setAmount(seat.ticketPrice * passengerDetails.length *100)
      }
    })
  },[])

  const handleToken = (token) => {
    let today=new Date(allDetails.date)
    var date = (today.getDate())+ '/' + (today.getMonth()+1) + '/' + today.getFullYear();
    let price
    allDetails.seatings.map((seat)=>{
      if(seat.trainClass==allDetails.selectedClass){
        price=seat.ticketPrice
      }
    })
    let paymentDetails={
      passengerDetails:passengerDetails,
      user:userDetails.user._id,
      trainNumber:allDetails.trainNumber,
      startPlace:allDetails.from,
      endPlace:allDetails.to,
      bookingDate:date,
      class:allDetails.selectedClass,
      ticketPrice:price


    }
    // Send the token to the server for payment processing
    api.post("booking/complete",{paymentDetails}).then((res)=>{
      console.log(res)
    })

  };

  return (
    <StripeCheckout
      token={handleToken}
      stripeKey="pk_test_51MKE7DSGL2cGXx2DNTxcyMst4Jr2fe5McGkdNQX7TE6RHJtmwTHGSaArcYFWGr0kFZ7SZPieGEX3royYbtD4nBeU00Avz1tZim"
      amount={amount}
      currency="INR"
      name="Booking App"
      description="Payment for Booking"
    />
  );
};

export default PaymentForm;
