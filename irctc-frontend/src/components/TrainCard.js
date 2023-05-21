import React from 'react'
import { useState,useEffect } from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';
const TrainCard = ({details,showSchedule,setShowSchedule,setScheduleDetails}) => {
    const [duration,setDuration]=useState()
    function formatDuration(durationMinutes) {
        const hours = Math.floor(durationMinutes / 60);
        const minutes = durationMinutes % 60;
      
        const formattedDuration = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        return formattedDuration;
      }
      
    useEffect(()=>{
        let times=[details.startTime]
        for(let station=0;station<details.intermediateStation.length;station++){
            times.push(details.intermediateStation[station].stationTime)
        }
        times.push(details.endTime)
        let totalDuration=0;
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

  return (
    <div className='border border-gray-300 mb-4'>
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
                <p className='capitalize text-lg'><span className='font-semibold'>{details.startTime} | </span>Madurai Jn | May 26</p>
                <p className='text-base'>_____ {duration} _____</p>
                <p className='capitalize text-lg'><span className='font-semibold'>{details.endTime} | </span>Chennai Jn | May 26</p>
            </div>
            <div className='flex items-center gap-x-2 p-2 mb-2 overflow-x-auto seating-overflow'>

                {
                    details.seatings.map((seat)=>{
                        return (
                            <div className='border border-gray-200 rounded-md bg-[#f5f5f5] p-2 min-w-[180px]'>
                                <p className='font-semibold text-medium'>{seat.trainClass}</p>
                                <p className='uppercase text-[#37a51d] font-bold'>Available - {seat.totalSeats}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex gap-x-2 mb-2 p-2'>
                <p className='px-4 py-2 bg-[#fb792b] text-white rounded-md text-sm font-semibold'>Book Now</p>
                <p className='border border-gray-300 px-4 py-2 bg-[#f5f5f5]  text-sm font-medium uppercase '>Other Dates</p>
            </div>

        </div>
    </div>
  )
}

export default TrainCard