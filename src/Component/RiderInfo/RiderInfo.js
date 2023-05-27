import React from "react";
import "./RiderInfo.css";
import Button from "../../Reuseable/Button";



function RiderInfo(){
    return(
        <div className="riderinfo">
            <p className="riderinfo_ptag">E-Rida</p>
            <div className="riderinfo_main">
                <div className="riderinfo_top">
                    <div className="riderinfo_ptag_two">
                        <p>Confirm your information</p>
                    </div>
                    <div className="riderinfo_main_input">
                    <form>
                        <label>
                        <input
                            className="riderinfo_input"
                            placeholder="Enter first name"
                            name="name"
                            type="text"
                            // onChange={(e) => setEmail(e.target.value)}
                            // value={email}
                            required
                        />
                        </label>
                    </form>
                    <form>
                        <label>
                        <input
                            className="riderinfo_input"
                            placeholder="Enter first name"
                            name="name"
                            type="text"
                            // onChange={(e) => setEmail(e.target.value)}
                            // value={email}
                            required
                        />
                        </label>
                    </form>
                    </div>
                    <div className="riderinfo_two_input">
                    <form>
                        <label>
                        <input
                            className="riderinfo_last_input"
                            placeholder="NG"
                            name="name"
                            type="number"
                            // onChange={(e) => setEmail(e.target.value)}
                            // value={email}
                            required
                        />
                        </label>
                    </form>
                    <form>
                        <label>
                        <input
                            className="riderinfo_last_input"
                            placeholder="Mobile number"
                            name="name"
                            type="number"
                            // onChange={(e) => setEmail(e.target.value)}
                            // value={email}
                            required
                        />
                        </label>
                    </form>
                    </div>
                    <div className="riderinfo_bottom">
                <Button
                    name="Back"
                    width="8%"
                    height="50px"
                    fontSize="large"
                    fontWeight="bold"
                    color="black"
                    border="none"
                    bgColor="rgb(226, 226, 226)"
                    borderTopLeft="20px"
                    borderBottomLeft="20px"
                    borderBottomRight="20px"
                    borderTopRight="20px"
                />
                <Button
                    name="Next"
                    width="8%"
                    height="50px"
                    fontSize="large"
                    fontWeight="bold"
                    color="white"
                    border="none"
                    bgColor="black"
                    borderTopLeft="20px"
                    borderBottomLeft="20px"
                    borderBottomRight="20px"
                    borderTopRight="20px"
                />
                </div>
                </div>
            </div>
        </div>
    )
}
export default RiderInfo;
