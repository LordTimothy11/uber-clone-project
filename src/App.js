import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Component/Home/Home";
import Login from './Component/LogIn/Login';
import Signup from './Component/SignUp/Signup';
import Ride from './Component/Ride/Ride';
import RiderAccount from './Component/RiderAccount/RiderAccount';
import Otp from './Component/OTP/Otp';
import Language from './Component/Languages/Language';
import SafetyHome from './Component/SafetyPage/SafetyHomePage/SafetyHome';
import HelpHome from './Component/HelpPage/HelpHome/HelpHome';
import RiderInfo from './Component/RiderInfo/RiderInfo';



function App() {
  return (
    <div className='App'>
      <Router>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path='/SafetyHome' element={<SafetyHome />} />
            <Route path='/HelpHome' element={<HelpHome />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Language" element={<Language />} />
            <Route path="/Ride" element={<Ride />} />
            <Route path="/RiderInfo" element={<RiderInfo />} />
            <Route path="/RiderAccount" element={<RiderAccount />} />
            <Route path="/Otp" element={<Otp />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
