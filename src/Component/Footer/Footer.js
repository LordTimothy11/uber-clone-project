import React from "react";
import "./Footer.css";
import { IoLogoFacebook, IoLogoTwitter, IoLogoYoutube, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io";
import { FaGlobe } from "react-icons/fa";


function Footer(){
    return(
        <div className="footer">
            <div className="footer_one">
                <div className="footer_top">
                    <div className="footer_top_one">
                        <p>E-Rida</p>
                    </div>
                    <div className="footer_top_two">
                        <nav>
                            <a href="HelpHome" style={{textDecoration:"none"}}>Visit Help Centre</a>
                        </nav>
                    </div>
                </div>
                <div className="footer_mid">
                    <div className="footer_mid_one">
                        <h4>Company</h4>
                        <p>About us</p>
                        <p>Our offerings</p>
                        <p>Newsroom</p>
                        <p>Investors</p>
                        <p>Blog</p>
                        <p>Careers</p>
                        <p>AI</p>
                        <p>Gift cards</p>
                    </div>
                    <div className="footer_mid_two">
                        <h4>Products</h4>
                        <p>Ride</p>
                        <p>Drive</p>
                        <p>Eat</p>
                        <p>Uber freight</p>
                    </div>
                    <div className="footer_mid_three">
                        <h4>Global citizenship</h4>
                        <p>Safety</p>
                        <p>Diversity and Inclusion</p>
                    </div>
                    <div className="footer_mid_four">
                        <h4>Travel</h4>
                        <p>Airports</p>
                        <p>cities</p>
                    </div>
                </div>
                <div className="footer_two">
                    <div className="footer_twoleft">
                        <IoLogoFacebook className="footer_iofacebook"/>
                        <IoLogoTwitter className="footer_iotweet"/>
                        <IoLogoYoutube className="footer_ioyoutube"/>
                        <IoLogoLinkedin className="footer_iolinkedin"/>
                        <IoLogoInstagram className="footer_ioinstagram"/>
                    </div>
                    <div className="footer_tworight">
                        <nav>
                            <ul className="footer_tworight_ul">
                            <li>
                                <a href="Language" style={{textDecoration: "none"}}><FaGlobe/> EN</a>
                            </li>
                            <li>Lagos</li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
