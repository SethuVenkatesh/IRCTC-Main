import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';


const Toaster = ({ToastMessage,setToastMsg}) => {
    const [showToast,setShowToast]=useState(true)


    useEffect(()=>{
        let timer1 = setTimeout(() => {
          setShowToast(false)
          setToastMsg("")
        }, 5000);
        return () => {
          clearTimeout(timer1);
        };
    },[showToast])

  return (
    <>
        {
            showToast &&
            <div className='bg-red-900 text-white w-1/4 mb-2 m-auto rounded-t-lg fixed right-[20px] bottom-[10px]'>
                <p className='text-baseline font-semibold px-4 py-3 capitalize'>{ToastMessage}</p>
                <CloseIcon className='absolute top-0 right-0 ' onClick={()=>{
                  setShowToast(false)
                  setToastMsg("")
                }
                }/>
                <p className='h-[4px] bg-red-500 toast-animation'></p>
            </div>
        }
    </>
  )
}

export default Toaster