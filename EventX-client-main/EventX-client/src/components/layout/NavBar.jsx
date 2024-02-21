import React from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg px-5 shadow sticky-top" style={{backgroundColor:"rgba(107, 46, 185, 1)"}}>
			<div className="container-fluid py-2">
				<h3><NavLink className="navbar-brand "style={{color:"white"}} to={"/"}>
					EventX
				</NavLink>
				</h3>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<NavLink className="nav-link" to={"/login"} style={{color:"white"}}>
								Admin
							</NavLink>
						</li>

						<li className="nav-item">
							<NavLink className="nav-link" to={"/user-register"} style={{color:"white"}}>
								Participant
							</NavLink>
						</li>

						<li className="nav-item">
							<NavLink className="nav-link" to={"/compiler"} style={{color:"white"}}>
								Code Editor
							</NavLink>
						</li>
						
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
