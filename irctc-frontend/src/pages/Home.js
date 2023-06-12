import React from 'react'
import Navbar from '../components/Navbar'
import BookingContainer from '../components/BookingContainer'
import ServiceContainer from '../components/ServiceContainer'
import HolidayContainer from '../components/HolidayContainer'
import Footer from '../components/Footer'
import LoginPopup from '../components/LoginPopUp'

import { useContext } from 'react'
import { UserDetailsContext } from '../context/userContext'


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
        <Footer/>
    </div>
  )
}

export default Home