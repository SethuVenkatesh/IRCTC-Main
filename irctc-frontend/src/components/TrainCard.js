import React from 'react'
import RefreshIcon from '@mui/icons-material/Refresh';
const TrainCard = () => {
  return (
    <div className='border border-gray-300 mb-4'>
        <div className='flex items-center justify-between p-2 bg-[#f5f5f5]'>
            <p className='font-semibold text-lg '>Tejas Express (12264)</p>
            <p className='text-medium font-normal'>Runs On : <span>M</span> <span className='text-gray-400'>T</span> <span>W</span> <span>T</span> <span>F</span> <span>S</span> <span>S</span></p>
            <p className='text-medium text-[#478be3] font-medium'>Train Schedule</p>
        </div>
        <div>
            <div className='flex items-center justify-between p-2 mb-2'>
                <p className='capitalize text-lg'><span className='font-semibold'>15:00 | </span>Madurai Jn | May 26</p>
                <p className='text-base'>_____ 6:15 _____</p>
                <p className='capitalize text-lg'><span className='font-semibold'>21:15 | </span>Chennai Jn | May 26</p>
            </div>
            <div className='flex items-center gap-x-2 p-2 mb-2'>
                <div className='border border-gray-200 rounded-md bg-[#f5f5f5] p-2 min-w-[180px]'>
                    <p className='font-semibold text-medium'>Second Sitting (2s)</p>
                    <p>Refresh <RefreshIcon/></p>
                </div>
                <div className='border border-gray-200 rounded-md bg-[#f5f5f5] p-2 min-w-[180px] '>
                    <p  className='font-semibold text-medium'>Sleeper (SL)</p>
                    <p>Refresh <RefreshIcon/></p>
                </div>
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