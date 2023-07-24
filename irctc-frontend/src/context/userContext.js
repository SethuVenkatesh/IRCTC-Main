
import React, { createContext, useEffect, useState } from 'react';
import api from '../axios';


export const UserDetailsContext = createContext();

export function UserDetailsProvider({ children }) {
  const [userDetails, setUserDetails] = useState("");

  const [showLogin,setShowLogin]=useState(false)

  useEffect(()=>{
    let irctcId=localStorage.getItem('irctc-id')
    api.post("/user/userDetails",{irctcId}).then((res)=>{
      setUserDetails(res.data)
    })


  },[])

  return (
    <UserDetailsContext.Provider value={{ userDetails, setUserDetails,showLogin,setShowLogin }}>
      {children}
    </UserDetailsContext.Provider>
  );
}
