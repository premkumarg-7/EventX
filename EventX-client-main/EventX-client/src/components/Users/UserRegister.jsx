import {  useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Image from "../images/Registeration.jpg"

function UserRegister() {
  
    const [username, setusername] = useState("");
    const [email, setEmail] = useState("");
    const [organization, setOrganization] = useState("");
    const [errors, setErrors] = useState({});
    const [mobile_no, setMobileNo] =useState("");
    const Navigate = useNavigate();
    const validate = () => {
      let errors = {};
      if (!username.trim()) errors.username = "Username is required";
      if (!email.trim()) errors.email = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Invalid email format";
      if (!college.trim()) errors.college = "College name is required";
      if (!mobileno.trim()) errors.mobileno = "Mobile number is required";
      else if (!/^\d{10}$/.test(mobileno)) errors.mobileno = "Mobile number must be 10 digits";
  
      setErrors(errors);
      return Object.keys(errors).length === 0; // Return true if no errors
    };

    const handle_submit = async (event) =>{
        event.preventDefault();
        try {
          const response = await axios.post("http://localhost:9192/api/v1/user/participant_save", {
          username,
          email,
          organization,
          mobile_no
          });
          if(response.data && response.data.id) {
            const userId = response.data.id;
            alert(`User Registation Successfully ID: ${userId}`);
            Navigate("/quiz-stepper",{state:{username,userId},replace:true})
          }
        } catch (err) {
          alert(err.message || "Something went wrong.");
        }

      }
  
    return (
    <div>
    <div class="container mt-4" >
    <div class="card shadow p-3 mb-5 bg-body-teritary-rounded">
    <div class="row">
      <div class="col-md-12 text-center">
            <h1>User Registeration</h1>
            <hr />
            </div>
            <div class="col-md-5 text-center ">
              <img src={Image} alt="" className="img-fluid"/>
            </div>
    <div class="col-md-5 ps-5">
    <form onSubmit={handle_submit}>
        <div class="form-group pb-3">
          <label class="fs-5">Name</label>
          <input type="text" class="form-control form-control-lg" id="username" placeholder="Enter Name" value={username}
          onChange={(event) => {
            setusername(event.target.value);
          }}
          />
          {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
        </div>
        

        <div class="form-group pb-3">
          <label class="fs-5">Email</label>
          <input type="email"  class="form-control form-control-lg" id="email" placeholder="Enter your mail" value={email} 
          onChange={(event) => {
            setEmail(event.target.value);
          }}/>
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div class="form-group pb-3">
            <label class="fs-5">Organization</label>
            <input type="text"  class="form-control form-control-lg" id="college" placeholder="Enter your college name" minLength={4} 
            onChange={(event) => {
              setOrganization(event.target.value);
            }}/>
            {errors.organization && <p style={{ color: "red" }}>{errors.organization}</p>}
          </div>
          <div class="form-group pb-3">
            <label class="fs-5">Mobile no</label>
            <input type="text"  class="form-control form-control-lg" id="mobileno" placeholder="Enter your Mobile no" value={mobile_no}
            onChange={(event) => {
              setMobileNo(event.target.value);
            }}/>
            {errors.mobile_no && <p style={{ color: "red" }}>{errors.mobileno}</p>}
          </div>

            <div class="text-center">
               <button type="submit" class="btn btn btn-outline-danger mt-4 btn-lg">Register</button>
            </div>
       
      </form>
      
    </div>
    </div>
  </div>
    </div>
  </div>

    );
  }
  
  export default UserRegister;