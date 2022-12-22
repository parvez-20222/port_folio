import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
     <>
     <hr />
     <header my-4>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-4 col-xs-12">
                        <p><i className="fa fa-phone"></i><span> Phone</span> <br/> <Link to="#">+91-9719770330</Link></p>
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-12">
                        <p><i className="fa fa-envelope-o"></i><span> Email</span> <br/> <Link to="#">parvezalam74520@gmail.com</Link></p>
                    </div>
                    <div className="col-md-5 col-sm-4 col-xs-12">
                        <ul className="social-icon">
                            <li><span> <h4><b>Meet me on</b></h4> </span></li>
                            <li><a href="https://github.com/parvez-20222" className="fa fa-github"></a> </li>
                            <li><a href="https://www.linkedin.com/in/parvez-alam-1340791b8/" className="fa fa-linkedin"></a></li>
                            <li><a href="https://www.instagram.com/parvezalam4756/" className="fa fa-instagram"></a></li>
                            <li><a href="https://www.youtube.com/@parvezalamshaan7500/featured" className="fa fa-youtube"></a></li>
                             
                        </ul>
                    </div>
                </div>
            </div>
        </header>

        <footer id="copyright">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p className="wow bounceIn" data-wow-offset="50" data-wow-delay="0.3s">
                       	Copyright &copy; 2022 <b>Parvez Alam</b></p>
                    </div>
                </div>
            </div>
        </footer>

     </>
  )
}

export default Footer
