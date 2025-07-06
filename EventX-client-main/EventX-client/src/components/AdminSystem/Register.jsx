import {  useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Image from "../images/Registeration.jpg"

function Register() {
  
    const [username, setusername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [otp, setOtp] = useState("");
    const [showOtpField, setShowOtpField] = useState(false);
    const Navigate = useNavigate();

    async function handleRegister(event) {
        event.preventDefault();
        try {
          // Simulate sending OTP
          // In a real application, you would make an API call here to send OTP to the email
          await axios.post("http://localhost:9192/api/v1/user/send-otp", { email: email });
          alert("OTP sent to your email. Please check your inbox.");
          setShowOtpField(true);
        } catch (err) {
          alert("Failed to send OTP: " + err.message);
        }
      }

    async function handleOtpVerification(event) {
        event.preventDefault();
        try {
            // Simulate OTP verification and then user registration
            // In a real application, you would make an API call here to verify OTP
            // await axios.post("http://localhost:9192/api/v1/user/verify-otp", { email: email, otp: otp });

            // If OTP is verified, proceed with user registration
            await axios.post("http://localhost:9192/api/v1/user/save", {
                username: username,
                is_admin:true,
                email: email,
                password: password
            });
            alert("Admin Registration Successfully and OTP Verified");
            Navigate("/login");
        } catch (err) {
            alert("OTP Verification Failed or Registration Error: " + err.message);
        }
    }
  
    return (
    <div>
    <div class="container mt-4" >
    <div class="card shadow p-3 mb-5 bg-body-teritary-rounded">
    <div class="row">
      <div class="col-md-12 text-center">
            <h1>Admin Registration</h1>
            <hr />
            </div>
            <div class="col-md-5 text-center ">
              <img src={Image} alt="" className="img-fluid"/>
            </div>
    <div class="col-md-5 ps-5">
    {!showOtpField ? (
        <form>
            <div class="form-group pb-3">
              <label class="fs-4">Username</label>
              <input type="text" class="form-control form-control-lg" id="username" placeholder="Enter Name" minLength={4}
              
              value={username}
              onChange={(event) => {
                setusername(event.target.value);
              }}
              />

            </div>

            <div class="form-group pb-3">
              <label class="fs-4">Email</label>
              <input type="email"  class="form-control form-control-lg" id="email" placeholder="Enter Email" 
              
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              
              />
    
            </div>

            <div class="form-group pb-3">
                <label class="fs-4">Password</label>
                <input type="password"  class="form-control form-control-lg" id="password" placeholder="Enter password" minLength={4}
                
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                
                />
              </div>

                <div class="text-center">
                   <button type="submit" class="btn btn btn-outline-danger mt-4 btn-lg" onClick={handleRegister} >Register</button>
                </div>
           
          </form>
    ) : (
        <form>
            <div class="form-group pb-3">
                <label class="fs-4">OTP</label>
                <input type="text" class="form-control form-control-lg" id="otp" placeholder="Enter OTP"
                value={otp}
                onChange={(event) => {
                    setOtp(event.target.value);
                }}
                />
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn btn-outline-danger mt-4 btn-lg" onClick={handleOtpVerification} >Verify OTP</button>
            </div>
        </form>
    )}
      <div class="text-center pt-3">
      <Link to="/login" class="fs-5" style={{
        textDecoration:"none"
      }}>
         Already have an account?</Link>
      </div>
      
    </div>
    </div>
  </div>
    </div>
  </div>

    );
  }
  
  export default Register;