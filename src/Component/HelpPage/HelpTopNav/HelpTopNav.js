import React from "react";
import "./HelpTopNav.css";
import { Link } from "react-router-dom";
import { FaGlobe } from "react-icons/fa";


function HelpTopNav(){
    return(
        <div className="help">
            <div className="help_main">
                <div className="help_left">
                    <p className="help_ptag">E-Rida</p>
                </div>
                <div className="help_right">
                    <ul className="help_right_ul">
                        <Link to="/language" style={{textDecoration: "none"}}>
                            <li>
                                <FaGlobe/>
                                EN</li>
                        </Link>
                        <Link to="/login" style={{textDecoration: "none"}}>
                            <li>Log in</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HelpTopNav;