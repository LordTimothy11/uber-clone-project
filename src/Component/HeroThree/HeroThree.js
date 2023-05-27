import React from "react";
import "./HeroThree.css"
import untitledOne from "../../Assets/Untitled-1.jpg"
import untitledTwo from "../../Assets/Untitled-2.jpg"
import { FaNewspaper, FaHome, FaUserFriends } from "react-icons/fa";





function HeroThree(){
    return(
        <div className="herothree">
            <div className="herothree_one">
                <h2>Focused on safety, wherever you go</h2>
                <div className="herothree_two">
                    <div className="herothree_twoleft">
                        <img className="Image" src={untitledOne} width="90%"  />
                        <h3>
                            Our commitment to your safety
                        </h3>
                        <p>
                            With every safety feature and every standard in our Community Guidelines,
                            we're committed to helping to create a safe environment for our users.
                        </p>
                    </div>

                    <div className="herothree_tworight">
                    <img className="Image" src={untitledTwo} width="95.5%"  />
                        <h3>
                            Setting 10,000+ cities in motion
                        </h3>
                        <p>
                            The app is available in thousands of cities worldwide, 
                            so you can request a ride even when you're far from home.
                        </p>
                    </div>
                    <div>
                    </div>
                </div>
                <div className="herothree_three">
                    <div className="herothree_three_left">
                        <FaUserFriends className="herothree_fa"/>
                        <h3>
                            About us
                        </h3>
                        <p>
                            Find out how we started, what drives us, and how we're reimagining how the world moves.
                        </p>
                        <p className="herothree_three_ptag">
                            Learn more about Uber
                        </p>
                    </div>
                    <div className="herothree_three_mid">
                        <FaNewspaper className="herothree_fa"/>
                        <h3>
                            Newsroom
                        </h3>
                        <p>
                            See announcements about our latest releases, initiatives, and partnerships.
                        </p>
                        <p className="herothree_three_ptag">
                            Go to Newsroom
                        </p>
                    </div>
                    <div className="herothree_three_right">
                        <FaHome className="herothree_fa"/>
                        <h3>
                            Global citizenship
                        </h3>
                        <p>
                            Read about our commitment to making a positive impact in the cities we serve.
                        </p>
                        <p className="herothree_three_ptag">
                            See our Partnerships
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroThree;