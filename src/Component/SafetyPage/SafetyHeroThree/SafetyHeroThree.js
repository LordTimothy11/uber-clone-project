import React from "react";
import "./SafetyHeroThree.css";
import DriverSafety from "../../../Assets/driver safety.jpg";
import RiderSafety from "../../../Assets/rider safety.jpg"



function SafetyHeroThree(){
    return(
        <div className="safetyherothree">
            <div className="safetyherothree_main">
            <h2>How safety is built into your experience</h2>
            <div className="safetyherothree_one">
                    <div className="safetyherothree_three_left">
                        <h3>
                            Safety features in the app
                        </h3>
                        <p>
                            Share your trip details with loved ones. Track your trip during your ride. 
                            Our technology helps put peace of mind at your fingertips.
                        </p>
                    </div>
                    <div className="safetyherothree_three_mid">
                        <h3>
                            An inclusive community
                        </h3>
                        <p>
                            Millions of riders and drivers share a set of Community Guidelines, 
                            holding each other accountable to do the right thing.
                        </p>
                    </div>
                    <div className="safetyherothree_three_right">
                        <h3>
                            Support at every turn
                        </h3>
                        <p>
                            A specially trained team is available 24/7. 
                            Reach them in the app, day or night,
                            with any questions or safety concerns.
                        </p>
                    </div>
                </div>
            </div>
            <div className="safetyherothree_mainthree">
                <h2>Building safer journeys for everyone</h2>
            <div className="safetyherothree_subthree">
                    <div className="safetyherothree_subthreeleft">
                        <img src={DriverSafety} alt="driver safety"/>
                        <h3>
                            Driver safety
                        </h3>
                        <p>
                            Count on 24/7 support to help with any questions or 
                            safety concerns. Share your trip with loved ones. 
                            Our focus is on your safety, 
                            so you can go where the opportunity is.
                        </p>
                        <p className="safetyherothree_sub_ptag">Learn more</p>
                    </div>
                    <div className="safetyherothree_subthreeright">
                    <img src={RiderSafety} alt="Rider safety" />
                        <h3>
                            Rider safety
                        </h3>
                        <p>
                            Millions of rides are requested every day.
                            Every rider has access to safety features built into the app. And every ride has a support team if you need them.
                        </p>
                        <p className="safetyherothree_sub_ptag">Learn more</p>
                    </div>
                    <div>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default SafetyHeroThree;
