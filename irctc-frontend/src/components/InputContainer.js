import React from 'react'

const InputContainer = ({labelName,type,value,name,setTrain,train}) => {


  const handleChange=(e)=>{
    const keyToChange=e.target.name;
    console.log(keyToChange)
    if(keyToChange.includes("Seats")){
      if(keyToChange.includes("seater")){
        setTrain({...train,seater:{price:train.seater.price,seats:e.target.value}})
      }
      else if(keyToChange.includes("sleeper")){
        setTrain({...train,sleeper:{price:train.sleeper.price,seats:e.target.value}})

      }
      else if(keyToChange.includes("threeTire")){
        setTrain({...train,threeTireAC:{price:train.threeTireAC.price,seats:e.target.value}})
      }
      else if(keyToChange.includes("twoTire")){
        setTrain({...train,twoTireAC:{price:train.twoTireAC.price,seats:e.target.value}})
      }
      else{
        setTrain({...train,singleTireAC:{price:train.singleTireAC.price,seats:e.target.value}})
      }

    }
    else if(keyToChange.includes("Price")){
      if(keyToChange.includes("seater")){
        setTrain({...train,seater:{price:e.target.value,seats:train.seater.seats}})
      }
      else if(keyToChange.includes("sleeper")){
        setTrain({...train,sleeper:{price:e.target.value,seats:train.sleeper.seats}})

      }
      else if(keyToChange.includes("threeTire")){
        setTrain({...train,threeTireAC:{price:e.target.value,seats:train.threeTireAC.seats}})
      }
      else if(keyToChange.includes("twoTire")){
        setTrain({...train,twoTireAC:{price:e.target.value,seats:train.twoTireAC.seats}})
      }
      else{
        setTrain({...train,singleTireAC:{price:e.target.value,seats:train.singleTireAC.seats}})
      }
    }
    else if(keyToChange==='listOfStations'){
      const stations=e.target.value;
      const arrayStation=stations.split(",")
      setTrain({...train,[e.target.name]:arrayStation})
    }
    else{
      setTrain({...train,[e.target.name]:e.target.value})
    }
    console.log(train)
  }

  return (
    <div className='relative mb-4'>
        <input type={type} id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={value} name={name} onChange={handleChange}/>
        <label for="floating_outlined" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 pointer-events-none">{labelName}</label>
    </div>
  )
}

export default InputContainer