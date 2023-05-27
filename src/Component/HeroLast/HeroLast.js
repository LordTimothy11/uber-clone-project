import React from "react";
import "./HeroLast.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


function HeroLast(){
    return(
        <div className="herolast">
            <div className="herolast_left">
                <h2>
                    Sign up to drive
                    <FaArrowRight className="herolast_faarrow"/>
                </h2>
            </div>
            <div className="herolast_right">
                <Link to="/ride" style={{textDecoration:"none"}}>
                <h2>
                    Sign up to ride
                    <FaArrowRight className="herolast_faarrow"/>
                </h2>
                </Link>.
            </div>
        </div>
    )
}

export default HeroLast;
