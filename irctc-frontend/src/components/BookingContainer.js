import React ,{useEffect, useState}from 'react'
import NearMeIcon from '@mui/icons-material/NearMe';
import PlaceIcon from '@mui/icons-material/Place';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DatePicker from 'react-datepicker';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import WidgetsIcon from '@mui/icons-material/Widgets';

import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';


const BookingContainer = () => {
    const [searchItem,setSearchItem]=useState({
        from:'',
        to:'',
        date:new Date(),

    })
    const navigate=useNavigate()
    //animate arrow
    const [arrow,setArrow]=useState(false)

    //drop down and date
    const [classdropDown,setclassDropDown]=useState(false)
    const [quotadropDown,setquotaDropDown]=useState(false);
    const classdropDownOptions=["All Classes","Anubhuti Class (EA)","AC First Class (1A)",'Vistadome AC (EV)',"Exec. Chair Car (EC)","AC 2 Tier (2A)","First Class (FC)","AC 3 Tier (3A)","AC 3 Economy (3E)","Vistadome Chair Car (VC)","AC Chair Car (CC)","Sleeper (SL)","Vistadome Non AC (VS)","Second Sitting (2s)"];
    const quotadropDownOptions=["General","Ladies",'Takal',"Premium Takal","Person With Disability","Lower Birth/SR. Citizen"];
    const [classOption,setClassOption]=useState(classdropDownOptions[0])
    const [quotaOption,setQuotaOption]=useState(quotadropDownOptions[0])



    //datepicker custom component
    function CustomInput({ value, onClick }) {
        return (
          <div type="" onClick={onClick} className='w-full p-2 flex items-center  gap-x-4'>
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
        navigate('/booking/train-list',{state:searchItem})
    }

    useEffect(()=>{
       

    },[])

  return (
    <div className="mt-28  min-h-[700px] relative bg-[url('https://www.irctc.co.in/nget/home_page_banner1.e6749c3d9698d1ac7608.jpg')] bg-no-repeat w-full bg-cover ">
        <div className='absolute right-20 text-[#213d77] top-10 text-center'>
            <p className='uppercase font-bold text-4xl'>indain railways</p>
            <p className='capitalize font-baseline text-xl'>safety | security | punctuality</p>
        </div>
        <div className='absolute rounded-md top-10 left-20 '>
            <div className='relative w-[100%]'>
                <div className='flex justify-between'>
                    <p className='text-white px-4 py-1 bg-[#213d77] uppercase font-semibold text-sm text-center flex items-center space-x-2 w-[48%]'>
                        <img src='https://www.irctc.co.in/nget/assets/images/icons/pnr.png' alt='Not found'/>
                        <span>PNR status</span>
                       
                    </p>
                    <p className='text-white px-4 py-1 bg-[#213d77] uppercase font-semibold text-sm text-center flex items-center space-x-2 w-[48%]'>
                        <img src='https://www.irctc.co.in/nget/assets/images/icons/chart.png' alt='Not found'/>
                        <span>charts/vacancy</span>
                    </p>
                </div>
                <div className='w-full p-4 bg-gray-50 rounded-sm shadow'>
                    <div className='flex items-center justify-between'>
                        <img src='https://www.irctc.co.in/nget/assets/images/logo_top_eng.jpg' alt='not found'></img>
                        <p className='uppercase text-[#213d77] font-bold text-xl'>book ticket</p>
                        <img src='https://www.irctc.co.in/nget/assets/images/G20_Logo.png' alt='not found'></img>
                    </div>
                    <div className=''>
                        <div className='flex gap-x-2  mt-8 justify-between'>
                            <div className='relative border-2 border-sky-600 rounded-md flex items-center'>
                                <NearMeIcon className='color-[#213d77] pl-2'/>
                                <input type="text"  class="block p-2 w-full text-[#213d77] text-base bg-transparent rounded-lg border-1 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  onChange={(e)=>setSearchItem({...searchItem,from:e.target.value})} value={searchItem.from}/>
                                <label class="absolute text-sm text-gray-500 duration-300 -top-4 left-8 transform -translate-y-1/2 z-10 origin-[0] peer-focus:text-blue-600 peer-focus:-top-4 peer-focus:scale-100 peer-placeholder-shown:top-1/2 left-8 transform -translate-y-1/2 pointer-events-none	">From</label>
                            </div>
                            <img src='https://www.hippovideo.io/svg/arrow-down-left.svg' alt='not found' className={`p-2 bg-gray-200 rounded-full cursor-pointer duration-300 ${arrow ? '-rotate-90':'rotate-90'}`} onClick={handleFromTo}/>
                            <div className='relative border-2 border-sky-600 rounded-md flex items-center'>
                                <PlaceIcon className='color-[#213d77] pl-2'/>
                                <input type="text"  class="block p-2 w-full text-[#213d77] text-base bg-transparent rounded-lg border-1 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e)=>setSearchItem({...searchItem,to:e.target.value})} value={searchItem.to}/>
                                <label class="absolute text-sm text-gray-500 duration-300 -top-4 left-8 transform -translate-y-1/2 z-10 origin-[0] peer-focus:text-blue-600 peer-focus:-top-4 peer-focus:scale-100 peer-placeholder-shown:top-1/2 left-8 transform -translate-y-1/2 pointer-events-none	">To</label>
                            </div>
                        </div>
                        <div className='flex gap-x-2  mt-8 justify-between '>
                            <div className='relative border-2 border-sky-600 rounded-md flex items-center flex-1 justify-start' >
                                <label class="absolute text-sm text-sky-600 -top-6 left-0 font-semibold ">DD/MM/YYYY*</label>
                                <DatePicker
                                    id="date"
                                    selected={searchItem.date}
                                    onChange={(date) => setSearchItem({...searchItem,date:date})}
                                    dateFormat="dd/MM/yyyy"
                                    customInput={<CustomInput />}
                                    calendarIcon={<CalendarMonthIcon />}
                                />
                            </div>

                            <div className='relative border-2 border-sky-600 rounded-md flex items-center justify-between gap-x-2 flex-1' onClick={()=>setquotaDropDown(!quotadropDown)}>
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

                            <div className='relative border-2 border-sky-600 rounded-md flex items-center justify-between gap-x-2 flex-1' onClick={()=>setclassDropDown(!classdropDown)}>
                                <BusinessCenterIcon className='color-[#213d77] pl-2'/>
                                <p className='w-20 text-ellipsis whitespace-nowrap	overflow-hidden text-[#213d77] text-base'>{classOption}</p>
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
                        </div>
                        <div className='grid grid-cols-2 gap-2 mt-8 mb-8'>
                            <div>
                                <input type='checkbox' className='appearance-none home-check' id='check-disablity'/>
                                <label for='check-disablity' className=""> </label>
                                <span className='text-[#213d77] capitalize text-sm font-semibold'>Person with Disability</span>
                            </div>
                            <div>
                                <input type='checkbox' className='appearance-none home-check' id='check-flexible'/>
                                <label for='check-flexible' className=""> </label>
                                <span className='text-[#213d77] capitalize text-sm font-semibold'>flexible with date</span>
                            </div>
                            <div>
                                <input type='checkbox' className='appearance-none home-check' id='check-berth'/>
                                <label for='check-berth' className=""> </label>
                                <span className='text-[#213d77] capitalize text-sm font-semibold'>Train With available berth</span>
                            </div>
                            <div>
                                <input type='checkbox' className='appearance-none home-check' id='check-pass'/>
                                <label for='check-pass' className=""> </label>
                                <span className='text-[#213d77] capitalize text-sm font-semibold'>Railway pass concession</span>
                            </div>
                        </div>

                        <div className='flex items-center justify-between'>
                            <p className='px-4 py-2 bg-[#fb792b] text-white rounded-md font-semibold text-base cursor-pointer' onClick={handleSearch}>Search</p>
                            <p className='px-4 py-2 bg-[#01bb0a] text-white rounded-md text-base cursor-pointer'>Try Booking in Ask DISHA 2.0</p>
                        </div>

                    </div>
                    
                </div>
                <div className='text-red-500 mt-2 bg-gray-50 p-4 font-semibold'>
                    <p> Tickets booked through unauthorized agents or scripting can be released without refund.</p>
                    <p>Please check the alert section regarding restoration of AC 3-tier economy fare.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookingContainer