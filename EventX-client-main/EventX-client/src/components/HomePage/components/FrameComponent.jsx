import { Link } from "react-router-dom";
import "../Desktop.css";
const FrameComponent = () => {
  return (
    <div class="row container cl m-0">
      <div class="col-md-5 ">
      <div class="card cd text-center rounded" style={{
			width: "23rem",
			backgroundColor:"rgb(43, 136, 217)",
			padding:"30px"
		}}>
      <Link to={"/login"} style={{textDecoration:"none",color:"white"}}>
		<div class="card-body">
		  <h5 class="card-link text-center"style={{color:"white"}}>
        Admin 
      </h5>
		</div>
    </Link>
	  </div>
    </div>
    <div class="col-md-5 ">
      <div class="card cd text-center rounded" style={{
			width: "23rem",
			backgroundColor:"rgb(43 217 170)",
			padding:"30px"
		}}>
      <Link to={"/user-register"} style={{textDecoration:"none",color:"white"}}>
		<div class="card-body">
		  <h5 class="card-link text-center"style={{color:"white"}}>
        Participant
      </h5>
		</div>
    </Link>
	  </div>
    </div>
    
    </div>
  );
};

export default FrameComponent;
