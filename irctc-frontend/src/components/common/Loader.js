import React from 'react'

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-10">
        <div className='bg-white p-4 rounded-lg relative w-[100px] h-[100px] flex items-center justify-center'>
            <p className='loader-1'></p>
            <p className='loader-2'></p>
            <p className='loader-3'></p>
        </div>
    </div>
  )
}

export default Loader