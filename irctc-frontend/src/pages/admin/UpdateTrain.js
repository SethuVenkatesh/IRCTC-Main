import React, { useState } from 'react'
import { useSearchParams,useNavigate} from 'react-router-dom'
import InputContainer from '../../components/InputContainer'
import { useEffect } from 'react'
import api from '../../axios'
const UpdateTrain = () => {
    const [searchparams]=useSearchParams()
    const [trainId,setTrainId]=useState(searchparams.get("id"))
    const [train,setTrain]=useState()
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
        })
    },[])

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
      <InputContainer labelName="Source Place" type="text" value={train.source} name='source' setTrain={setTrain} train={train}/>
      <InputContainer labelName="Destination Place" type="text" value={train.destination} name='destination' setTrain={setTrain} train={train}/>
      <InputContainer labelName="Start Time" type="time" value={train.startTime} name='startTime' setTrain={setTrain} train={train}/>
      <InputContainer labelName="End Time" type="time" value={train.endTime} name='endTime' setTrain={setTrain} train={train}/>
      <InputContainer labelName="Number of Stations" type="text" value={train.numberOfStations} name='numberOfStations' setTrain={setTrain} train={train}/>
      <InputContainer labelName="List of Stations" type="text" value={train.listOfStations} name='listOfStations' setTrain={setTrain} train={train}/>
      <InputContainer labelName="Seater Price" type="text" value={train.seater.price} name='seaterPrice' setTrain={setTrain} train={train}/>
      <InputContainer labelName="Seater Seats" type="text" value={train.seater.seats} name='seaterSeats' setTrain={setTrain} train={train}/>
      <InputContainer labelName="Sleeper Price" type="text" value={train.sleeper.price} name='sleeperPrice' setTrain={setTrain} train={train}/>
      <InputContainer labelName="Sleeper Seats" type="text" value={train.sleeper.seats} name='sleeperSeats' setTrain={setTrain} train={train}/>
      <InputContainer labelName="Three Tire Price" type="text" value={train.threeTireAC.price} name='threeTireACPrice' setTrain={setTrain} train={train}/>
      <InputContainer labelName="Three Tire Seats" type="text" value={train.threeTireAC.seats} name='threeTireACSeats' setTrain={setTrain} train={train}/>
      <InputContainer labelName="Two Tire Price" type="text" value={train.twoTireAC.price} name='twoTireACPrice' setTrain={setTrain} train={train}/>
      <InputContainer labelName="Two Tire Seats" type="text" value={train.twoTireAC.seats} name='twoTireACSeats' setTrain={setTrain} train={train}/>
      <InputContainer labelName="Single Tire Price" type="text" value={train.singleTireAC.price} name='singleTireACPrice' setTrain={setTrain} train={train}/>
      <InputContainer labelName="Single Tire Seats" type="text" value={train.singleTireAC.seats} name='singleTireACSeats' setTrain={setTrain} train={train}/>
      <button className='px-4 py-2 text-white rounded-md bg-blue-500' onClick={handleUpdate}>Update</button>
    </div>
  )
}

export default UpdateTrain