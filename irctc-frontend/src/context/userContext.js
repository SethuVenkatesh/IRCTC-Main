
import React, { createContext, useState } from 'react';

export const UserDetailsContext = createContext();

export function UserDetailsProvider({ children }) {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    // other user details
  });

  const [showLogin,setShowLogin]=useState(false)

  return (
    <UserDetailsContext.Provider value={{ userDetails, setUserDetails,showLogin,setShowLogin }}>
      {children}
    </UserDetailsContext.Provider>
  );
}
