import React from "react";
import "./Language.css";
import Navbar from "../Navbar/Navbar";



function Language(){
    return(
        <div className="language">
            <Navbar />
            <div className="language_one">
            <div className="language_up">
            <p>Select your preferred language</p>
            </div>
                <div className="language_down">
                    <p>English</p>
                </div>
            </div>
        </div>
    );
}

export default Language;
