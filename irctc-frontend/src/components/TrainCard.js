import React from 'react'
import { useState,useEffect } from 'react';
import { StationCodeToStationName } from '../constants';
import { useContext } from 'react';
import { UserDetailsContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import Toaster from './common/Toastifier';


const TrainCard = ({details,showSchedule,setShowSchedule,setScheduleDetails,searchItemDetails}) => {

    const {userDetails,setShowLogin}=useContext(UserDetailsContext)
    const navigate=useNavigate()
    const [duration,setDuration]=useState()
    const [startTime,setStartTime]=useState()
    const [endTime,setEndTime]=useState()
    const [endDate,setEndDate]=useState()
    const [selectedClass,setSelectedClass]=useState("")
    const [toastMsg,setToastMsg]=useState("")


    function formatDuration(durationMinutes) {
        const hours = Math.floor(durationMinutes / 60);
        const minutes = durationMinutes % 60;
      
        const formattedDuration = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        return formattedDuration;
      }
      

      const handleBook=()=>{
        console.log("handle book")
        console.log(selectedClass)
        let allDetails={...searchItemDetails,...details,duration,stationStartTime:startTime,stationEndTime:endTime,stationEndDate:endDate,selectedClass:selectedClass}
        if(selectedClass==""){
            console.log(selectedClass)
            setToastMsg("Please select Class")
            return;
        }
        if(userDetails){
            navigate("/booking/details",{state:allDetails})
        }
        else{
            setShowLogin(true)
        }
      }


    useEffect(()=>{
        let times=[]
        if(details.sourceCode==searchItemDetails.from && details.destinationCode==searchItemDetails.to){
            times.push(details.startTime)
            for(let station=0;station<details.intermediateStation.length;station++){
                times.push(details.intermediateStation[station].stationTime)
            }
            times.push(details.endTime)
            setStartTime(details.startTime)
            setEndTime(details.endTime)
        }
        else if(details.sourceCode==searchItemDetails.from){
            setStartTime(details.startTime)
            times.push(details.startTime)
            for(let station=0;station<details.intermediateStation.length;station++){
                times.push(details.intermediateStation[station].stationTime)
                if(searchItemDetails.to==details.intermediateStation[station].stationCode)
                {
                    setEndTime(details.intermediateStation[station].stationTime)
                    break;
                }
            }
        }
        else if(details.destinationCode==searchItemDetails.to)
        {
            let isReached=false;
            for(let station=0;station<details.intermediateStation.length;station++){
                if(searchItemDetails.from==details.intermediateStation[station].stationCode)
                {
                    isReached=true
                    setStartTime(details.intermediateStation[station].stationTime)
                }
                if(isReached){
                    times.push(details.intermediateStation[station].stationTime)
                }
            }
            times.push(details.endTime)
            setEndTime(details.endTime)
        }
        else{
            let isStartReached=false;
            for(let station=0;station<details.intermediateStation.length;station++){
                if(searchItemDetails.from==details.intermediateStation[station].stationCode)
                {
                    isStartReached=true
                    setStartTime(details.intermediateStation[station].stationTime)
                }
                if(isStartReached){
                    times.push(details.intermediateStation[station].stationTime)
                }
                if(searchItemDetails.to==details.intermediateStation[station].stationCode)
                {
                    setEndTime(details.intermediateStation[station].stationTime)
                    break;
                }
            }
        }
        let totalDuration=0;
        console.log(times)


       for(let i=1;i<times.length;i++){
        const [startHours, startMinutes] = times[i - 1].split(':').map(Number);
        const [endHours, endMinutes] = times[i].split(':').map(Number);
  
        const startTotalMinutes = startHours * 60 + startMinutes;
        const endTotalMinutes = endHours * 60 + endMinutes;
  

        let durationMinutes;
        if (endTotalMinutes >= startTotalMinutes) {
            durationMinutes = endTotalMinutes - startTotalMinutes;
        } else {
            durationMinutes = (24 * 60 - startTotalMinutes) + endTotalMinutes;
        }
        totalDuration += durationMinutes;
    }   
       const finalDuration = formatDuration(totalDuration);
      
       setDuration(finalDuration)
    },[])


    useEffect(()=>{
        let splitDuration
        let finalHours
        let finalMinutes
        let desiredHours
        let desiredMinutes
        if(duration){
            splitDuration=duration.split(":")
            finalHours=splitDuration[0]
            finalMinutes=splitDuration[1]
        }
        let date=new Date(searchItemDetails.date)  
        if(startTime){
            desiredHours = parseInt(finalHours) + parseInt(startTime.split(":")[0]);
            desiredMinutes = parseInt(finalMinutes) + parseInt(startTime.split(":")[1]);

        }    
        var desiredSeconds = 0;
        var desiredMilliseconds = 0;
        date.setHours(desiredHours, desiredMinutes, desiredSeconds, desiredMilliseconds);
        setEndDate(date)
    },[duration])

  return (
    <div className='border border-gray-300 mb-4'>
        {
            toastMsg.length>=1&&
            <Toaster ToastMessage={toastMsg} setToastMsg={setToastMsg}/>
        }
        <div className='flex items-center justify-between p-2 bg-[#f5f5f5]'>
            <p className='font-semibold text-lg '>{details.trainName} ({details.trainNumber})</p>
            <p className='text-medium font-normal'>Runs On : 
            {
                Object.entries(details.availableDays).map(([key,value])=>{
                    return(
                        <span className={`uppercase ml-1 ${value ? "text-gray-900":"text-gray-400"}`}>
                            {key[0]}
                        </span>
                    )
                })
            }
             {/* <span>M</span> <span className='text-gray-400'>T</span> <span>W</span> <span>T</span> <span>F</span> <span>S</span> <span>S</span> */}
             </p>
            <p className='text-medium text-[#478be3] font-medium' onClick={()=>{
                setScheduleDetails(details)
                setShowSchedule(!showSchedule)

            }}>Train Schedule</p>
        </div>
        <div>
            <div className='flex items-center justify-between p-2 mb-2'>
                <p className='capitalize text-lg'><span className='font-semibold'>{startTime} | </span>{StationCodeToStationName[searchItemDetails.from]} | {searchItemDetails.date.toDateString()}</p>
                <p className='text-base'>_____ {duration} _____</p>
                {
                    endDate &&
                    <p className='capitalize text-lg'><span className='font-semibold'>{endTime} | </span>{StationCodeToStationName[searchItemDetails.to]} | {endDate.toDateString()}</p>
                }
            </div>
            <div className='flex items-center gap-x-2 p-2 mb-2 overflow-x-auto seating-overflow'>

                {
                    details.seatings.map((seat)=>{
                        return (
                            <div className={`border border-gray-200 rounded-md bg-[#f5f5f5] p-2 min-w-[180px] ${selectedClass ==seat.trainClass ? "border-gray-900" : "" }`} onClick={()=>setSelectedClass(seat.trainClass)}>
                                <p className='font-semibold text-medium'>{seat.trainClass}</p>
                                <p className='uppercase text-[#37a51d] font-bold'>Available - {seat.totalSeats}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex gap-x-2 mb-2 p-2 items-center'>
                <p className='px-4 py-2 bg-[#fb792b] text-white rounded-md text-sm font-semibold cursor-pointer' onClick={handleBook}>Book Now</p>
                <p className='border border-gray-300 px-4 py-2 bg-[#f5f5f5]  text-sm font-medium uppercase '>Other Dates</p>
                {
                    details.seatings.map((seat)=>{
                        if(selectedClass==seat.trainClass){
                            return(
                                <p className='font-semibold'>Ticket Price - {seat.ticketPrice}</p>
                            )
                        }
                    })

                }
            </div>

        </div>
    </div>
  )
}

export default TrainCard