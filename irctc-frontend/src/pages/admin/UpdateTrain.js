import React, { useState } from 'react'
import { useSearchParams,useNavigate} from 'react-router-dom'
import InputContainer from '../../components/InputContainer'
import { useEffect } from 'react'
import api from '../../axios'
import DeleteIcon from '@mui/icons-material/Delete';


const StationInput=({details,index,intermediateStation,setIntermediateStation})=>{
  console.log(details)
  const [stationDetails,setStationDetails]=useState({})
  console.log("Station details")
  console.log(stationDetails)
  const handleInputChange=(e)=>{
    setStationDetails({...stationDetails,[e.target.name]:e.target.value})
    const allStations=[...intermediateStation];
    allStations[index]={...stationDetails,[e.target.name]:e.target.value}
    setIntermediateStation(allStations)
  }
  const handleDelete=()=>{
    const allStations=[...intermediateStation];
    const filteredStations=allStations.filter((_, i) => i !== index)
    setIntermediateStation(filteredStations)
  }
  useEffect(()=>{
    setStationDetails({
      stationCode:details.stationCode,
      stationTime:details.stationTime
    })
  },[details])
  return (
    <div className='flex items-center gap-x-2 mb-2'>
      <input className='border border-gray-400 px-4 py-2 rounded-md focus:border-blue-500 outline-none ' placeholder='Station Code' type='text' name='stationCode' value={stationDetails.stationCode} onChange={handleInputChange}/>
      <input className='border border-gray-400 px-4 py-2 rounded-md focus:border-blue-500 outline-none ' placeholder='Station Time' type='time' name='stationTime' value={stationDetails.stationTime} onChange={handleInputChange}/>
      <p className='text-white p-2 rounded-md bg-red-500 cursor-pointer' onClick={handleDelete}>
        <DeleteIcon/>
      </p>
    </div>
  )
}

const SeatingInput=({details,index,seatings,setSeatings})=>{
  const [seatingDetails,setSeatingDetails]=useState({
    
  })
  const handleInputChange=(e)=>{
      setSeatingDetails({...seatingDetails,[e.target.name]:e.target.value})
      const allSeatings=[...seatings]
      allSeatings[index]={...seatingDetails,[e.target.name]:e.target.value}
      setSeatings(allSeatings)
  }
  const handleDelete=()=>{
    const allClass=[...seatings];
    const filteredClass=allClass.filter((_, i) => i !== index)
    setSeatings(filteredClass)
  }
  useEffect(()=>{
    setSeatingDetails({
      trainClass:details.trainClass,
      totalSeats:details.totalSeats,
      ticketPrice:details.ticketPrice
    })
  },[details])
  return (
    <div className='flex gap-x-2 items-center'>
        <p>{details.trainClass}</p>
        <div className='relative mb-4'>
            <input type='text' id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  name='ticketPrice' value={seatingDetails.ticketPrice} onChange={handleInputChange} />
            <label for="floating_outlined" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 pointer-events-none"> Amount For Each Seat</label>
        </div>
        <div className='relative mb-4'>
            <input type='text' id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  name='totalSeats' value={seatingDetails.totalSeats} onChange={handleInputChange}/>
            <label for="floating_outlined" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 pointer-events-none">Number of Seats</label>
        </div>
        <p className='text-white p-2 rounded-md bg-red-500 cursor-pointer' onClick={handleDelete}>
          <DeleteIcon/>
        </p>
    </div>
  )
}

