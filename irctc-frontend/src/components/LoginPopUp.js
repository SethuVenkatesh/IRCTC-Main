import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useContext } from 'react';
import { UserDetailsContext } from '../context/userContext';
import Captcha from './Captcha';

function LoginPopup() {
    const {showLogin,setShowLogin}=useContext(UserDetailsContext)
  return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-10">
        <div className="relative bg-white p-8 max-w-sm w-full">
          <p className="text-xl uppercase font-semibold tracking-wide pb-2 text-center w-max m-auto text-[#2f4676] tracking-wider border-b-2	border-[#2f4676]">Login</p>
          <span className='absolute right-0 top-0 p-4 cursor-pointer' onClick={()=>setShowLogin(false)}>
              <CloseIcon className='text-[#2f4676]'/>
          </span>
            <div className="mb-4 mt-2">
              <input
                type="text"
                id="email"
                className="w-full border border-gray-300 py-2 px-3 text-gray-700 placeholder-[#2f4676] "
                placeholder="Username"
              />
            </div>
            <div className="mb-2">
              <input
                type="password"
                id="password"
                className="w-full border border-gray-300 py-2 px-3 text-gray-700 placeholder-[#2f4676] "
                placeholder="Password"
              />
            </div>
            <p className='mb-4 uppercase text-xs text-[#1457a7] font-semibold cursor-pointer' onClick={()=>handleForgotAccount() }>Forget Account Details?</p>
            <div className="mb-2">
              <p className='bg-[#213d77] text-white py-2 px-3'>
                <Captcha/>
              </p>
              <input
                type="text"
                id="password"
                className="w-full border border-gray-300 py-2 px-3 text-gray-700 placeholder-[#2f4676] "
                placeholder="Enter Captcha" onChange={handleChange}
              />
            </div>
            <div className='mb-2'>
              <input type='checkbox' className='appearance-none home-check' id='booking-with-otp'/>
              <label for='booking-with-otp' className=""> </label>
              <span className='text-[#082b71] text-base font-semibold'>Login and Booking With OTP</span>
            </div>
            <div
              className="cursor-pointer w-full rounded-lg px-2 py-2 bg-[#fb792b] text-white text-base uppercase font-bold text-center mb-2"
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
