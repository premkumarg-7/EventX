import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Admin = () => {
	const navigate =useNavigate()
	const handleLogout = () => {
		navigate("/");
	  };
  
  return (
    <><section className="container mt-5">
        <button className="btn btn-dark" onClick={handleLogout}>
          Logout
        </button>
		  <h2 className="mt-2">Welcome to admin home page{}</h2>
		  <hr />
		  <nav className="nav flex-column">
			  <Link to={"/create-quiz"} className="nav-link">
				  Create a New Quiz
			  </Link>
			  <Link to={"/all-quizzes"} className="nav-link">
				  Manage existing Quizes
			  </Link>
		  </nav>

	  </section>
	  </>
  )
}

export default Admin
