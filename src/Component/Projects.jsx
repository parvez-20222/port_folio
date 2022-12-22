import React from 'react'

function Projects() {
  return (
    <>
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
              <a
                href="#"
                target="_blank"
              >
                <button class="live">Live Preview</button>
              </a>
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
              <a href="#">
                <button class="live">Live Preview</button>
              </a>
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
              <a href="#">
                <button class="live">Live Preview</button>
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Projects;
