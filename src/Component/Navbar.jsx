import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    {/* <div className="preloader">
			<div className="sk-spinner sk-spinner-wave">
     	 		<div className="sk-rect1"></div>`
       			<div className="sk-rect2"></div>
       			<div className="sk-rect3"></div>
      	 		<div className="sk-rect4"></div>
      			<div className="sk-rect5"></div>
     		</div>
    </div>  */}
	<nav className="navbar navbar-default templatemo-nav" role="navigation">
			<div className="container">
				<div className="navbar-header">
					<button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
						<span className="icon icon-bar"></span>
						<span className="icon icon-bar"></span>
						<span className="icon icon-bar"></span>
					</button>
					<Link to="/" className="navbar-brand"> <img src="assets/images/logo1.jpg " height="60px" width="150px"/> </Link>
				</div>
				<div className="collapse navbar-collapse color">
					<ul className="nav navbar-nav navbar-right">
						<li><Link to="/">HOME</Link></li>
						<li><Link to="/skills">SKILLS</Link></li>
						<li><Link to="/education">EDUCATION</Link></li>
						<li><Link to="/projects">PROJECTS</Link></li>
						<li><Link to="/achievements">BLOGS</Link></li>
						<li><Link to="/hire">HIRE</Link></li>
					</ul>
				</div>
			</div>
		</nav>

    </>
  )
}

export default Navbar
