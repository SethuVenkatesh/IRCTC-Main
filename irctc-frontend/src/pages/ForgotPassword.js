import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LoginPopup from '../components/LoginPopUp';

import { useContext } from 'react'
import { UserDetailsContext } from '../context/userContext'

import Toaster from '../components/common/Toastifier';
import Loader from '../components/common/Loader';
import api from '../axios';


const ForgotPassword = () => {

  const {showLogin,setShowLogin}=useContext(UserDetailsContext)
  const [toastMsg,setToastMsg]=useState("")
  const [loading,setLoading]=useState(false)
  const [success,setSuccess]=useState(false)

  const [forgotDetails,setForgotDetails]=useState({
    userName:"",
    secretAnswer:"",
    status:false,
    password:"",
    confirmPassword:"",
    userId:"",
  })



  const [user,setUser]=useState(undefined)


  const handleChange=(e)=>{
    setForgotDetails({...forgotDetails,[e.target.name]:e.target.value})
  }

  const handleForgot=async ()=>{
    setLoading(true)
    await api.post("/user/details",{forgotDetails}).then((res)=>{
        if(res.data=='user name is invalid')
        {
            setToastMsg(res.data)
        }
        else{
            setUser(res.data)

            setForgotDetails({...forgotDetails,userId:res.data._id})
        }

    })
    setLoading(false)
  }

  const handleSecurityAnswer=()=>{
    if(forgotDetails.secretAnswer==user.secretAnswer){
        setForgotDetails({...forgotDetails,status:true})
    }
    else{
        setToastMsg("Security Answer is invalid")
    }
  }

  const handleSubmit=async ()=>{
    if(forgotDetails.password!=forgotDetails.confirmPassword){
        setToastMsg("Password and confirm password are not matched")
    }
    else{
        setLoading(true)
        await api.post("user/update",{forgotDetails}).then((res)=>{
            if(res.data=='Password updated successfully'){
                setSuccess(true)
                setToastMsg(res.data)
            }
        })
        setLoading(false)
    }
  }

  return (
    <div className=''>
        <Navbar/>
        {
            showLogin && <LoginPopup/>
        }
        <p className='mt-28'></p>
        {
            toastMsg.length>=1&&
            <Toaster ToastMessage={toastMsg} setToastMsg={setToastMsg} success={success}/>
        }
        {
            loading && <Loader/>
        }
        <div className='p-4'>
            <div className='flex flex-col items-center justify-between gap-y-4 p-4 border-2 border-gray-300 rounded-lg w-1/2 m-auto'>
                <p className='text-lg text-blue-900 font-bold'>Forgot Account Details</p>
                {
                    user ?
                    forgotDetails.status?
                    <>
                        <p className='text-blue-900 font-semibold'>{forgotDetails.userName}</p>
                        <div className='relative mb-4 w-full'>
                            <input type='text' id="floating_outlined-1" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded-md appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={forgotDetails.password} name="password" onChange={handleChange}/>
                            <label for="floating_outlined-1" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-0 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 pointer-events-none">Password</label>
                        </div>
                        <div className='relative mb-4 w-full'>
                            <input type='text' id="floating_outlined-2" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded-md appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={forgotDetails.confirmPassword} name="confirmPassword" onChange={handleChange}/>
                            <label for="floating_outlined-2" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-0 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 pointer-events-none">Confirm Password</label>
                        </div>
                        <p className='px-2 py-2 rounded-md text-white bg-[#fb792b] font-semibold text-baseline cursor-pointer' onClick={handleSubmit}>Submit</p>
                    </>:
                    <>
                        <p className='text-blue-900 font-semibold'>{forgotDetails.userName}</p>
                        <p className='font-semibold  '>{user.secretQuestion}</p>
                        <div className='relative mb-4 w-full'>
                            <input type='text' id="floating_outlined-3" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded-md appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={forgotDetails.secretAnswer} name="secretAnswer" onChange={handleChange}/>
                            <label for="floating_outlined-3" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-0 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 pointer-events-none">Security Answer</label>
                        </div>
                        <p className='px-2 py-2 rounded-md text-white bg-[#fb792b] font-semibold text-baseline cursor-pointer' onClick={handleSecurityAnswer}>Submit</p>
                    </>
                    :
                    <>
                        <div className='relative mb-4 w-full'>
                            <input type='text' id="floating_outlined-4" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded-md appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={forgotDetails.userName} name="userName" onChange={handleChange}/>
                            <label for="floating_outlined-4" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-0 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 pointer-events-none">IRCTC User Name</label>
                        </div>
                        <p className='px-2 py-2 rounded-md text-white bg-[#fb792b] font-semibold text-baseline cursor-pointer' onClick={handleForgot}>Get Security Question</p>

                    </>
                }
            </div>
        </div>
        <div className='mb-2 bg-gradient-to-l from-[#9b4b90] to-[#2c215d] p-4 items-center justify-around capitalize flex  '>
            <span className='text-white'>Get Connected with us on social networks</span>
            <div className='flex gap-x-2 float-right'>
                <div className='p-2 bg-[#1877F2] rounded-full text-white'>
                    <FacebookIcon />
                </div>
                <div className='p-2 bg-[#25D366] rounded-full text-white'>
                    <WhatsAppIcon />
                </div>
                <div className='p-2 bg-[#CD201F] rounded-full text-white'>
                    <YouTubeIcon />
                </div>
                <div className='p-2 bg-[#1DA1F2] rounded-full text-white'>
                    <TwitterIcon />
                </div>
                <div className='p-2 bg-[#E4405F] rounded-full text-white'>
                    <InstagramIcon />
                </div>
                <div className='p-2 bg-[#229ED9] rounded-full text-white'>
                    <TelegramIcon />
                </div>
                <div className='p-2 bg-[#BD081C] rounded-full text-white'>
                    <PinterestIcon />
                </div>
            </div>
        </div>
        <Footer/>
    </div>

  )
}

export default ForgotPassword