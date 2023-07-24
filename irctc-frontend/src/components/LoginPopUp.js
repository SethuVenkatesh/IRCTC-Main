import React, { useState,useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useContext } from 'react';
import { UserDetailsContext } from '../context/userContext';
import {generateCaptcha} from '../components/Captcha'
import RefreshIcon from '@mui/icons-material/Refresh';
import Toaster from './common/Toastifier';
import api from '../axios';
import Loader from './common/Loader';
import { useNavigate } from 'react-router-dom';

function LoginPopup() {

  const navigate=useNavigate()
    const {showLogin,setShowLogin}=useContext(UserDetailsContext)
    const {Login, setUserDetails}=useContext(UserDetailsContext)

    const [loading,setLoading]=useState(false)
    const [captcha,setCaptcha]=useState('')
    const [loginData,setLoginData]=useState({
      userName:"",
      password:"",
      captcha:""
    })
    const [toastMsg,setToastMsg]=useState("")
    const handleLogin=async ()=>{
      if(captcha!=loginData.captcha){
        let text=generateCaptcha(6)
        setCaptcha(text)
        setToastMsg("Captcha is invalid")

      }else{
        setLoading(true)
        await api.post('/user/login',{loginData}).then(res=>{
          console.log(res.data)
          if(res.data){
            localStorage.setItem('irctc-id',res.data.userName)
            setUserDetails(res.data)
            setShowLogin(false)
          }
          else{
            setToastMsg(res.data.msg)
            generateCaptcha(6)
          }
        })
        setLoading(false)

      }
    }

    const handleChange=(e)=>{
      setLoginData({...loginData,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
      let text=generateCaptcha(6)
      setCaptcha(text)
    },[])


    console.log(toastMsg)
  return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-10">
        {
          loading && <Loader/>
        }
        <div className="relative bg-white p-8 max-w-sm w-full">
        {
            toastMsg.length>=1&&
            <Toaster ToastMessage={toastMsg} setToastMsg={setToastMsg}/>
        }
          <p className="text-xl uppercase font-semibold tracking-wide pb-2 text-center w-max m-auto text-[#2f4676] tracking-wider border-b-2	border-[#2f4676]">Login</p>
          <span className='absolute right-0 top-0 p-4 cursor-pointer' onClick={()=>setShowLogin(false)}>
              <CloseIcon className='text-[#2f4676]'/>
          </span>
            <div className="mb-4 mt-2">
              <input
                type="text"
                className="w-full border border-gray-300 py-2 px-3 text-gray-700 placeholder-[#2f4676] "
                placeholder="UserName"
                value={loginData.userName}
                name='userName'
                onChange={(e)=>handleChange(e)}
              />
            </div>
            <div className="mb-2">
              <input
                type="password"
                className="w-full border border-gray-300 py-2 px-3 text-gray-700 placeholder-[#2f4676] "
                placeholder="Password"
                value={loginData.password}
                name='password'
                onChange={(e)=>handleChange(e)}
              />
            </div>
            <p className='mb-4 uppercase text-xs text-[#1457a7] font-semibold cursor-pointer' 
              onClick={()=>{
                navigate("/forgot_password")
                setShowLogin(false)
              }}
            >Forget Account Details?</p>
            <div className="mb-2">
              <p className='bg-[#213d77] text-white py-2 px-3 flex items-center justify-between'>
                <p className='select-none '>{captcha}</p>
                <RefreshIcon className='cursor-pointer' onClick={()=>{
                  let text=generateCaptcha(6)
                  setCaptcha(text)
                }}/>
              </p>
              <input
                type="text"
                className="w-full border border-gray-300 py-2 px-3 text-gray-700 placeholder-[#2f4676] "
                placeholder="Enter Captcha"
                value={loginData.captcha}
                name='captcha'
                onChange={(e)=>handleChange(e)}

              />
            </div>
            <div className='mb-2'>
              <input type='checkbox' className='appearance-none home-check' id='booking-with-otp'/>
              <label for='booking-with-otp' className=""> </label>
              <span className='text-[#082b71] text-base font-semibold'>Login and Booking With OTP</span>
            </div>
            <div
              className="cursor-pointer w-full rounded-lg px-2 py-2 bg-[#fb792b] text-white text-base uppercase font-bold text-center mb-2"
              onClick={()=>handleLogin()}
            >
              Sign In
            </div>
            <hr></hr>
            <div className='flex items-center mt-2 gap-x-2'>
              <p className='bg-[#213d77] text-white font-semibold p-2 uppercase w-1/2 text-center cursor-pointer'>Register</p>
              <p className='bg-[#213d77] text-white font-semibold p-2 uppercase w-1/2 text-center cursor-pointer'>Agent Login</p>
            </div>
        </div>
      </div>
  );
}

export default LoginPopup;
