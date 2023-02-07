import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section id="home">
        <div className="container">
          <div className="row">
            <div className="col-md-offset-2 col-md-8">
              <h1 className="wow fadeIn" data-wow-offset="50" data-wow-delay="0.9s">
                {" "}
                <strong>Hey,</strong> <br /> <b> I'm Parvez Alam</b> <br />
                <span>Full stack Developer</span>
              </h1>
              <Link
                data-scroll
                to="/hire"
                className="btn btn-default wow fadeInUp"
                data-wow-offset="50"
                data-wow-delay="0.6s"
              >
                Hire Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2
                className="wow bounceIn"
                data-wow-offset="50"
                data-wow-delay="0.3s"
              >
                WELCOME TO MY <span>SKILLS</span> PAGE
              </h2>
            </div>
            <div
              className="col-md-4 col-sm-4 col-xs-12 wow fadeInRight"
              data-wow-offset="50"
              data-wow-delay="0.6s"
            >
              <div className="media">
                <div className="media-heading-wrapper">
                  <div className="media-object pull-left">
                    <i className="fa fa-html5"></i>
                  </div>
                  <h3 className="media-heading">FRONT END TECHNOLOGIES</h3>
                </div>
                <div className="media-body">
                  <table className="table table-dark">
                    <thead>
                      <tr>
                        <th scope="col">S NO.</th>
                        <th scope="col">TECHNOLOGY</th>
                        <th scope="col">LEVEL</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>HTML5</td>
                        <td>75%</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>CSS3</td>
                        <td>70%</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>BOOTSTRAP</td>
                        <td>80%</td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>MATERIAL UI</td>
                        <td>70%</td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td>JAVASCRIPT</td>
                        <td>80%</td>
                      </tr>
                      <tr>
                        <th scope="row">6</th>
                        <td>TYPESCRIPT</td>
                        <td>70%</td>
                      </tr>
                      <tr>
                        <th scope="row">7</th>
                        <td>REACT JS</td>
                        <td>80%</td>
                      </tr>
                      <tr>
                        <th scope="row">8</th>
                        <td>NEXT JS</td>
                        <td>70%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 col-sm-4 col-xs-12 wow fadeInLeft"
              data-wow-offset="50"
              data-wow-delay="0.6s"
            >
              <div className="media">
                <div className="media-heading-wrapper">
                  <div className="media-object pull-left">
                    <i className="fa fa-mobile"></i>
                  </div>
                  <h3 className="media-heading">BACK END TECHNOLOGIES</h3>
                </div>
                <div className="media-body">
                  <table className="table table-dark">
                    <thead>
                      <tr>
                        <th scope="col">S NO.</th>
                        <th scope="col">TECHNOLOGY</th>
                        <th scope="col">LEVEL</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>NODE JS</td>
                        <td>80%</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>EXPRESS JS</td>
                        <td>75%</td>
                      </tr>
                    </tbody>
                  </table>
                  <h5 className="dev">
                    <b>DATABASE</b>
                  </h5>
                  <table className="table table-dark">
                    <thead>
                      <tr>
                        <th scope="col">S NO.</th>
                        <th scope="col">TECHNOLOGY</th>
                        <th scope="col">LEVEL</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>MONGO DB</td>
                        <td>80%</td>
                      </tr>
                    </tbody>
                  </table>
                  <h5 className="dev">
                    <b>DEVOPS</b>
                  </h5>
                  <table className="table table-dark">
                    <thead>
                      <tr>
                        <th scope="col">S NO.</th>
                        <th scope="col">TECHNOLOGY</th>
                        <th scope="col">LEVEL</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>AWS CLOUD</td>
                        <td>-----</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 col-sm-4 col-xs-12 wow fadeInLeft"
              data-wow-offset="50"
              data-wow-delay="0.9s"
            >
              <div className="media">
                <div className="media-heading-wrapper">
                  <div className="media-object pull-left">
                    <i className="fa fa-comment-o"></i>
                  </div>
                  <h3 className="media-heading">OTHERS</h3>
                </div>
                <div className="media-body">
                  <table class="table table-dark">
                    <thead>
                      <tr>
                        <th scope="col">S NO.</th>
                        <th scope="col">TECHNOLOGY</th>
                        <th scope="col">LEVEL</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>GITHUB</td>
                        <td>50%</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>REPLIT</td>
                        <td>50%</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>VS CODE EDITOR</td>
                        <td>90%</td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>WEB DESIGN</td>
                        <td>80%</td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td>RESPONSIVE WEBSITES</td>
                        <td>70%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2
                className="wow bounceIn"
                data-wow-offset="50"
                data-wow-delay="0.3s"
              >
                WELCOME TO MY <span>EDUCATIONAL</span> PAGE
              </h2>
            </div>
            <div
              className="col-md-3 col-sm-6 col-xs-12 wow fadeIn"
              data-wow-offset="50"
              data-wow-delay="1.3s"
            >
              <div className="team-wrapper">
                <img
                  src="assets/images/high11.jpg"
                  className="img-responsive"
                  alt="team img 1"
                />
                <div className="team-des">
                  <h4> HIGH SCHOOL</h4>
                  <span>GURU NANAK INTER COLLEGE BAHERI</span>
                  <table className="table table-dark">
                    <thead>
                      <tr>
                        <th scope="col">S NO.</th>
                        <th scope="col">Class</th>
                        <th scope="col">Year</th>
                        <th scope="col">%</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Xth</td>
                        <td>2015</td>
                        <td>79%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div
              className="col-md-3 col-sm-6 col-xs-12 wow fadeIn"
              data-wow-offset="50"
              data-wow-delay="1.3s"
            >
              <div className="team-wrapper">
                <img
                  src="assets/images/inter13.jpg"
                  className="img-responsive"
                  alt="team img 1"
                />
                <div className="team-des">
                  <h4> SECONDARY SCHOOL </h4>
                  <span>KANYA INTER COLLEGE </span>
                  <table className="table table-dark">
                    <thead>
                      <tr>
                        <th scope="col">S NO.</th>
                        <th scope="col">Class</th>
                        <th scope="col">Year</th>
                        <th scope="col">%</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>XIIth</td>
                        <td>2018</td>
                        <td>73%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div
              className="col-md-3 col-sm-6 col-xs-12 wow fadeIn"
              data-wow-offset="50"
              data-wow-delay="1.3s"
            >
              <div className="team-wrapper">
                <img
                  src="assets/images/college123.jpg"
                  className="img-responsive"
                  alt="team img 1"
                />
                <div className="team-des">
                  <h4>ANA COLLEGE</h4>
                  <span>Dr. APJ Abdul Kalam Technical University Lucknow</span>
                  <table className="table table-dark">
                    <thead>
                      <tr>
                        <th scope="col">S NO.</th>
                        <th scope="col">Course</th>
                        <th scope="col">Year</th>
                        <th scope="col">%</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>B.Tech</td>
                        <td>2022</td>
                        <td>73%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div
              className="col-md-3 col-sm-6 col-xs-12 wow fadeIn"
              data-wow-offset="50"
              data-wow-delay="1.3s"
            >
              <div className="team-wrapper">
                <img
                  src="assets/images/d.png"
                  className="img-responsive"
                  alt="team img 1"
                />
                <div className="team-des">
                  <h4>FULL STACK WEB DEVELOPMENT</h4>
                  <span>DUCAT TRAINING CENTER </span>
                  <table className="table table-dark">
                    <thead>
                      <tr>
                        <th scope="col">S NO.</th>
                        <th scope="col">Course</th>
                        <th scope="col">Year</th>
                        <th scope="col">Stat</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>MERN</td>
                        <td>2022</td>
                        <td>50%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="service">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2
                class="wow bounceIn"
                data-wow-offset="50"
                data-wow-delay="0.3s"
              >
                WELCOME TO MY <span>PROJECTS</span> PAGE
              </h2>
            </div>
            <div
              class="col-md-4 wow fadeIn"
              data-wow-offset="50"
              data-wow-delay="0.6s"
            >
              <i class="fa fa-cloud"></i>
              <h4>WEATHER APP</h4>
              <h5>Description of Project</h5>
              <hr />
              <h5>
                In this project, we will be building a weather application. This
                application will show the temperature of a location. To fetch
                weather information we will need an API. An API(Application
                Programming Interface) is a function that allows applications to
                interact and share data using various components and
                microservices.
              </h5>
            
            </div>
            <div
              class="col-md-4 active wow fadeIn"
              data-wow-offset="50"
              data-wow-delay="0.9s"
            >
              <i class="fa fa-cloud"></i>
              <h4>E-COMMERCE</h4>
              <h5>Description of Project</h5>
              <hr />
              <h5>
                Passionate ecommerce specialist with 4 years of experience
                growing and managing the brand of ModestO5. Coordinated efforts
                in producing effective revenue-generating solutions, increasing
                customer base by 114%. Wrote engaging copy and microcopy for
                email blasts and website UX, increasing engagement by roughly
                18% on average.
              </h5>
              
            </div>
            <div
              class="col-md-4 wow fadeIn"
              data-wow-offset="50"
              data-wow-delay="0.9s"
            >
              <i class="fa fa-laptop"></i>
              <h4>NEWS APP</h4>
              <h5>Description of Project</h5>
              <hr />
              <h5>
                The purpose of the is to develop an application which will
                display news articles and videos verified and approved at
                backend .User can browse news articles and videos through
                various categories. App will enable user to view news More
                info...s, images, and video .Users can also bookmark any news
                article/video for future use.
              </h5>
              
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2
                class="wow bounceIn"
                data-wow-offset="50"
                data-wow-delay="0.3s"
              >
                WELCOME TO MY <span>BLOG</span> SECTION
              </h2>
            </div>
            <div
              class="col-md-3 col-sm-6 col-xs-12 wow fadeIn"
              data-wow-offset="50"
              data-wow-delay="0.6s"
            >
              <div class="portfolio-thumb">
                <img
                  src="assets/images/p1.jpeg"
                  class="img-responsive"
                  alt="portfolio img 1"
                />
                <div class="portfolio-overlay">
                  <h4>One</h4>
                  <h3>lotas temple enjoy</h3>
                 
                  
                </div>
              </div>
            </div>
            <div
              class="col-md-3 col-sm-6 col-xs-12 wow fadeIn"
              data-wow-offset="50"
              data-wow-delay="0.6s"
            >
              <div class="portfolio-thumb">
                <img
                  src="assets/images/dresscoll.jpg"
                  class="img-responsive"
                  alt="portfolio img 2"
                />
                <div class="portfolio-overlay">
                  <h4>two</h4>
                  <h3>first year project time</h3>
                 
                </div>
              </div>
            </div>
            <div
              class="col-md-3 col-sm-6 col-xs-12 wow fadeIn"
              data-wow-offset="50"
              data-wow-delay="0.6s"
            >
              <div class="portfolio-thumb">
                <img
                  src="assets/images/p3.jpg"
                  class="img-responsive"
                  alt="portfolio img 3"
                />
                <div class="portfolio-overlay">
                  <h4>Three</h4>
                  <h3>photo shot lotus temple</h3>
                 
                </div>
              </div>
            </div>
            <div
              class="col-md-3 col-sm-6 col-xs-12 wow fadeIn"
              data-wow-offset="50"
              data-wow-delay="0.6s"
            >
              <div class="portfolio-thumb">
                <img
                  src="assets/images/p4.jpg"
                  class="img-responsive"
                  alt="portfolio img 4"
                />
                <div class="portfolio-overlay">
                  <h4>Four</h4>
                  <h3>College friend photo shot</h3>
                 
                </div>
              </div>
            </div>
            <div
              class="col-md-3 col-sm-6 col-xs-12 wow fadeIn"
              data-wow-offset="50"
              data-wow-delay="0.6s"
            >
              <div class="portfolio-thumb">
                <img
                  src="assets/images/lalkila1.jpg"
                  class="img-responsive"
                  alt="portfolio img 3"
                />
                <div class="portfolio-overlay">
                  <h4>Five</h4>
                  <h3>Lalkila walking and enjoy</h3>
                 
                </div>
              </div>
            </div>
            <div
              class="col-md-3 col-sm-6 col-xs-12 wow fadeIn"
              data-wow-offset="50"
              data-wow-delay="0.6s"
            >
              <div class="portfolio-thumb">
                <img
                  src="assets/images/p6.jpg"
                  class="img-responsive"
                  alt="portfolio img 4"
                />
                <div class="portfolio-overlay">
                  <h4>Six</h4>
                  <h3>College  class friend</h3>
                 
                </div>
              </div>
            </div>
            <div
              class="col-md-3 col-sm-6 col-xs-12 wow fadeIn"
              data-wow-offset="50"
              data-wow-delay="0.6s"
            >
              <div class="portfolio-thumb">
                <img
                  src="assets/images/pintimg.jpg"
                  class="img-responsive"
                  alt="portfolio img 1"
                />
                <div class="portfolio-overlay">
                  <h4>Seven</h4>
                  <h3>College friend photo shot</h3>
                 
                </div>
              </div>
            </div>
            <div
              class="col-md-3 col-sm-6 col-xs-12 wow fadeIn"
              data-wow-offset="50"
              data-wow-delay="0.6s"
            >
              <div class="portfolio-thumb">
                <img
                  src="assets/images/schoolimg.jpg"
                  class="img-responsive"
                  alt="portfolio img 2"
                />
                <div class="portfolio-overlay">
                  <h4>Eight</h4>
                  <h3>inter mediate time photo</h3>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                  <a href="https://drive.google.com/file/d/1EeFwmoUuRndQl_MKQXPijL1BLqaKq-a9/view?usp=share_link" target="_blank">
                    <button className="resume target-blank" type="submit">
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
                    href="https://github.com/parvez-20222"target="_blank"
                    className="fa fa-github"
                  ></a>{" "}
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/parvez-alam-1340791b8/"target="_blank"
                    className="fa fa-linkedin"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/parvezalam4756/"target="_blank"
                    className="fa fa-instagram"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@parvezalamshaan7500/featured"target="_blank"
                    className="fa fa-youtube"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
