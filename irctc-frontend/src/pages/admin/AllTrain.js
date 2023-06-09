import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { createSearchParams, useNavigate } from 'react-router-dom'
import api from '../../axios'


const AllTrain = () => {
    const navigate=useNavigate()
    const [trains,setTrains]=useState([])

    useEffect(()=>{
        api.get("/train/all").then((res)=>{
            console.log(res.data)
            setTrains(res.data)
        })
    },[])

    const handleUpdate=(id)=>{
        navigate({
            pathname:"/train/update",
            search:createSearchParams(
                {
                    id:id
                }
            ).toString()
        })
    }

    const handleDelete=(id)=>{
        api.delete("/train/delete",{data:{id:id}}).then((res)=>{

        })
    }

    const handleNew=()=>{
        navigate('/train/new')
    }
    return (
        <div className='p-4 mt-28'>
            <button className='px-4 py-2 bg-blue-500 rounded-md text-white font-semibold mb-4' onClick={handleNew}>Create New Train</button>
            {
                trains.map((train)=>{
                    return (
                        <div className='flex items-center content-space-between space-x-2 mb-4'>
                            <div>
                            {
                                train.trainName
                            }
                            </div>
                            <div  className='px-4 py-2 bg-slate-500	rounded-md text-white' onClick={()=>handleUpdate(train._id)}>Update</div>
                            <div className='px-4 py-2 bg-red-500	rounded-md text-white' onClick={()=>handleDelete(train._id)}>Delete</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllTrain