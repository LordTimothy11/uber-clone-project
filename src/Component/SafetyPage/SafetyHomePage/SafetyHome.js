import React from "react";
import "./SafetyHome.css";
import Navbar from "../../Navbar/Navbar";
import SafetyHero from "../SafetyHero/SafetyHero";
import SafetyHeroThree from "../SafetyHeroThree/SafetyHeroThree";
import SafetyBlue from "../SafetyBlue/SafetyBlue";
import SafetyLastHero from "../SafetyLastHero/SafetyLastHero";
import Footer from "../../Footer/Footer"


function SafetyHome(){
    return(
        <div className="safetyhome">
            <Navbar/>
            <SafetyHero/>
            <SafetyHeroThree/>
            <SafetyBlue/>
            <SafetyLastHero/>
            <Footer/>
        </div>
    )
}

export default SafetyHome;