const UpdateTrain = () => {
    const [searchparams]=useSearchParams()
    const [trainId,setTrainId]=useState(searchparams.get("id"))
    const [train,setTrain]=useState()
    const [seatings,setSeatings]=useState([])
    const [intermediateStation,setIntermediateStation]=useState([])
    const [checkboxes,setCheckboxes]=useState({
      sunday:false,
      monday:false,
      tuesday:false,
      wednesday:false,
      thursday:false,
      friday:false,
      saturday:false
    })

    const navigate=useNavigate()
    console.log(searchparams.get("id"))
    useEffect(()=>{
        api.get("/train/findOne",{
          params: {
            trainId: trainId,
          }
        }).then(res=>{
          console.log(res.data)
          setTrain(res.data)
          setSeatings(res.data.seatings)
          setIntermediateStation(res.data.intermediateStation)
          setCheckboxes(res.data.availableDays)
        })
    },[])

    const allClass=["Anubhuti Class (EA)","AC First Class (1A)",'Vistadome AC (EV)',"Exec. Chair Car (EC)","AC 2 Tier (2A)","First Class (FC)","AC 3 Tier (3A)","AC 3 Economy (3E)","Vistadome Chair Car (VC)","AC Chair Car (CC)","Sleeper (SL)","Vistadome Non AC (VS)","Second Sitting (2s)"];
    const [selectedClass,setSelectedClass]=useState(allClass[0])

  

  const handleAddStation=()=>{
    setIntermediateStation([...intermediateStation,{}])
  }

  
  const handleAddClass=()=>{
    setSeatings([...seatings,{"trainClass":selectedClass}])
  }

  const handleCheckbox=(e)=>{
    const { name, checked } = e.target;
    setCheckboxes(prevCheckboxes => ({
      ...prevCheckboxes,
      [name]: checked
    }));
  }


  const handleUpdate=()=>{
    api.patch("/train/update",{train}).then((res)=>{
      console.log(res.data)
    })
    navigate("/train/all")

  }
  return (
    train &&
    <div className='container p-4'>
      <InputContainer labelName="Train Name" type="text" value={train.trainName} name="trainName" setTrain={setTrain} train={train}/>
      <InputContainer labelName="Train Number" type="text" value={train.trainNumber} name="trainNumber" setTrain={setTrain} train={train}/>
      <InputContainer labelName="Source Station Code" type="text" value={train.sourceCode} name='sourceCode' setTrain={setTrain} train={train}/>
      <InputContainer labelName="Destination Station Code" type="text" value={train.destinationCode} name='destinationCode' setTrain={setTrain} train={train}/>
      <InputContainer labelName="Start Time" type="time" value={train.startTime} name='startTime' setTrain={setTrain} train={train}/>
      <InputContainer labelName="End Time" type="time" value={train.endTime} name='endTime' setTrain={setTrain} train={train}/>
      {
        intermediateStation.length>0 && 
        <div className=''>
          <p className='text-gray-700 uppercase font-semibold text-basline text-center'>intermediate stations</p>
          {
            intermediateStation.map((station,index)=>{
              return(
                <StationInput details={station} key={index} index={index} intermediateStation={intermediateStation} setIntermediateStation={setIntermediateStation}/>
              )
            })
          }
        </div>
      }
      <p className='px-4 py-2 text-white rounded-md bg-blue-600 text-center text-base font-semibold cursor-pointer mb-2' onClick={handleAddStation}>+ Add intermediate station</p>
        {
          seatings.map((seatingDetails,index)=>{
            return(
              <SeatingInput details={seatingDetails} key={index} index={index} seatings={seatings} setSeatings={setSeatings}/>
            )
          })
        }
      <div className='mb-4'>
        <select className='px-4 py-2 border border-gray-300 bg-transparent outline-none mr-4' onChange={(e)=>setSelectedClass(e.target.value)}>
          {
            allClass.map((optionName)=>{
              return(
                <option className=''>{optionName}</option>
              )
            })
          }
        </select>
        
        <button className='px-4 py-2 rounded-md bg-sky-500 text-white' onClick={handleAddClass}>Add</button>
      </div>
 
      <div className='px-2 py-2 flex items-center gap-x-4'>
        <p className='text-medium font-medium text-gray-600 '>Select Available Days:</p>
        <div className='flex gap-x-2 border-r border-gray-500 pr-2'>
          <input type='checkbox' name='sunday' checked={checkboxes.sunday} onChange={handleCheckbox} />
          <label>Sunday</label>
        </div>
        <div className='flex gap-x-2 border-r border-gray-500 pr-2'>
          <input type='checkbox' name='monday' checked={checkboxes.monday} onChange={handleCheckbox}/>
          <label>Monday</label>
        </div>
        <div className='flex gap-x-2 border-r border-gray-500 pr-2'>
          <input type='checkbox' name='tuesday' checked={checkboxes.tuesday} onChange={handleCheckbox}/>
          <label>Tuesday</label>
        </div>
        <div className='flex gap-x-2 border-r border-gray-500 pr-2'>
          <input type='checkbox' name='wednesday' checked={checkboxes.wednesday} onChange={handleCheckbox}/>
          <label>Wednesday</label>
        </div>
        <div className='flex gap-x-2 border-r border-gray-500 pr-2'>
          <input type='checkbox' name='thursday' checked={checkboxes.thursday} onChange={handleCheckbox}/>
          <label>Thursday</label>
        </div>
        <div className='flex gap-x-2 border-r border-gray-500 pr-2'>
          <input type='checkbox' name='friday' checked={checkboxes.friday} onChange={handleCheckbox}/>
          <label>Friday</label>
        </div>
        <div className='flex gap-x-2 border-r border-gray-500 pr-2'>
          <input type='checkbox' name='saturday' checked={checkboxes.saturday} onChange={handleCheckbox}/>
          <label>Saturday</label>
        </div>
      </div>
      <button className='px-4 py-2 text-white rounded-md bg-blue-500' onClick={handleUpdate}>Update</button>
    </div>
  )
}

export default UpdateTrain