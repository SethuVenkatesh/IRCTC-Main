import React from 'react'
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

export const RegisterPage = () => {

    const {showLogin,setShowLogin}=useContext(UserDetailsContext)

  return (
    <div className=''>
        <Navbar/>
        {
            showLogin && <LoginPopup/>
        }
        <p className='mt-28'></p>
        <div className='bg-white'>
            Register Container
        </div>      
        <div className='mt-4 bg-gradient-to-l from-[#9b4b90] to-[#2c215d] p-4 items-center justify-around capitalize flex  '>
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
