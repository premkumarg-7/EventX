import {  useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import Loginimage from "../images/4957136.jpg"

function AdminLogin() {
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const error_display = (err) => toast.error(err);
    const success_message = (msg) => toast.success(msg);

    async function login(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:9192/api/v1/user/login", {
            email: email,
            password: password,
            }).then((res) => 
            {
             console.log(res.data);
             
             if (res.data.message == "Email not exist") 
             {
               error_display("Email not exist");
             } 
             else if(res.data.message == "The User is not admin!" )
             {
              
              error_display("This is not Admin!");
             }
             else if(res.data.message == "Login Success")
             { 
               success_message("Login Success!");
               navigate('/admin');
             } 
              else 
             { 
                error_display("Incorrect Email and Password not match");
             }
          }, fail => {
           console.error(fail); // Error!
  });
        }
         catch (err) {
          alert(err);
        }
      
      }

    return (
       <div>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
            <div class="container mt-4">
            <div class="card shadow p-3 mb-5 bg-body-teritary-rounded">
            <div class="row">
              <div class="col-md-12 text-center">
              <h2>LogIn</h2>
              <hr />
              </div>
             <div class="col-md-6 ">
            <form>
        <div class="form-group pb-4 ps-3">
          <label class="fs-4">Email</label>
          <input type="email"  class="form-control form-control-lg" id="email" placeholder="Enter Email" required
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}  />
          </div>

        <div class="form-group pb-4 ps-3">
            <label class="fs-4">password</label>
            <input type="password"  class="form-control form-control-lg" id="password" placeholder="Enter Password" required  
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            
            />
          </div>
          
          <div class="text-center">
                  <button type="submit" class="btn btn-primary btn-lg" onClick={login} >Login</button>
                  </div>
              </form>
            <div class="text-center pt-4">
            <Link to="/register" style={{
              textDecoration:"none",
              
            }}>
              Don't Have an Account?</Link>
            </div>

            </div>
            <div class="col-md-6 text-center">
            <img src={Loginimage} alt="" className="img-fluid" width="450px"  />
            </div>
            </div >
            </div>
            </div>
     </div>
    );
  }
  
  export default AdminLogin;