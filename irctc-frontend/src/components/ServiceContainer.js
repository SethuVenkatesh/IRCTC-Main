import React from 'react'
import FlightIcon from '@mui/icons-material/Flight';
import HotelIcon from '@mui/icons-material/Hotel';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import TrainIcon from '@mui/icons-material/Train';
import FilterHdrIcon from '@mui/icons-material/FilterHdr';
import TramIcon from '@mui/icons-material/Tram';
import CollectionsIcon from '@mui/icons-material/Collections';

const ServiceContainer = () => {
    const items=[{image:<FlightIcon className='service-menu-icon'/>,text:'Flights'},{image:<HotelIcon className='service-menu-icon'/>,text:'Hotels'},{image:<ShowChartIcon className='service-menu-icon'/>,text:'Rail drishti'},{image:<LocalDiningIcon className='service-menu-icon'/>,text:'E-catering'},{image:<DirectionsBusIcon className='service-menu-icon'/>,text:'Buses'},{image:<BeachAccessIcon className='service-menu-icon'/>,text:'Holiday packages'},{image:<TrainIcon className='service-menu-icon'/>,text:'Tourist Train'},{image:<FilterHdrIcon className='service-menu-icon'/>,text:'Hill railways'},{image:<TramIcon className='service-menu-icon'/>,text:'Charter Train'},{image:<CollectionsIcon className='service-menu-icon'/>,text:'Gallery'},]
  return (
    <div className='border-t border-b border-gray-200 p-4 shadow'>
        <h2 className='mt-8 mb-8 text-center text-3xl font-bold text-gray-600'>
            Have you not found the right one?
            <br></br>
            Find a service suitable for you here.
        </h2>
        <div className='p-16 flex flex-wrap '>
            {
                items.map((item)=>
                    {
                        return (

                            <div className='p-12 flex items-center justify-center flex-col' >
                                <div className='border p-6  duration-100 shadow rounded-full hover:text-white hover:bg-sky-600'>
                                    {item.image}
                                </div>
                                <p className='font-semibold uppercase text-lg'>{item.text}</p>
                            </div>
                        )
                    }
                )
            }
        </div>
    </div>
  )
}

export default ServiceContainer