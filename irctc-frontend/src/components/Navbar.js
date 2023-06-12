import React, { useEffect, useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from 'react';
import { UserDetailsContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
 const monthString=["Jan",'Feb','Mar',"Apr",'May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
 const topLabel=["login","register","agent login",'contact us','ask disha','alerts']
 const bottomLabel=["trains","buses","flights",'hotels','holidays','loyalty','meals','promotions','more']
 const trainDropdown=["Book Ticket","Foreign Tourist Booking","Connecting Journey Booking",'IRCTC Trains','Cancel Ticket','PNR enquiry','Track Your Train','Train Schedule','FTR Coach/Train Booking'];
 const [currentTime,setCurrentTime]=useState()
 const [currentDate,setCurrentDate]=useState()
    const {showLogin,setShowLogin}=useContext(UserDetailsContext)
    const navigate=useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
        var today = new Date()
        var date = (today.getDate()<=9 ? '0'+today.getDate():today.getDate())+ '-' + (monthString[today.getMonth()]) + '-' + today.getFullYear();
        var time = (today.getHours()<=9 ? '0'+today.getHours():today.getHours()) + ':' + (today.getMinutes()<=9 ? '0'+today.getMinutes():today.getMinutes()) + ':' + (today.getSeconds()<=9 ? '0'+today.getSeconds():today.getSeconds());
        setCurrentDate(date)
        setCurrentTime(time)
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  const handleLogin=()=>{
    setShowLogin(true)
  }

  const handleRegister=()=>{
    navigate("/register")
    console.log("register")
  }

  return (
    <div className='p-4 fixed top-0 flex items-center justify-between shadow bg-rgba-white-50 backdrop-filter backdrop-blur-md right-0 left-0 z-10'>
        <img src='https://www.irctc.co.in/nget/assets/images/secondry-logo.png' alt='Not Found'/>
        <div className='flex flex-1 px-20 items-center justify-center flex-col gap-y-4 nav-menu'>
            <div className='flex gap-x-2 -pl-24 -ml-60 '>
                {
                    topLabel?.map((label)=>{
                        if(label=='login'){
                            return(
                                <p className={`uppercase text-sm px-2 py-1 cursor-pointer bg-[#213d77] text-white`} onClick={()=>handleLogin()}>
                                    {label}
                                </p>
                            )
                        }
                        else if(label=='register'){
                            return (
                                <p className={`uppercase text-sm px-2 py-1 cursor-pointer`} onClick={()=>handleRegister()}>
                                    {label}
                                </p>
                            )
                        }
                        else{
                            return(
                                <p className={`uppercase text-sm px-2 py-1 cursor-pointer ${label=='login' ? "bg-[#213d77] text-white":`${label=='alerts' ? 'bg-gray-200':' '}`} `}>
                                    {label}
                                </p>
                            )
                        }
                    })
                }
                <p className='px-4 py-1 text-sm font-semibold'>{currentDate} [{currentTime}]</p>
            </div>
            <div className='flex gap-x-2' >
                <HomeIcon className='cursor-pointer'/>
                <div className='relative group/main'>
                    <p className='uppercase text-sm px-2 py-1 bg-[#213d77] text-white font-semibold cursor-pointer'>irctc exclusive</p>
                    <div className='absolute hidden group-hover/main:block left-0 top-100 rounded-sm w-[220px] bg-white-400 shadow-md z-10 bg-gray-50'>
                        <a className='px-4 py-4 no-undeline hover:bg-gray-200 flex gap-x-2 justify-between group relative'>
                            <img src='https://www.irctc.co.in/nget/assets/images/logo.png' alt='failed loading' className='w-[30px] h-[30px]'/>
                            <span>IRCTC eWallet</span>
                            <ArrowRightIcon/>
                            <a className='hidden absolute group-hover:block shadow left-full top-0 w-max'>
                                <p className='px-4 py-2 bg-gray-50 hover:bg-gray-200 '>About IRCTC eWallet</p>
                                <p className='px-4 py-2 bg-gray-50 hover:bg-gray-200 '>IRCTC eWallet User Guide</p>
                            </a>
                        </a>
                        <a className='px-4 py-4 no-underline list-none hover:bg-gray-200 flex gap-x-2'>
                            <img src='https://www.irctc.co.in/nget/assets/images/logo.png' alt='failed loading' className='w-[30px] h-[30px]'/>
                            <span>IRCTC IPay</span>
                        </a>
                        <a className='px-4 py-4 no-underline list-none hover:bg-gray-200 flex gap-x-2 justify-between ' >
                            <img src='https://www.irctc.co.in/nget/assets/images/icons/gyfty.png' alt='failed loading' className='w-[30px] h-[30px]'/>
                            <span>e-Gift Vouchers</span>
                            <ArrowRightIcon/>
                            <a className='hidden absolute group-hover:block shadow left-full top-0 w-max'>
                                <p className='px-4 py-2 bg-gray-50 hover:bg-gray-200 '>GIFT Vouchers</p>
                                <p className='px-4 py-2 bg-gray-50 hover:bg-gray-200 '>OTT Vouchers</p>
                            </a>
                        </a>
                    </div>
                </div>
                {
                    
                    bottomLabel?.map((label)=>{
                        if(label=='trains')
                        {
                            return(
                            <div className='relative group/main'>
                                <p className="relative  uppercase text-sm px-2 py-1 font-medium cursor-pointer before:content-[''] before:w-full before:bg-amber-500 before:h-1 before:absolute before:left-0 before:bottom-0 text-amber-500">
                                    {label}
                                </p>
                                <div className='absolute top-full shadow-lg rounded-lg hidden group-hover/main:block w-max z-10 bg-gray-50'>
                                    {
                                        trainDropdown.map((trainList)=>{
                                            if(trainList=='IRCTC Trains')
                                            {
                                                return(
                                                    <div className='group relative'>
                                                        <div  className=' px-4 py-2 hover:bg-slate-200 flex justify-between '>
                                                            <p >{trainList}</p>
                                                            <ArrowRightIcon></ArrowRightIcon>
                                                        </div>
                                                        <a className='hidden absolute group-hover:block shadow left-full top-0 w-max'>
                                                            <p className='px-4 py-2 bg-gray-50 hover:bg-gray-200 '>Group Booking</p>
                                                            <p className='px-4 py-2 bg-gray-50 hover:bg-gray-200 '>Travel Insurance Claim Process</p>
                                                        </a>
                                                    </div>
                                                )
                                            }
                                            if(trainList=='Cancel Ticket')
                                            {
                                                return(
                                                    <div className='group relative'>
                                                        <div  className=' px-4 py-2 hover:bg-slate-200 flex justify-between '>
                                                            <p >{trainList}</p>
                                                            <ArrowRightIcon></ArrowRightIcon>
                                                        </div>
                                                        <a className='hidden absolute group-hover:block shadow left-full top-0 w-max'>
                                                            <p className='px-4 py-2 bg-gray-50 hover:bg-gray-200 '>E-tickets</p>
                                                            <p className='px-4 py-2 bg-gray-50 hover:bg-gray-200 '>Counter Tickets</p>
                                                        </a>
                                                    </div>
                                                )
                                            }
                                            return (

                                                <p className=' px-4 py-2 hover:bg-slate-200'>{trainList}</p>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            )
                        }
                        else{
                            return(
                                <p className={`relative uppercase text-sm px-2 py-1 font-medium cursor-pointer text-gray-900`}>
                                    {label}
                                 </p>
                            )
                        }
                    })
                }
            </div>
        </div>
        <div className='flex items-center justify-center gap-x-4'>
            <img src='https://www.irctc.co.in/nget/assets/images/logo.png' alt='Not Found'/>
            <div className='mobile-menu rounded-lg bg-gray-200 w-[40px] h-[40px] flex items-center justify-center text-2xl'>
                <MenuIcon />
            </div>
        </div>
    </div>
  )
}

export default Navbar