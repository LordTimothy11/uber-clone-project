import React from "react";
import "./SafetyLastHero.css";
import Partnering from "../../../Assets/partnering.jpg"
import { TbSteeringWheel } from "react-icons/tb"
import { FaCar } from "react-icons/fa";


function SafetyLastHero(){
    return(
        <div className="safetylasthero">
            <div className="safetylasthero_main">
                <div className="safetylasthero_one">
                    <div className="safetylasthero_left">
                        <img src={Partnering} />
                    </div>
                    <div className="safetylasthero_right">
                        <h3>Partnering to make a difference</h3>
                        <p>
                            Our commitment to safety goes beyond your ride. 
                            We have teamed up with leading experts—from public safety officials to anti-violence 
                            organizations—to help make roads and cities safer for all.
                        </p>
                        <div className="safetylasthero_right_sub">
                            <p>Learn more</p>
                        </div>
                    </div>
                </div>
                <div className="safetylasthero_two">
                    <div className="safetylasthero_two_left">
                        <TbSteeringWheel className="safety_icon"/>
                        <h3>Driver safety</h3>
                        <p>
                            Drive when and where you want with confidence.
                        </p>
                        <div className="safetylasthero_two_sub_ptag">
                            <p>Learn more</p>
                        </div>
                    </div>
                    <div>
                        <FaCar className="safety_icon"/>
                        <h3>Rider safety</h3>
                        <p>
                            Go anytime and get there comfortably.
                        </p>
                        <div className="safetylasthero_two_sub_ptag">
                            <p>Learn more</p>
                        </div>
                    </div>
                </div>
                <div className="safetylasthero_last">
                    <p>*Certain requirements and features 
                        vary by region and may be unavailable.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default SafetyLastHero;
