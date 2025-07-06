import axios from "axios"
import React,{ useState } from "react"

const OtpComponent =() =>{
    const [mobile_no, setMobileNo] = useState("");
    const [otp, setOtp] = useState("");
    const [ message, setMessage] = useState("");

    const sendOtp = async() =>{
        try{
            const response = await axios.post("http://localhost:9192/api/v1/user/generate-otp",{
                mobile_no
            });
            setMessage(response.data);
        }
        catch (error){
            setMessage("Error sending OTP");
        }
    };

    const verifyOtp = async() =>{
        try{
            const response = await axios.post("http://localhost:9192/api/v1/user/verify-otp",{
                mobile_no, otp
            });
            setMessage(response.date);
        }catch (error){
            setMessage("Invalid OTP");
        }
    };
    
    return (
        <div>
          <h2>OTP Verification</h2>
          <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button onClick={sendOtp}>Send OTP</button>
          
          <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
          <button onClick={verifyOtp}>Verify OTP</button>
    
          <p>{message}</p>
        </div>
      );
};

export default OTPGenerator