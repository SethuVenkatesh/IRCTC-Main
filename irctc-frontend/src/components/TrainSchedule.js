import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

const TrainSchedule = ({showSchedule,setShowSchedule,scheduleDetails}) => {
  return (
    <div className='fixed flex items-center justify-center w-full h-full  z-20 inset-0'>
        <div className='fixed inset-0 bg-black opacity-50 z-20'>

        </div>
        <div className='min-w-[60%] max-w-[75%] flex flex-col  z-40 h-[50%] '>
            <div className='text-white bg-[#213d77] px-4 py-2 flex items-center justify-between'>
                <p className=''>
                    Train Schedule
                </p>
                <CloseIcon onClick={()=>setShowSchedule(false)}/>
            </div>
            <div className='p-4 bg-white overflow-x-auto'>
                <div className='mb-8'> 
                    <div className='columns-5 p-2 bg-[#213d77] text-white font-semibold'>
                        <p>Train Number</p>
                        <p>Train Name</p>
                        <p>From Station</p>
                        <p>Destination Station</p>
                        <p>Runs On</p>
                    </div>
                    <div className='columns-5 p-2 border-b border-gray-300'>
                        <p>{scheduleDetails.trainNumber}</p>
                        <p>{scheduleDetails.trainName}</p>
                        <p>{scheduleDetails.sourceCode}</p>
                        <p>{scheduleDetails.destinationCode}</p>
                        <p>
                            {
                             Object.entries(scheduleDetails.availableDays).map(([key,value])=>{
                                return(
                                    <span className={`uppercase ml-1 ${value ? "text-green-700":"text-gray-400"}`}>
                                        {key.substring(0,1)}
                                    </span>
                                )
                            })
                            }
                        </p>
                    </div>
                </div>

                <div className=''>
                   
                    <div className='columns-4 p-2 bg-[#213d77] text-white font-semibold'>
                        <p>S No</p>
                        <p>Station Code</p>
                        <p>Station Name</p>
                        <p>Time</p>
                    </div>
                    {
                        scheduleDetails.intermediateStation.map((detail,index)=>{
                            console.log(detail)
                            return(
                                <div className='columns-4  p-2 border-b border-gray-300 '>
                                    <p>{index+1}</p>
                                    <p>{detail.stationCode}</p>
                                    <p>{detail.stationCode}</p>
                                    <p>{detail.stationTime}</p>
                                </div>
                            )
                        })
                    }
                   
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default TrainSchedule