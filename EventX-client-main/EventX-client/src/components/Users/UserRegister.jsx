import {  useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Image from "../images/Registeration.jpg"

function UserRegister() {
  
    const [username, setusername] = useState("");
    const [email, setEmail] = useState("");
    const [college, setCollege] = useState("");
    const [mobileno, setMobileno] =useState("");

    const Navigate = useNavigate();

    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:9192/api/v1/user/participant_save", {
          username: username,
          email: email,
          college : college,
          mobileno : mobileno
          });
          alert("User Registation Successfully");
          Navigate("/quiz-stepper")
        } catch (err) {
          alert(err);
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
    <form>
        <div class="form-group pb-3">
          <label class="fs-5">Name</label>
          <input type="text" class="form-control form-control-lg" id="username" placeholder="Enter Name" minLength={4}
          
          value={username}
          onChange={(event) => {
            setusername(event.target.value);
          }}
          />

        </div>
        {/* <div class="form-group pb-3">
          <label class="fs-3">Are you Admin?</label>
        <div class="form-check">
          <label class="form-check-label " for="flexRadioDefault1">
             yes
          </label>
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
           value={true}
           onChange={(event) => {
             setisAdmin(event.target.value);
           }}
          />
        </div>
        <div class="form-check">
          <label class="form-check-label " for="flexRadioDefault1">
             no
          </label>
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
           value={false}
           onChange={(event) => {
             setisAdmin(event.target.value);
           }}
          />
        </div>
        </div> */}

        <div class="form-group pb-3">
          <label class="fs-5">Email</label>
          <input type="email"  class="form-control form-control-lg" id="email" placeholder="Enter Email" 
          
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          
          />
 
        </div>

        <div class="form-group pb-3">
            <label class="fs-5">College</label>
            <input type="text"  class="form-control form-control-lg" id="college" placeholder="Enter your college name" minLength={4}
            
            value={college}
            onChange={(event) => {
              setCollege(event.target.value);
            }}
            
            />
          </div>
          <div class="form-group pb-3">
            <label class="fs-5">Mobile no</label>
            <input type="tel"  class="form-control form-control-lg" id="mobileno" placeholder="Enter your Mobile no" minLength={4}
            value={mobileno}
            onChange={(event) => {
              setMobileno(event.target.value);
            }}
            
            />
          </div>

            <div class="text-center">
               <button type="submit" class="btn btn btn-outline-danger mt-4 btn-lg" onClick={save} >Register</button>
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