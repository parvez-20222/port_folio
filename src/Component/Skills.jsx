import React from "react";

function Skills() {
  return (
    <>
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
    </>
  );
}

export default Skills;
