import { Link } from "react-router-dom";
import './Otp.css'
import React, { useState, useEffect } from 'react';


function Otp() {
    return (
        <div className="otp-container">
                <div className="otp-form-container">
                    <div className="otp-right-side">
                        <h1 className='otp-text'>
                            Enter the 4-digit code sent to you at:
                        </h1>
                    </div>
                    <div className="otp-form-div">
                    <form>
                        <input
                            type="text"
                            // onClick={verify}
                            placeholder="_"
                            required
                            // value={otp}
                            // onChange={handleOtp}
                        />
                        </form>
                        <button 
                            to="/LogIn" 
                            // onClick={postData} 
                            className="otp-btn">
                            <Link to="/LogIn">
                            {""}
                            Continue
                        </Link>
                    </button>
                    </div>
                </div>
        </div>
    );
}

export default Otp;