import {  useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Image from "../images/Registeration.jpg"

function UserRegister() {
  
    const [username, setusername] = useState("");
    //const [isAdmin, setisAdmin]=useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Navigate = useNavigate();


    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:9192/api/v1/user/save", {
          username: username,
          is_admin:false,
          email: email,
          password: password
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
          <label class="fs-4">Username</label>
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
               <button type="submit" class="btn btn btn-outline-danger mt-4 btn-lg" onClick={save} >Register</button>
            </div>
       
      </form>
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
  
  export default UserRegister;