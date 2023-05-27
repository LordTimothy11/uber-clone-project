import React, { useState, useNavigate } from "react";
import "./Ride.css";
import Axios from "axios"
import Button from "../../Reuseable/Button";

function Ride() {
  const navigate = useNavigate();
  const [email, setEmail] = useState([]);
  const [error, setError] = useState(null);

  const baseUrl = "";

  const postData = (e) => {
    e.preventDefault();
    Axios.post(baseUrl, {
      email,
    })
      .then((res) => {
        console.log(res)
        navigate("/otp")
        // res = 200 && navigate("/otp")
      })
      .catch((err) => console.log(err));

    setEmail("");
  };

  return (
    <div className="ride_main">
      <p className="ride_ptag">E-Rida</p>
      <div className="ride_top">
        <div className="ride_cont">
          <div className="ride_ptag_two">
            <p>What's your phone number or email?</p>
          </div>
          <form>
            <label>
              <input
                className="ride_input"
                placeholder="Enter phone number or email"
                name="email"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </label>
          </form>
          <div className="continue_but">
            
            <Button
              name="Continue"
              width="51%"
              height="47px"
              fontSize="large"
              fontWeight="bold"
              color="white"
              border="none"
              bgColor="black"
              borderTopLeft="10px"
              borderBottomLeft="10px"
              borderBottomRight="10px"
              borderTopRight="10px"
              handleClick={postData}

            />
          </div>
          <div>------------------------ or ------------------------</div>
          <div className="continue_but">
            <Button
              name="Continue with Google"
              width="51%"
              height="47px"
              color="black"
              border="none"
              bgColor="rgb(226, 226, 226)"
              borderTopLeft="10px"
              borderBottomLeft="10px"
              borderBottomRight="10px"
              borderTopRight="10px"
            />
          </div>
          <div className="continue_but">
            <Button
              name="Continue with Apple"
              width="51%"
              height="47px"
              color="black"
              border="none"
              bgColor="rgb(226, 226, 226)"
              borderTopLeft="10px"
              borderBottomLeft="10px"
              borderBottomRight="10px"
              borderTopRight="10px"
            />
          </div>
          <div className="continue_but">
            <Button
              name="Continue with Facebook"
              width="51%"
              height="47px"
              color="black"
              border="none"
              bgColor="rgb(226, 226, 226)"
              borderTopLeft="10px"
              borderBottomLeft="10px"
              borderBottomRight="10px"
              borderTopRight="10px"
            />
          </div>
          <div className="ride_down">
                <p>By proceeding you consent to get calls. WhatsApp or SMS messages.
                     Including by automated means, from Uber and its affiliates to the number provided.</p>
              </div>
              <div className="ride_bottom">
                <p>This is protected by reCAPTCHA and the google Privacy,
                     Policy, and Terms of Service apply.</p>
              </div>
        </div>
      </div>
    </div>
  );
}

export default Ride;
