import React from "react";
import "./HelpFooter.css";
import {IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter, IoLogoYoutube} from "react-icons/io"
import { FaGlobe } from "react-icons/fa";



function HelpFooter(){
    return(
        <div className="helpfooter">
            <div className="helpfooter_one">
                <div className="helpfooter_top">
                    <div className="helpfooter_top_one">
                        <p>E-Rida</p>
                    </div>
                </div>
                <div className="helpfooter_mid">
                    <div className="helpfooter_mid_one">
                        <h4>Company</h4>
                        <p>About us</p>
                        <p>Newsroom</p>
                        <p>Investors</p>
                        <p>Blog</p>
                        <p>Careers</p>
                    </div>
                    <div className="helpfooter_mid_two">
                        <h4>Products</h4>
                        <p>Ride</p>
                        <p>Drive</p>
                        <p>Eat</p>
                        <p>Uber for Business</p>
                        <p>Uber freight</p>
                    </div>
                    <div className="helpfooter_mid_three">
                        <h4>Global citizenship</h4>
                        <p>Safety</p>
                        <p>Diversity</p>
                        <p>Transparency</p>
                    </div>
                    <div className="helpfooter_mid_four">
                        <h4>Innovation</h4>
                        <p>AI</p>
                        <p>Elevate</p>
                    </div>
                </div>
                <div className="helpfooter_two">
                    <div className="helpfooter_twoleft">
                        <IoLogoFacebook className="helpfooter_iofacebook"/>
                        <IoLogoTwitter className="helpfooter_iotweet"/>
                        <IoLogoYoutube className="helpfooter_ioyoutube"/>
                        <IoLogoLinkedin className="helpfooter_iolinkedin"/>
                        <IoLogoInstagram className="helpfooter_ioinstagram"/>
                    </div>
                    <div className="helpfooter_tworight">
                        <nav>
                            <ul className="helpfooter_tworight_ul">
                            <li>
                                <a href="Language" style={{textDecoration: "none"}}><FaGlobe/> EN</a>
                            </li>
                            <li>Lagos</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HelpFooter;
