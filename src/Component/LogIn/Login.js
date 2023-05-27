import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Login.css"
import { FaArrowRight } from "react-icons/fa";
import {IoCloseSharp} from "react-icons/io5"


function Login(){
    return(
        <div>
            <Navbar/>
            <div className="login_top">
                <Link to="/" style={{textDecoration:"none"}}>
                <IoCloseSharp className="login_top_ioclose"/>
                </Link>
                </div>
            <div className="login">
                <div className="login_left">
                    <nav>
                        <ul>
                            <li>
                                <a>Sign in to drive & deliver
                                    <FaArrowRight className="login_faarrow"/>
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
                            <li className="login_toorder">
                                <a>Sign in to order delivery with Uber Eat</a>
                                <FaArrowRight className="login_faarrow_toorder"/>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="login_right">
                    <nav>
                    <ul>
                        <li>
                            <Link to="/ride" style={{textDecoration: "none"}}>Sign in to ride
                            <FaArrowRight className="login_faarrow"/>
                            </Link>
                        </li>
                    </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Login;
