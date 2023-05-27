import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaChevronDown, FaGlobe, FaTh } from "react-icons/fa";


function Navbar() {
    return(
        <div className="nav">
            <div className="nav_option">
                <div className="nav_logo">
                    <Link to="/" style={{textDecoration:"none"}}>E-Rida
                    </Link>
                </div>
                    <div className="left_nav">
                        <nav>
                            <ul>
                                <li>
                                    <a href="" style={{ textDecoration: "none"}}>Company <FaChevronDown className="fachevrondown"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="SafetyHome" style={{textDecoration: "none"}}>Safety</a>
                                </li>
                                <li>
                                    <a href="HelpHome" style={{textDecoration: "none"}}>Help</a>
                                </li>                           
                            </ul>
                        </nav>
                    </div>
                    </div>
                    <div className="nav_btn">
                        <ul className="right_ul">
                        <Link to="/language" style={{textDecoration: "none"}}>
                                <li className="language">
                                    <FaGlobe className="faglobe"/> EN</li>
                        </Link>
                                <Link style={{textDecoration: "none"}}>
                                <li>
                                    <FaTh/> Product</li>
                                </Link>
                            <Link to="/login" style={{textDecoration: "none"}}>
                                <li>Log in</li>
                            </Link>
                        <Link to="/Signup">
                            <button>Sign up</button>
                        </Link>
                        </ul>
                </div>
            </div>
    );
}

export default Navbar;