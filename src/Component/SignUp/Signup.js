import React from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import "./Signup.css"
import { FaArrowRight } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";



function Signup(){
    return(
        <div>
            <Navbar/>
            <div className="signup_top">
                <Link to="/" style={{textDecoration:"none"}}>
                <IoCloseSharp className="signup_top_ioclose"/>
                </Link>
                </div>
            <div className="signup">
                <div className="signup_left">
                    <nav>
                        <ul>
                            <li>
                                <a>Sign up to drive & deliver
                                    <FaArrowRight className="signup_faarrow"/>
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <li>__________________________</li>
                        </ul>
                        <ul>
                            <li>__________________________</li>
                        </ul>
                        <ul>
                            <li className="signup_toorder">
                                <a>Order delivery with Uber Eats.</a>
                                <FaArrowRight className="signup_faarrow_toorder"/>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="signup_right">
                    <nav>
                    <ul>
                        <li>
                            <Link to="/riderAccount" style={{textDecoration: "none"}}>Create a rider account
                            <FaArrowRight className="signup_faarrow"/>
                            </Link>
                        </li>
                    </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Signup;
