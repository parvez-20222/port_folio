import React from 'react'
// import { Link } from 'react-router-dom'

function Hire() {
  return (
    <>
       <section id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2
                className="wow bounceIn"
                data-wow-offset="50"
                data-wow-delay="0.3s"
              >
                WELCOME TO MY <span>HIRE ME</span> SECTION
              </h2>
            </div>
            <div
              className="col-md-6 col-sm-6 col-xs-12 wow fadeInLeft"
              data-wow-offset="50"
              data-wow-delay="0.9s"
            >
              <form action="#" method="post">
                <label>NAME</label>
                <input
                  name="fullname"
                  type="text"
                  className="form-control"
                  id="fullname "
                />

                <label>EMAIL</label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="email "
                />

                <label>MESSAGE</label>
                <textarea
                  name="message"
                  rows="4"
                  className="form-control"
                  id="message "
                ></textarea>

                <input type="submit" className="form-control" />
              </form>
            </div>
            <div
              className="col-md-6 col-sm-6 col-xs-12 wow fadeInRight"
              data-wow-offset="50"
              data-wow-delay="0.6s"
            >
              <address>
                <p className="address-title">Contact Me</p>
                <span>
                  <a href="https://drive.google.com/file/d/1EeFwmoUuRndQl_MKQXPijL1BLqaKq-a9/view?usp=share_link">
                    <button className="resume" type="submit">
                      Click Here To Download My Resume
                    </button>
                  </a>
                </span>

                <p>
                  <i className="fa fa-phone"></i> <a href="#">+91-9719770330</a>
                </p>
                <p>
                  <i className="fa fa-envelope-o"></i>{" "}
                  <a href="#">parvezalam74520@gmail.com</a>
                </p>
                <p>
                  <i className="fa fa-map-marker"></i>Noida
                </p>
              </address>
              <ul className="social-icon">
                <li>
                  <h4>I AM SOCIAL</h4>
                </li>
                <li>
                  <a
                    href="https://github.com/parvez-20222"
                    className="fa fa-github"
                  ></a>{" "}
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/parvez-alam-1340791b8/"
                    className="fa fa-linkedin"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/parvezalam4756/"
                    className="fa fa-instagram"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@parvezalamshaan7500/featured"
                    className="fa fa-youtube"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hire
