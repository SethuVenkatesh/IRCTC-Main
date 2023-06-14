import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';


const Toaster = ({ToastMessage}) => {
    const [showToast,setShowToast]=useState(true)


    useEffect(()=>{
        let timer1 = setTimeout(() => setShowToast(false), 5000);
        return () => {
          clearTimeout(timer1);
        };
    },[showToast])

  return (
    <>
      <div onClick={()=>setShowToast(true)}>show toast</div>
        {
            showToast &&
            <div className='bg-blue-900 text-white relative  w-1/4 mb-2 m-auto rounded-t-lg'>
                <p className='text-baseline font-semibold px-4 py-3'>{ToastMessage}</p>
                <CloseIcon className='absolute top-0 right-0 ' onClick={()=>setShowToast(false)}/>
                <p className='h-[4px] bg-blue-500 toast-animation'></p>
            </div>
        }
    </>
  )
}

export default Toaster