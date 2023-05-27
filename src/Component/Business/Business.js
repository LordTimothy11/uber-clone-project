import React from "react";
import "./Business.css";
import Button from "../../Reuseable/Button";


function Business(){
    return(
        <div className="business">
            <div className="business_one">
                <h2>
                    Uber for Business
                </h2>
                <div className="business_two">
                    <p>Transform the way your company moves and feeds its people</p>
                </div>
                <div className="business_three">
                    <Button
                        name="See how"
                        width="40%"
                        height="57px"
                        fontSize="large"
                        fontWeight="normal"
                        color="white"
                        border="none"
                        bgColor="black"
                        borderTopLeft="10px"
                        borderBottomLeft="10px"
                        borderBottomRight="10px"
                        borderTopRight="10px" 
                        />
                </div>
            </div>
        </div>
    );
}

export default Business;