import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import api from '../axios'
import PrintIcon from '@mui/icons-material/Print';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import LoginPopup from '../components/LoginPopUp'
import { useContext } from 'react'
import { UserDetailsContext } from '../context/userContext'
import { useEffect,useState } from 'react'
import { StationCodeToStationName } from '../constants';

const TrainCard=({details})=>{
    const [duration,setDuration]=useState()
    const [startTime,setStartTime]=useState()
    const [endTime,setEndTime]=useState()
    const [startDate,setStartDate]=useState()

    const [endDate,setEndDate]=useState()

    function formatDuration(durationMinutes) {
        const hours = Math.floor(durationMinutes / 60);
        const minutes = durationMinutes % 60;
      
        const formattedDuration = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        return formattedDuration;
      }

    useEffect(()=>{
        let times=[]
        if(details.trainDetails.sourceCode==details.bookingDetails.startPlace && details.trainDetails.destinationCode==details.bookingDetails.endPlace){
            times.push(details.trainDetails.startTime)
            for(let station=0;station<details.trainDetails.intermediateStation.length;station++){
                times.push(details.trainDetails.intermediateStation[station].stationTime)
            }
            times.push(details.trainDetails.endTime)
            setStartTime(details.trainDetails.startTime)
            setEndTime(details.trainDetails.endTime)
        }
        else if(details.trainDetails.sourceCode==details.bookingDetails.startPlace){
            setStartTime(details.trainDetails.startTime)
            times.push(details.trainDetails.startTime)
            for(let station=0;station<details.trainDetails.intermediateStation.length;station++){
                times.push(details.trainDetails.intermediateStation[station].stationTime)
                if(details.bookingDetails.endPlace==details.trainDetails.intermediateStation[station].stationCode)
                {
                    setEndTime(details.trainDetails.intermediateStation[station].stationTime)
                    break;
                }
            }
        }
        else if(details.trainDetails.destinationCode==details.bookingDetails.endPlace)
        {
            let isReached=false;
            for(let station=0;station<details.intermediateStation.length;station++){
                if(details.bookingDetails.startPlace==details.trainDetails.intermediateStation[station].stationCode)
                {
                    isReached=true
                    setStartTime(details.trainDetails.intermediateStation[station].stationTime)
                }
                if(isReached){
                    times.push(details.trainDetails.intermediateStation[station].stationTime)
                }
            }
            times.push(details.trainDetails.endTime)
            setEndTime(details.trainDetails.endTime)
        }
        else{
            let isStartReached=false;
            for(let station=0;station<details.trainDetails.intermediateStation.length;station++){
                if(details.bookingDetails.startPlace==details.trainDetails.intermediateStation[station].stationCode)
                {
                    isStartReached=true
                    setStartTime(details.trainDetails.intermediateStation[station].stationTime)
                }
                if(isStartReached){
                    times.push(details.trainDetails.intermediateStation[station].stationTime)
                }
                if(details.bookingDetails.endPlace==details.trainDetails.intermediateStation[station].stationCode)
                {
                    setEndTime(details.trainDetails.intermediateStation[station].stationTime)
                    break;
                }
            }
        }
        let totalDuration=0;
        console.log(times)


       for(let i=1;i<times.length;i++){
        const [startHours, startMinutes] = times[i - 1].split(':').map(Number);
        const [endHours, endMinutes] = times[i].split(':').map(Number);
  
        const startTotalMinutes = startHours * 60 + startMinutes;
        const endTotalMinutes = endHours * 60 + endMinutes;
  

        let durationMinutes;
        if (endTotalMinutes >= startTotalMinutes) {
            durationMinutes = endTotalMinutes - startTotalMinutes;
        } else {
            durationMinutes = (24 * 60 - startTotalMinutes) + endTotalMinutes;
        }
        totalDuration += durationMinutes;
    }   
       const finalDuration = formatDuration(totalDuration);
      
       setDuration(finalDuration)
    },[])


    useEffect(()=>{
        let splitDuration
        let finalHours
        let finalMinutes
        let desiredHours
        let desiredMinutes
        if(duration){
            splitDuration=duration.split(":")
            finalHours=splitDuration[0]
            finalMinutes=splitDuration[1]
        }
        let bookingDate=details.bookingDetails.bookingDate.split("/")
        let date=new Date(bookingDate[1]+"/"+bookingDate[0]+"/"+bookingDate[2]) 
        console.log(details.bookingDetails.bookingDate)
        if(startTime){
            desiredHours = parseInt(finalHours) + parseInt(startTime.split(":")[0]);
            desiredMinutes = parseInt(finalMinutes) + parseInt(startTime.split(":")[1]);

        }    
        var desiredSeconds = 0;
        var desiredMilliseconds = 0;
        console.log(date)
        setStartDate(date)
        date.setHours(desiredHours, desiredMinutes, desiredSeconds, desiredMilliseconds);

        setEndDate(date)

        console.log(date)
    },[duration])
    
    return (
        <div className='border border-2 rounded-sm mb-2 shadow-md'>
            <div className='flex items-center justify-between px-2 py-2 bg-[#F9F9F9]'>
                <p className='font-bold text-md uppercase'>{details.trainDetails.trainName} ({details.trainDetails.trainNumber})</p>
                <p>
                    <PrintIcon/>
                    <DownloadForOfflineIcon/>
                </p>
            </div>
            <div className='p-2 px-4'>
                <div className='flex items-center justify-between'>
                    <div className=''>
                        <p className='font-semibold text-md '>{startTime} | {StationCodeToStationName[details.bookingDetails.startPlace]} ({details.bookingDetails.startPlace})</p>
                        {
                            startDate &&
                            <p>{startDate.toDateString()}</p>
                        }
                    </div>
                    <p>{duration}</p>
                    <div>
                        <p className='font-semibold text-md '>{endTime} | {StationCodeToStationName[details.bookingDetails.endPlace]} ({details.bookingDetails.endPlace})</p>
                       {
                        endDate &&  <p>{endDate.toDateString()}</p>
                       }
                    </div>
                    
                </div>
                <p className='text-green-900 uppercase font-semibold text-sm px-2 py-1 bg-green-200 w-max rounded-sm mt-2'>Status : Booked</p>
            </div>
        </div>
    )
}
const MyBooking = () => {
    const {showLogin,setShowLogin}=useContext(UserDetailsContext)
    const tabTitles=["All Journey","Upcoming Journey","Past Journey"]
    const [tab,setTab]=useState(tabTitles[0])
    const [bookings,setBookings]=useState([])
    const [filteredBookings,setFilteredBookings]=useState([])

    useEffect(()=>{
        const userDetails={
            userId:"sethu_2002"
        }
        api.post('user/bookings',{userDetails}).then((res)=>{
            setBookings(res.data)
            setFilteredBookings(res.data)
        })
    },[])

    const handleTabChange=(tabTitle)=>{
        setTab(tabTitle)

    }

  return (
    <div className='min-h-screen w-full'>
        <Navbar/>
        {
            showLogin &&
            <LoginPopup/>
        }
        <div className='mt-28 p-4'>
            <p className='font-bold text-xl mb-4'>BOOKED TICKET HISTORY</p>
            <p className='text-[#337ab7] font-semibold text-lg mb-4'>Indian Railway, IRCTC or its employees never ask for any personal banking information, including details like Debit/Credit Card number, OTP, ATM PIN, the CVV number, PAN number and date of birth.</p>
            <div className='flex w-full  border-b-2 border-gray gap-x-2 mb-4'>
                {
                    tabTitles.map((tabTitle)=>{
                        return (
                            <p className={`p-2  font-semibold text-normal uppercase cursor-pointer ${tab==tabTitle ? 'border-b-2 border-[#fb792b]':''}`} onClick={()=>handleTabChange(tabTitle)}>{tabTitle}</p>
                        )
                    })
                }
            </div>
            
                {
                    filteredBookings.map((book)=>{
                        return(
                            <TrainCard details={book}/>
                        )
                    })
                }
        </div>
        <Footer/>
    </div>
  )
}

export default MyBooking