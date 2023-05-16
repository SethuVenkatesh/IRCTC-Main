import React, { useEffect } from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar'
import NearMeIcon from '@mui/icons-material/NearMe';
import PlaceIcon from '@mui/icons-material/Place';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DatePicker from 'react-datepicker';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import WidgetsIcon from '@mui/icons-material/Widgets';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import TrainCard from '../components/TrainCard';

//dummy commit 
const BookingPage = () => {
  const location=useLocation()
  const [searchItem,setSearchItem]=useState()
  const [arrow,setArrow]=useState(false)


  const [classdropDown,setclassDropDown]=useState(false)
  const [quotadropDown,setquotaDropDown]=useState(false);
  const classdropDownOptions=["All Classes","Anubhuti Class (EA)","AC First Class (1A)",'Vistadome AC (EV)',"Exec. Chair Car (EC)","AC 2 Tier (2A)","First Class (FC)","AC 3 Tier (3A)","AC 3 Economy (3E)","Vistadome Chair Car (VC)","AC Chair Car (CC)","Sleeper (SL)","Vistadome Non AC (VS)","Second Sitting (2s)"];
  const quotadropDownOptions=["General","Ladies",'Takal',"Premium Takal","Person With Disability","Lower Birth/SR. Citizen"];
  const [classOption,setClassOption]=useState(classdropDownOptions[0])
  const [quotaOption,setQuotaOption]=useState(quotadropDownOptions[0])


  //Filter States
  const [journeyClass,setJourneyClass]=useState(true)
  const [trainType,setTrainType]=useState(true)
  const [fromStations,setFromStations]=useState(true)
  const [toStations,setToStations]=useState(true)

   //datepicker custom component
   function CustomInput({ value, onClick }) {
    return (
      <div type="" onClick={onClick} className='w-full p-2 flex items-center gap-x-4 bg-white'>
        <CalendarMonthIcon />
        <p className='text-[#213d77] text-base'>{value}</p>
        
      </div>
    );
    }

    const handleChangeClass=(option)=>{
    setClassOption(option)
    setclassDropDown(false)
    }

    const handleChangeQuota=(option)=>{
    setQuotaOption(option)
    setquotaDropDown(false)
    }

  const handleFromTo=()=>{
    const toggle=searchItem.to
    setArrow(!arrow)
    setSearchItem({...searchItem,to:searchItem.from,from:toggle})
  }

  const handleSearch=()=>{
    
  }
  useEffect(()=>{
    setSearchItem(location.state)
  },[])

  return (
    <div className=''>
        <Navbar/>
    
        <div className='mt-28 p-2 border-gray-300'>
            {
                searchItem &&
                <div className='bg-[#213d77] w-full px-48 py-4'>
                    <div className='flex item-center justify-center gap-x-4 mb-4 flex-wrap gap-y-2'>
                            <div className='relative border-2 border-sky-600 rounded-md flex items-center bg-white flex-1'>
                                <NearMeIcon className='color-[#213d77] pl-2'/>
                                <input type="text"  class="block p-2  text-[#213d77] text-base bg-transparent rounded-lg border-1 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer w-32" placeholder=" "  onChange={(e)=>setSearchItem({...searchItem,from:e.target.value})} value={searchItem.from}/>
                            </div>
                            <img src='https://www.hippovideo.io/svg/arrow-down-left.svg' alt='not found' className={`p-2 bg-gray-200 rounded-full cursor-pointer duration-300 ${arrow ? '-rotate-90':'rotate-90'}`} onClick={handleFromTo}/>
                            <div className='relative border-2 border-sky-600 rounded-md flex items-center bg-white flex-1'>
                                <PlaceIcon className='color-[#213d77] pl-2'/>
                                <input type="text"  class="block p-2  text-[#213d77] text-base bg-transparent rounded-lg border-1 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer w-32" placeholder=" " onChange={(e)=>setSearchItem({...searchItem,to:e.target.value})} value={searchItem.to}/>
                            </div>
                            <div className='relative border-2 border-sky-600 rounded-md flex items-center flex-1 justify-start' >
                                <DatePicker
                                    id="date"
                                    selected={searchItem.date}
                                    onChange={(date) => setSearchItem({...searchItem,date:date})}
                                    dateFormat="dd/MM/yyyy"
                                    customInput={<CustomInput />}
                                    calendarIcon={<CalendarMonthIcon />}
                                />
                            </div>
                            <div className='relative border-2 border-sky-600 rounded-md flex items-center justify-between gap-x-2 flex-1 bg-white' onClick={()=>setquotaDropDown(!quotadropDown)}>
                                <WidgetsIcon className='color-[#213d77] pl-2'/>
                                <p className='w-32 text-ellipsis whitespace-nowrap	overflow-hidden text-[#213d77] text-base'>{quotaOption}</p>
                                <KeyboardArrowDownIcon/>
                                {
                                    quotadropDown &&
                                    (
                                        <div className='absolute w-full top-full left-0 bg-gray-50 shadow-lg border-2 border-gray-200 w-max h-48 overflow-y-auto scrollbar-thumb-gray-500 scrollbar-track-gray-100 scrollbar-w-1'> 
                                            {
                                                quotadropDownOptions.map((option)=>
                                                    <p className={`px-2 py-1  text-gray-700 hover:bg-[#007ad9] hover:text-white ${quotaOption==option ? 'bg-[#007ad9] text-white':''}`} onClick={()=>handleChangeQuota(option)}>{option}</p>
                                                )
                                            }
                                        </div>
                                    )
                                }
                            </div>
                            <div className='relative border-2 border-sky-600 rounded-md flex items-center justify-between gap-x-2 flex-1 bg-white' onClick={()=>setclassDropDown(!classdropDown)}>
                                <BusinessCenterIcon className='color-[#213d77] pl-2'/>
                                <p className='w-32 text-ellipsis whitespace-nowrap	overflow-hidden text-[#213d77] text-base'>{classOption}</p>
                                <KeyboardArrowDownIcon/>
                                {
                                    classdropDown &&
                                    (
                                        <div className='absolute w-full top-full left-0 bg-gray-50 shadow-lg border-2 border-gray-200 w-max h-48 overflow-y-auto scrollbar-thumb-gray-500 scrollbar-track-gray-100 scrollbar-w-1'> 
                                            {
                                                classdropDownOptions.map((option)=>
                                                    <p className={`px-2 py-1  text-gray-700 hover:bg-[#007ad9] hover:text-white ${classOption==option ? 'bg-[#007ad9] text-white':''}`} onClick={()=>handleChangeClass(option)}>{option}</p>
                                                )
                                            }
                                        </div>
                                    )
                                }
                            </div>
                            <p className='px-4 py-2 bg-[#fb792b] text-white rounded-md font-semibold text-base cursor-pointer ' onClick={handleSearch}>Modify Search</p>
                    </div>
                    <div className='flex gap-x-4 items-center flex-wrap'>
                        <div>
                            <input type='checkbox' className='appearance-none home-check' id='check-disablity'/>
                            <label for='check-disablity' className=""> </label>
                            <span className='text-[#213d77] capitalize text-sm font-semibold text-white	'>Person with Disability</span>
                        </div>
                        <div>
                            <input type='checkbox' className='appearance-none home-check' id='check-flexible'/>
                            <label for='check-flexible' className=""> </label>
                            <span className='text-[#213d77] capitalize text-sm font-semibold text-white	'>flexible with date</span>
                        </div>
                        <div>
                            <input type='checkbox' className='appearance-none home-check' id='check-berth'/>
                            <label for='check-berth' className=""> </label>
                            <span className='text-[#213d77] capitalize text-sm font-semibold text-white	'>Train With available berth</span>
                        </div>
                        <div>
                            <input type='checkbox' className='appearance-none home-check' id='check-pass'/>
                            <label for='check-pass' className=""> </label>
                            <span className='text-[#213d77] capitalize text-sm font-semibold text-white	'>Railway pass concession</span>
                        </div>
                    </div>
                </div>
            }
            <div className='flex'>
                {/* Filters */}

                <div className='w-1/4'>
                    <div className='border border-gray-300 '>
                        <div className='flex  text-gray-900 text-sm font-medium justify-between border-b border-gray-300 p-2 '>
                            <p>Refine Results</p>
                            <p className='text-[#fb792b]'>Reset Filters</p>
                        </div>
                        <div className='flex  text-gray-900 text-sm font-medium justify-between border-b border-gray-300 p-2 gap-x-8'>
                            <p className='uppercase'>Journey Class</p>
                            <p>
                                <span className='px-1 py-0.5 capitalize rounded-sm bg-[#d2effc]'>select all</span>

                                <KeyboardArrowDownIcon className={` cursor-pointer ${journeyClass ? 'rotate-180':'rotate-0'}`} onClick={()=>setJourneyClass(!journeyClass)}/>
                            </p>
                        </div>
                        {
                            journeyClass &&
                            <div className='p-2 grid md:grid-cols-2 gap-x-2 gap-y-2 sm:grid-cols-1 duration-300'>
                                <div>
                                    <input type='checkbox' className='appearance-none home-check' id='first-class'/>
                                    <label for='first-class' className=""> </label>
                                    <span className='text-gray-800 capitalize text-sm font-semibold'>AC First Class (1A)</span>
                                </div>
                                <div>
                                    <input type='checkbox' className='appearance-none home-check' id='two-tire'/>
                                    <label for='two-tire' className=""> </label>
                                    <span className='text-gray-800 capitalize text-sm font-semibold'>AC 2 Tire (2A)</span>
                                </div>
                                <div>
                                    <input type='checkbox' className='appearance-none home-check' id='sitting'/>
                                    <label for='sitting' className=""> </label>
                                    <span className='text-gray-800 capitalize text-sm font-semibold'>Second Sitting (2s)</span>
                                </div>
                                <div>
                                    <input type='checkbox' className='appearance-none home-check' id='three-tire'/>
                                    <label for='three-tire' className=""> </label>
                                    <span className='text-gray-800 capitalize text-sm font-semibold'>AC 3 Tire (3A)</span>
                                </div>
                                <div>
                                    <input type='checkbox' className='appearance-none home-check' id='ac-economy'/>
                                    <label for='ac-economy' className=""> </label>
                                    <span className='text-gray-800 capitalize text-sm font-semibold'>AC 3 Economy (3E)</span>
                                </div>
                                <div>
                                    <input type='checkbox' className='appearance-none home-check' id='chair-car'/>
                                    <label for='chair-car' className=""> </label>
                                    <span className='text-gray-800 capitalize text-sm font-semibold'>AC Chair Car (CC)</span>
                                </div>
                                <div>
                                    <input type='checkbox' className='appearance-none home-check' id='e-chair-car'/>
                                    <label for='e-chair-car' className=""> </label>
                                    <span className='text-gray-800 capitalize text-sm font-semibold'>Exec. Chair Car (EC)</span>
                                </div>
                                <div>
                                    <input type='checkbox' className='appearance-none home-check' id='sleeper'/>
                                    <label for='sleeper' className=""> </label>
                                    <span className='text-gray-800 capitalize text-sm font-semibold'>Sleeper (SL)</span>
                                </div>

                            </div>
                        }
                        <div className='flex  text-gray-900 text-sm font-medium justify-between border-b border-gray-300 p-2 gap-x-8'>
                            <p className='uppercase'>Train Type</p>
                            <p>
                                <span className='px-1 py-0.5 capitalize rounded-sm bg-[#d2effc]'>select all</span>
                                
                                <KeyboardArrowDownIcon  className={` cursor-pointer ${trainType ? 'rotate-180':'rotate-0'}`} onClick={()=>setTrainType(!trainType)}/>
                            </p>
                        </div>
                        {
                            trainType &&
                            <div className='p-2 grid  gap-x-2 gap-y-2 duration-300'>
                                <div>
                                    <input type='checkbox' className='appearance-none home-check' id='other'/>
                                    <label for='other' className=""> </label>
                                    <span className='text-gray-800 uppercase text-sm font-semibold pl-2  border-l-8 border-slate-200'>other</span>
                                </div>
                                <div>
                                    <input type='checkbox' className='appearance-none home-check' id='shadabdi'/>
                                    <label for='shadabdi' className=""> </label>
                                    <span className='text-gray-800 uppercase text-sm font-semibold pl-2 border-l-8 border-blue-600'>shadabdi</span>
                                </div>
                                <div>
                                    <input type='checkbox' className='appearance-none home-check ' id='special'/>
                                    <label for='special' className=""> </label>
                                    <span className='text-gray-800 uppercase text-sm font-semibold pl-2 border-l-8 border-red-800'>special</span>
                                </div>
                                <div>
                                    <input type='checkbox' className='appearance-none home-check' id='special-takal'/>
                                    <label for='special-takal' className=""> </label>
                                    <span className='text-gray-800 uppercase text-sm font-semibold pl-2 border-l-8 border-green-200'>special takal</span>
                                </div>
                            </div>
                        }
                        <div className='flex  text-gray-900 text-sm font-medium justify-between border-b border-gray-300 p-2 gap-x-8'>
                            <p className='uppercase'>from stations</p>
                            <p>
                                <span className='px-1 py-0.5 capitalize rounded-sm bg-[#d2effc]'>select all</span>
                                <KeyboardArrowDownIcon className={` cursor-pointer ${fromStations ? 'rotate-180':'rotate-0'}`} onClick={()=>setFromStations(!fromStations)}/>
                            </p>
                        </div>
                        {
                            fromStations &&
                            <div className='p-2 grid  gap-x-2 gap-y-2 duration-300'>
                                <div>
                                    <input type='checkbox' className='appearance-none home-check' id='station-1'/>
                                    <label for='station-1' className=""> </label>
                                    <span className='text-gray-800 uppercase text-sm font-semibold '>station-1</span>
                                </div>
                                <div>
                                    <input type='checkbox' className='appearance-none home-check' id='station-2'/>
                                    <label for='station-2' className=""> </label>
                                    <span className='text-gray-800 uppercase text-sm font-semibold '>station-2</span>
                                </div>
                            </div>
                        }
                        <div className='flex  text-gray-900 text-sm font-medium justify-between border-b border-gray-300 p-2 gap-x-8'>
                            <p className='uppercase'>to stations</p>
                            <p>
                                <span className='px-1 py-0.5 capitalize rounded-sm bg-[#d2effc]'>select all</span>
                                <KeyboardArrowDownIcon className={` cursor-pointer duration-1000 ${toStations ? 'rotate-180':'rotate-0'}`} onClick={()=>setToStations(!toStations)}/>
                            </p>
                        </div>
                        {
                            toStations &&
                            <div className='p-2 grid  gap-x-2 gap-y-2 duration-300'>
                                <div>
                                    <input type='checkbox' className='appearance-none home-check' id='to-station-1'/>
                                    <label for='to-station-1' className=""> </label>
                                    <span className='text-gray-800 uppercase text-sm font-semibold '>to-station-1</span>
                                </div>
                            </div>
                        }
                    </div>
                    <div className='flex items-center justify-center'>
                        <img src='https://tpc.googlesyndication.com/simgad/4844047534393163040?' alt='not found'/>
                    </div>
                </div>

                {/* Train Lists */}
                {
                    searchItem &&
                    <div className='w-3/4 p-2'>
                        <p className='mb-2 capitalize font-normal text-gray-900'>15 results from <span className='font-bold'>{searchItem.from} <TrendingFlatIcon/> {searchItem.to} | {searchItem.date.toDateString()} </span>for quota | general</p>
                        <div className='flex items-center justify-between mb-4'>
                            <div className='flex gap-x-2'>
                                <p className='border border-gray-300 px-4 py-2 bg-[#213d77]  text-sm font-semibold text-white'>Sort By | Duration</p>
                                <p className='border border-gray-300 px-4 py-2 bg-[#f5f5f5]  text-sm font-semibold'>Show Avalilable Train</p>
                            </div>
                            <div className='flex gap-x-2'>
                                <p className='border border-gray-300 px-4 py-2 bg-[#f5f5f5] text-sm font-semibold flex items-center justify-center'><NavigateBeforeIcon/> Previous Day</p>
                                <p className='border border-gray-300 px-4 py-2 bg-[#f5f5f5]  text-sm font-semibold flex items-center justify-center'>Next Day <NavigateNextIcon/></p>
                            </div>
                        </div>
                        <TrainCard/>
                        <TrainCard/>
                        <TrainCard/>
                    </div>
                }
            </div>
        </div>
    </div>
  )
}

export default BookingPage