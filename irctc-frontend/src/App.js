import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';  
import { useState } from 'react';
import NewTrain from './pages/admin/NewTrain';
import AllTrain from './pages/admin/AllTrain';
import UpdateTrain from './pages/admin/UpdateTrain';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import BookingPage from './pages/BookingPage';
import { UserDetailsContext } from './context/userContext';
import { useContext } from 'react';
import { RegisterPage } from './pages/RegisterPage';
import ForgotPassword from './pages/ForgotPassword';


function App() {



  return (
    <div >
      <Router>
        <Routes>
          <Route index path='/home' element={<Home />}/>
          <Route index path='/register' element={<RegisterPage />}/>
          <Route index path='/forgot_password' element={<ForgotPassword />}/>
          <Route index path='/booking/train_list' element={<BookingPage />}/>
          <Route path='/train'>
            <Route index path='all' element={<AllTrain/>}/>
            <Route path='new' element={<NewTrain/>}/>
            <Route path='update' element={<UpdateTrain/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
