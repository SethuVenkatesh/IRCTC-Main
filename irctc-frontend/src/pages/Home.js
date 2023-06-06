import React from 'react'
import Navbar from '../components/Navbar'
import BookingContainer from '../components/BookingContainer'
import ServiceContainer from '../components/ServiceContainer'
import HolidayContainer from '../components/HolidayContainer'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div className='min-h-screen w-full'>
        <Navbar/>
        <BookingContainer/>
        <ServiceContainer/>
        <HolidayContainer/>
        <Footer/>
        
    </div>
  )
}

export default Home