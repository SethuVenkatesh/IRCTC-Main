import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Footer from '../components/Footer'
import LoginPopup from '../components/LoginPopUp'
import { useContext } from 'react'
import { UserDetailsContext } from '../context/userContext'
import { useLocation,useNavigate } from 'react-router-dom';
import { StationCodeToStationName } from '../constants';
import WarningIcon from '@mui/icons-material/Warning';
import CloseIcon from '@mui/icons-material/Close';import AddIcon from '@mui/icons-material/Add';
import PaymentForm from '../components/PaymentForm';
import Toaster from '../components/common/Toastifier';
import api from '../axios';

const PassangerInput=({index,details,setPassengerDetails,passengerDetails,setToastMsg})=>{
    const [passanger,setPassanger]=useState({})

    const handleInputChange=(e)=>{
        setPassanger({...passanger,[e.target.name]:e.target.value})
        const allPassenger=[...passengerDetails];
        allPassenger[index]={...allPassenger[index],[e.target.name]:e.target.value}
        setPassengerDetails(allPassenger)
      }
      const handleDelete=()=>{
        const allPassenger=[...passengerDetails];
        if(allPassenger.length==1){
            setToastMsg("Required Alteast One Passengers")
            return
        }
        const filteredPassenger=allPassenger.filter((_, i) => i !== index)
        setPassengerDetails(filteredPassenger)
      }
    useEffect(()=>{
        setPassanger({
            age:details.age,
            name:details.name,
            gender:details.gender
        })

    },[details])


    return (
        <div className='p-4 flex items-center gap-x-4'>
            <input className='border border-gray-400 px-4 py-2 rounded-sm focus:border-blue-500 outline-none text-gray-700 placeholder-[#2f4676] ' placeholder='Passanger Name' type='text' name='name' onChange={handleInputChange} value={passanger.name}/>
            <input className='border border-gray-400 px-4 py-2 rounded-sm focus:border-blue-500 outline-none text-gray-700 placeholder-[#2f4676] ' placeholder='Passanger Age' type='number' name='age' onChange={handleInputChange} value={passanger.age}/>
            <select onChange={handleInputChange} className=' border border-gray-500 py-2 px-3 text-blue-900 rounded-sm' value={passanger.gender} name='gender'>
                <option value="" disabled>Select Gender</option>
                <option value="male">Male</option>
                <option value='female'>Female</option>
                <option value='transgender'>Transgender</option>
            </select>
            <CloseIcon onClick={handleDelete} className='cursor-pointer'/>
        </div>
    )
}
const TabOne=({allDetails,passengerDetails,setPassengerDetails,userDetails,handleAddPassanger,setToastMsg})=>{
    return(
        <>
            {
                allDetails &&
                <>
                <div className='border-2 border-gray-300 mb-4'>
                        <p className='px-4 py-1 bg-[#ffe399] font-normal text-md'><WarningIcon className='mr-4'/>Senior Citizen concession not allowed for this Train/Quota/Class. Person With Disability/ Journalist may check after entering details.</p>
                        <div className='flex items-center justify-between px-4 py-3 bg-gray-100'>
                            <p className='uppercase font-bold text-baseline'>{allDetails.trainName} ({allDetails.trainNumber})</p>
                            <LocationOnIcon/>
                        </div>
                        <div className='flex items-center justify-between px-4 py-3'>
                            <div className='flex items-center justify-between flex-col'>
                                <p className='font-semibold text-lg '>{allDetails.stationStartTime} | {StationCodeToStationName[allDetails.from]}</p>
                                <p className='font-normal text-md'>{allDetails.date.toDateString()}</p>
                            </div>
                            <p className='text-md'>__ {allDetails.duration} __</p>
                            <div className='flex items-center justify-between flex-col'>
                                <p className='font-semibold text-lg '>{allDetails.stationEndTime} | {StationCodeToStationName[allDetails.to]}</p>
                                <p className='font-normal text-md'>{allDetails.stationEndDate.toDateString()}</p>
                            </div>
                        </div>
                        <p className='m-auto px-2 py-1 font-semibold bg-gray-100 w-fit mb-4'>{allDetails.selectedClass} | General</p>
                </div>
                    <div className='border-2 border-gray-300 mb-4'>
                        <div className='px-4 py-3 bg-[#fef1e9] border-l-4 border-[#fb792b]'>
                            <p className='flex items-center gap-x-2'>
                                <p className='w-1 h-1 bg-gray-900 rounded-full'></p>
                                <span className='text-sm'>Note: Please submit full name of the passengers instead of initials.</span>
                            </p>
                            <p className='flex items-center gap-x-2'>
                                <p className='w-1 h-1 bg-gray-900 rounded-full'></p>
                                <span className='text-sm '>Note: The ID card will be required during journey</span>
                            </p>
                            
                        </div>
                        <div className='flex items-center justify-between px-4 py-3 bg-gray-100'>
                            <p className='font-bold text-lg'>Passanger Details</p>
                        </div>
                        <div className='flex flex-col  p-4 border-b-2 border-gray-300 mb-4 ml-4 mr-4'>
                            {
                                passengerDetails.map((details,index)=>{
                                    return(
                                        <PassangerInput details={details} setPassengerDetails={setPassengerDetails} index={index} passengerDetails={passengerDetails} setToastMsg={setToastMsg}/>
                                    )
                                })
                            }
                        </div>
                        <p className='font-semibold text-md text-blue-900 flex items-center px-4 py-3 cursor-pointer' onClick={handleAddPassanger}><AddIcon className='mr-2'/> Add Passanger Details</p>
                    </div>
                    <div className='border-2 border-gray-300 mb-4'>
                        <div className='flex items-center justify-between px-4 py-3 bg-gray-100'>
                            <p className='font-bold text-lg'>Contact Details</p>
                        </div>
                        {
                            userDetails &&
                            <p className='px-4 py-3 text-md font-semibold'>(Ticket details will be sent to email- {userDetails.user.email} and registered mobile number {userDetails.user.phoneNumber})</p>
                        }
                        
                    </div>
                    <div className='border-2 border-gray-300 mb-4'>
                        <div className='flex items-center justify-between px-4 py-3 bg-gray-100'>
                            <p className='font-bold text-lg'>Fare Summary</p>
                        </div>
                        <div className='px-4 py-1 flex items-center justify-between'>
                            <p>Ticket Fare</p>
                            {
                                allDetails.seatings.map((seat)=>{
                                    if(seat.trainClass==allDetails.selectedClass){
                                        return (
                                            <p>{seat.ticketPrice}</p>
                                        )
                                    }
                                })
                            }
                        </div>
                        <div className='px-4 py-1 flex items-center justify-between capitalize'>
                            <p>Number of passengers</p>
                            <p>{passengerDetails.length}</p>
                        </div>
                        <div className='px-4 py-3 flex items-center justify-between capitalize bg-[#213d77]'>
                            <p className='text-white font-semibold'>Total Fare</p>
                            {
                                allDetails.seatings.map((seat)=>{
                                    if(seat.trainClass==allDetails.selectedClass){
                                        return (
                                            <p className='text-white font-semibold'>{seat.ticketPrice * passengerDetails.length}</p>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                </>
            }
                
        </>
    )
}

const TabTwo=({allDetails,passengerDetails,userDetails})=>{
    console.log(passengerDetails)
    return (
        <>
            <div className='border-2 border-gray-300 mb-4'>
                <p className='px-4 py-1 bg-[#ffe399] font-normal text-md'><WarningIcon className='mr-4'/>Senior Citizen concession not allowed for this Train/Quota/Class. Person With Disability/ Journalist may check after entering details.</p>
                <div className='flex items-center justify-between px-4 py-3 bg-gray-100'>
                    <p className='uppercase font-bold text-baseline'>{allDetails.trainName} ({allDetails.trainNumber})</p>
                    <LocationOnIcon/>
                </div>
                <div className='flex items-center justify-between px-4 py-3'>
                    <div className='flex items-center justify-between flex-col'>
                        <p className='font-semibold text-lg '>{allDetails.stationStartTime} | {StationCodeToStationName[allDetails.from]}</p>
                        <p className='font-normal text-md'>{allDetails.date.toDateString()}</p>
                    </div>
                    <p className='text-md'>__ {allDetails.duration} __</p>
                    <div className='flex items-center justify-between flex-col'>
                        <p className='font-semibold text-lg '>{allDetails.stationEndTime} | {StationCodeToStationName[allDetails.to]}</p>
                        <p className='font-normal text-md'>{allDetails.stationEndDate.toDateString()}</p>
                    </div>
                </div>
                <p className='m-auto px-2 py-1 font-semibold bg-gray-100 w-fit mb-4'>{passengerDetails.length} Passenger | {allDetails.selectedClass} | General | Boarding at {StationCodeToStationName[allDetails.from]} | Boarding Date : {allDetails.date.toDateString()} {allDetails.stationStartTime}</p>
            </div>

            <div className='border-2 border-gray-300 mb-4'>
                <div className='flex items-center justify-between px-4 py-3 bg-gray-100 font-bold text-md'>
                   Passanger Details
                </div>
                <div className='px-4 py-3 '>
                    {
                        passengerDetails.map((passanger,index)=>{
                            return(
                                <div className='flex items-center gap-x-2'>
                                    <span className='font-bold text-md capitalize'>{index+1} . {passanger.name}</span>
                                    <p className='font-semibold text-sm capitalize'>  {passanger.age} yrs | {passanger.gender}</p>
                                </div>
                            )
                        })
                    }
                </div>   
            </div>

            <div className='border-2 border-gray-300 mb-4'>
                {
                    userDetails &&
                    <p className='px-4 py-3 text-md font-semibold'>(Ticket details will be sent to email- {userDetails.user.email} and registered mobile number {userDetails.user.phoneNumber})</p>
                }  
                       
            </div>

            <div className='border-2 border-gray-300 mb-4'>
                        <div className='flex items-center justify-between px-4 py-3 bg-gray-100'>
                            <p className='font-bold text-lg'>Fare Summary</p>
                        </div>
                        <div className='px-4 py-1 flex items-center justify-between'>
                            <p>Ticket Fare</p>
                            {
                                allDetails.seatings.map((seat)=>{
                                    if(seat.trainClass==allDetails.selectedClass){
                                        return (
                                            <p>{seat.ticketPrice}</p>
                                        )
                                    }
                                })
                            }
                        </div>
                        <div className='px-4 py-1 flex items-center justify-between capitalize'>
                            <p>Number of passengers</p>
                            <p>{passengerDetails.length}</p>
                        </div>
                        <div className='px-4 py-3 flex items-center justify-between capitalize bg-[#213d77]'>
                            <p className='text-white font-semibold'>Total Fare</p>
                            {
                                allDetails.seatings.map((seat)=>{
                                    if(seat.trainClass==allDetails.selectedClass){
                                        return (
                                            <p className='text-white font-semibold'>{seat.ticketPrice * passengerDetails.length}</p>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
        </>
    )
}

const TabThree=({allDetails,passengerDetails,userDetails})=>{

    return(
        <>
        <div className='border-2 border-gray-300 mb-4'>
            <div className='flex items-center justify-between px-4 py-3 bg-gray-100'>
                <p className='font-bold text-lg'>Fare Summary</p>
            </div>
            <div className='px-4 py-1 flex items-center justify-between'>
                <p>Ticket Fare</p>
                {
                    allDetails.seatings.map((seat)=>{
                        if(seat.trainClass==allDetails.selectedClass){
                            return (
                                <p>{seat.ticketPrice}</p>
                            )
                        }
                    })
                }
            </div>
            <div className='px-4 py-1 flex items-center justify-between capitalize'>
                <p>Number of passengers</p>
                <p>{passengerDetails.length}</p>
            </div>
            <div className='px-4 py-3 flex items-center justify-between capitalize bg-[#213d77]'>
                <p className='text-white font-semibold'>Total Fare</p>
                {
                    allDetails.seatings.map((seat)=>{
                        if(seat.trainClass==allDetails.selectedClass){
                            return (
                                <p className='text-white font-semibold'>{seat.ticketPrice * passengerDetails.length}</p>
                            )
                        }
                    })
                }
            </div>
        </div>
        <div className='flex items-center justify-center mb-4 '>
            <PaymentForm allDetails={allDetails} passengerDetails={passengerDetails} userDetails={userDetails}/>
        </div>
        </>

    )
}


const BookingDetails = () => { 

    const {showLogin,setShowLogin,userDetails}=useContext(UserDetailsContext)
    const [allDetails,setAllDetails]=useState()
    const [passengerDetails,setPassengerDetails]=useState([{name:"",age:"",gender:""}])
    const [selectedTab,setSelectedTab]=useState()
    const [toastMsg,setToastMsg]=useState("")
    const allTabs=["Passanger Details","Review Journey","Payment"]
    const location=useLocation()
    const navigate=useNavigate()

    useEffect(()=>{
        setAllDetails(location.state)
    },[])

    useEffect(()=>{
        setSelectedTab(1)
    },[allDetails])

    useEffect(()=>{
        console.log(allDetails)
        if(allDetails){
            let today=new Date(allDetails.date)
            var date = (today.getDate())+ '/' + (today.getMonth()+1) + '/' + today.getFullYear();
            // const {trainNumber,trainClass,passengerCount,bookingDate}
            let check_availablity={
                trainNumber:allDetails.trainNumber,
                trainClass:allDetails.selectedClass,
                passengerCount:passengerDetails.length,
                bookingDate:date
            }
            api.post('booking/check_availablity',{check_availablity}).then((res)=>{
                if(!res.data.availablity){
                    setToastMsg("Available Tickets doesn't Satisfy Your Requirements")
                }   
            })
        }
    },[passengerDetails])

    
    const handleAddPassanger=()=>{
        setPassengerDetails([...passengerDetails,{name:"",age:"",gender:""}])
    }

    console.log(passengerDetails)
    const handleBack=()=>{
        let tab=selectedTab-1
        if(tab==0){
            navigate(-1)
        }else{
            setSelectedTab(tab)
        }
    }

    const handleContinue=()=>{
        let condition=false
        let tab=selectedTab+1
        if(tab==2){
            passengerDetails.map((details)=>{
                if(details.name==''||details.age==''||details.gender==''){
                    condition=true
                    return;
                }
            })
        }
        if(condition){
            setToastMsg("Passenger Details Cannot be Empty")
            return
        }
        if(tab==4){
            selectedTab(3)
        }
        else{
            setSelectedTab(tab)
        }
    }
    return (
      <div className='min-h-screen w-full'>
          <Navbar/>
          {
            showLogin &&
            <LoginPopup/>
          }
          <p className='mt-28'></p>
          {
            allDetails &&
            <div className='p-4'>
                <div className='flex items-center justify-between px-16 py-4 relative mb-4'>
                    {
                        allTabs.map((tab,index)=>{
                            if(selectedTab>=index+1){
                                return (
                                    <>
                                        <div className='relative flex flex-col items-center justify-center gap-y-2'>
                                            <p className='w-[50px] h-[50px] rounded-full text-white font-bold bg-[#fb792b] flex items-center justify-center'>{index+1}</p>
                                            <p className=''>{tab}</p>
                                        </div>
                                        {
                                            index!=2 && <hr className='w-[30%] h-[2px] bg-gray-300 mb-[30px]'/>

                                        }
                                    </>

                                )
                            }
                            else{
                                return(
                                    <>
                                        <div className='relative flex flex-col items-center justify-center gap-y-2'>
                                            <p className='w-[50px] h-[50px] rounded-full text-white font-bold bg-[#d5d7d9] flex items-center justify-center'>{index+1}</p>
                                            <p className=''>{tab}</p>
                                        </div>
                                        {
                                            index!=2 && <hr className='w-[30%] h-[2px] bg-gray-300 mb-[30px]'/>
                                        }
                                    </>
                                )
                            }
                        })
                    }
                   
                </div>
                <>
                    { 
                        selectedTab===1 && allDetails ? <TabOne allDetails={allDetails} passengerDetails={passengerDetails} setPassengerDetails={setPassengerDetails} handleAddPassanger={handleAddPassanger} userDetails={userDetails} setToastMsg={setToastMsg}/> : selectedTab==2 ? <TabTwo allDetails={allDetails} passengerDetails={passengerDetails} userDetails={userDetails}/> : <TabThree allDetails={allDetails} passengerDetails={passengerDetails} userDetails={userDetails}/>
                    }
                </>
                {
                    toastMsg.length>=1&&
                    <Toaster ToastMessage={toastMsg} setToastMsg={setToastMsg}/>
                }
                <div className='flex items-center gap-x-4'>
                    <p className='px-4 py-2 bg-[#f5f5f5] text-gray-900 font-bold border-2 border-gray-400 cursor-pointer' onClick={handleBack}>Back</p>
                    {
                        selectedTab!==3 &&
                        <p className='bg-[#fb792b] text-white border-2 border-[#fb792b] px-4 py-2 font-bold rounded-md cursor-pointer' onClick={handleContinue}>Continue</p>
                    }
                </div>
                
          </div>
          }
          <Footer/>
      </div>
    )
}

export default BookingDetails