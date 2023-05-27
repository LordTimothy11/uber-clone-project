import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Reuseable/Button";
import "./Hero.css";
import { FaCar, FaSignal } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";




function Hero(){
    return(
        <div className="hero">
            <div className="hero_one">
                <div className="hero_top">
                    <div>
                        <FaSignal className="hero_fasignal"/>
                    <p>Drive or deliver</p>
                    </div>
                    <div>
                        <ImSpoonKnife className="hero_imspoonknife"/>
                    <p>Eat</p>
                    </div>
                    <div>
                        <FaCar className="hero_facar"/>
                    <p>Ride</p>
                    </div>
                </div>
                <div className="hero_bottom">
                <h1>Get in the driver's seat and get paid</h1>
                    <div className="hero_bottom_one">
                        <p>Drive on the plattform with the largest network of active riders.</p>
                    </div>
                    <div className="hero_bottom_two">
                        <Link to="/SignUpToDrive">
                        <Button 
                            name="Sign up to drive"
                            width="30%"
                            height="46px"
                            fontSize="medium"
                            fontWeight="bold"
                            color="white"
                            border="none"
                            bgColor="black"
                            borderTopLeft="10px"
                            borderBottomLeft="10px"
                            borderBottomRight="10px"
                            borderTopRight="10px"
                        />
                        </Link>
                        </div>
                        <div className="hero_bottom_three">
                        <a href="">Learn more about driving and delivery.</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;