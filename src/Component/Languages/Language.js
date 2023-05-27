import React from "react";
import "./Language.css";
import Navbar from "../Navbar/Navbar";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";



function Language(){
    return(
        <div className="language">
            <Navbar />
            <div className="language_icon">
                <Link to="/" style={{textDecoration:"none"}}>
                <IoCloseSharp className="language_top_ioclose"/>
                </Link>
                </div>
            <div className="language_one">
            <div className="language_up">
            <p>Select your preferred language</p>
            </div>
                <div className="language_down">
                    <select>
                    <option>English</option>
                    <option>French</option>
                    <option>Spanish</option>
                    <option>Dutch</option>
                    <option>German</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Language;
