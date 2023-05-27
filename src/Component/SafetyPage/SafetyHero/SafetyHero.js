import React from "react";
import "./SafetyHero.css";
import SafetyUber from "../../../Assets/safety uber.jpg"


function SafetyHero(){
    return(
        <div className="safetyhero">
            <div className="safetyhero_main">
                <div className="safetyhero_main_one">
                    <div className="safetyhero_main_one_left">
                        <h2>Our commitment to safety</h2>
                        <p>We want you to move freely, make the most of your time, 
                            and be connected to the people and places that matter most to you. 
                            That's why we are committed to safety, 
                            from the creation of new standards to the development of technology with the aim of reducing incidents.</p>
                    </div>
                    <div className="safetyhero_main_one_right">
                        <img src={SafetyUber}  />
                    </div>
                </div>
                <div className="safetyhero_main_two">
                    <h2>Helping to keep each other safe during COVID-19</h2>
                    <p>We're actively monitoring the coronavirus (COVID-19) 
                        situation and are continually working to help keep
                         those who rely on our platform healthy and safe.</p>
                    <div className="safetyhero_main_two_sub">
                    <p>Go to Uber's COVID-19 hub</p>
                    <p>Read about our new Door-to-Door Safety Standard</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SafetyHero;