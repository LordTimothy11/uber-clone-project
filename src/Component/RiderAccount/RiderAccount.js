import React, {useState} from "react";
import axios from 'axios';
import "./RiderAccount.css";
import Button from "../../Reuseable/Button";



function RiderAccount(){

  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/v1/registration/passenger-register", { email });
      console.log('User created:', response.data);

    } catch (error) {
      setError(error.message);
      console.error('Error creating user:', error);
    }
  }


    return (
        <div className="rider_main">
          <p className="rider_ptag">E-Rida</p>
          <div className="rider_top">
            <div className="rider_cont">
              <div className="rider_ptag_two">
                <p>What's your phone number or email?</p>
              </div>
              <form>
                <label>
                  <input
                    className="rider_input"
                    placeholder="Enter phone number or email"
                    name="email"
                    type="text"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                </label>
                {error && <div className="error">{error}</div>}
              </form>
              <div className="rider_continue_but">
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
                  handleClick={handleSubmit}
    
                />
              </div>
              <div>------------------------ or ------------------------</div>
              <div className="rider_continue_but">
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
              <div className="rider_continue_but">
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
              <div className="rider_continue_but">
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
              <div className="rider_down">
                <p>By proceeding you consent to get calls. WhatsApp or SMS messages.
                     Including by automated means, from Uber and its affiliates to the number provided.</p>
              </div>
              <div className="rider_bottom">
                <p>This is protected by reCAPTCHA and the google Privacy,
                     Policy, and Terms of Service apply.</p>
              </div>
            </div>
          </div>
        </div>
      );

}

export default RiderAccount;
