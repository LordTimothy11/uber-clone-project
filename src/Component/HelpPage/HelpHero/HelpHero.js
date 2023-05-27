import React from "react";
import "./HelpHero.css";
import {FaBiking, FaCar, FaSuitcase, FaTruckMoving, FaWineBottle, FaWineGlass} from "react-icons/fa"
import {ImSpoonKnife, ImBriefcase} from "react-icons/im"
import {TbSteeringWheel} from "react-icons/tb"



function HelpHero(){
    return(
        <div className="helphero">
            <div className="helphero_top">
                <h1>Welcome to E-Rida Support</h1>
                <div className="helphero_help">
                    <p>How can we Help?</p>
                </div>
                <div className="helphero_bottom">
                    <div className="helphero_bottom_one">
                        <FaCar className="helpcar"/>
                        <p>Riders</p>
                    </div>
                    <div className="helphero_bottom_one">
                        <TbSteeringWheel className="help_tbsteering"/>
                        <p>Driving & Delivering</p>
                    </div>
                    <div className="helphero_bottom_one">
                        <ImSpoonKnife className="help_imspoonknife"/>
                        <p>E-Rida Eats</p>
                    </div>
                    <div className="helphero_bottom_one">
                        <FaWineBottle className="help_fawinebottle"/><FaWineGlass className="help_fawineglass"/>
                        <p>Merchants & Restaurants</p>
                    </div>
                    <div className="helphero_bottom_one">
                        <FaBiking className="help_fabiking"/>
                        <p>Bikes & Scooters</p>
                    </div>
                    <div className="helphero_bottom_one">
                        <ImBriefcase className="help_imbriefcase"/>
                        <p>Business</p>
                    </div>
                    <div className="helphero_bottom_one">
                        <FaTruckMoving className="help_fatruck"/>
                        <p>Freight</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HelpHero;
