import React from "react";
import "./HeroFour.css";
import { FaArrowRight } from "react-icons/fa";


function HeroFour(){
    return(
        <div className="herofour">
            <div className="herofour_one">
            <h2>
                There's more to love in the apps
            </h2>
                <div className="herofour_two">
                    <div className="herofour_twoleft">
                        <div className="herofour_subtwoleft">
                            <div className="herofour_subtwo">
                            <h3>
                                E-Rida
                            <FaArrowRight className="herofour_faarrow"/>
                            </h3>
                            </div>
                        </div>
                        <div className="herofour_subtworight">
                                <p>
                                    Download the Driver app
                                    <FaArrowRight className="faarrowright"/>
                                </p>
                        </div>

                    </div>
                    <div className="herofour_tworight">
                        <div className="herofour_subtwoleft">
                        <div className="herofour_subtwo_two">
                            <h3>
                                E-Rida
                            </h3>
                            </div>
                        </div>
                        <div className="herofour_subtworight">
                                <p>
                                    Download the Uber app
                                    <FaArrowRight className="faarrowright"/>
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroFour;
