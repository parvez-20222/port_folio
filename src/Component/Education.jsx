import React from "react";

function Education() {
  return (
    <>
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
                        <td>80%</td>
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
    </>
  );
}

export default Education;
