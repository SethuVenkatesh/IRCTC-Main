import React from 'react'
import Navbar from '../components/Navbar'
import BookingContainer from '../components/BookingContainer'
import ServiceContainer from '../components/ServiceContainer'
import HolidayContainer from '../components/HolidayContainer'
import Footer from '../components/Footer'
import LoginPopup from '../components/LoginPopUp'
import Loader from '../components/common/Loader'

import { useContext } from 'react'
import { UserDetailsContext } from '../context/userContext'

import Toaster from '../components/common/Toastifier'

const Home = () => {
  const {showLogin,setShowLogin}=useContext(UserDetailsContext)
  return (
    <div className='min-h-screen w-full'>
        <Navbar/>
        <BookingContainer/>
        {
          showLogin &&
          <LoginPopup/>
        }
        <ServiceContainer/>
        <HolidayContainer/>
        <Toaster ToastMessage="IRCTC operates Bharat Gaurav Tourist Train having AC III-Tier accommodation on train specially designed to promote domestic tourism in India. This train runs on various theme based circuits covering pilgrimage and heritage destinations in its itinerary on a 5 days to 20 days trip and showcase India’s rich cultural heritage."/>
        <Loader/>
        <Footer/>
    </div>
  )
}

export default Home