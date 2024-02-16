import {  useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Image from "./images/3426526.jpg"

function Register() {
  
    const [username, setusername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Navigate = useNavigate();


    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:9192/api/v1/user/save", {
          username: username,
          email: email,
          password: password
          });
          alert("Employee Registation Successfully");
          Navigate("/login")
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
            <h1>Student Registation</h1>
            </div>
            <div class="col-md-5 text-center">
              <img src={Image} alt="" width="450px"/>
            </div>
    <div class="col-md-5">
    <form>
        <div class="form-group">
          <label>User name</label>
          <input type="text"  class="form-control" id="username" placeholder="Enter Name" required
          
          value={username}
          onChange={(event) => {
            setusername(event.target.value);
          }}
          />

        </div>

        <div class="form-group">
          <label>email</label>
          <input type="email"  class="form-control" id="email" placeholder="Enter Email" required
          
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          
          />
 
        </div>

        <div class="form-group">
            <label>password</label>
            <input type="password"  class="form-control " id="password" placeholder="Enter password" required
            
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            
            />
          </div>

        <button type="submit" class="btn btn-primary mt-4" onClick={save} >Save</button>
       
      </form>
      <div class="text-center">
      <Link to="/login"> Already have an account?</Link>
      </div>
      
    </div>
    </div>
  </div>
    </div>
  </div>

    );
  }
  
  export default Register;