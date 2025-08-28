import React from "react";

const RelatedProjects2 = () => {
  return (
    <section
      className="service-section fix section-padding section-bg bg-cover"
      style={{ backgroundImage: "url('/assets/img/service/servicebg1.png')" }}
    >
      <div className="container">
        {/* Section Title */}
        <div className="section-title">
          <h6>
            <img src="assets/img/star.png" alt="img" /> our projects
          </h6>
          <h2>
            Related{" "}
            <span>
              <b>projects</b>
            </span>
          </h2>
        </div>

        {/* Portfolio Items */}
        <div className="row">
          {/* Project 1 */}
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="portfolio-card-items">
              <div className="portfolio-image">
                <img src="assets/img/project/aak2.jpg" alt="img" />
                <a href="/Projectexplore2" className="lets-circle">
                  <i className="fa-sharp fa-regular fa-arrow-up-right"></i>{" "}
                  <br />
                  Project details
                </a>
              </div>
              <div className="portfolio-content">
                <h6>
                  <span>//</span> creative art
                </h6>
                <h3>
                  <a href="project-details.html">Stylishly extravagant toy</a>
                </h3>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="portfolio-card-items">
              <div className="portfolio-image">
                <img src="assets/img/project/golkanda.jpg" alt="img" />
                <a href="/Projectexplore2" className="lets-circle">
                  <i className="fa-sharp fa-regular fa-arrow-up-right"></i>{" "}
                  <br />
                  Project details
                </a>
              </div>
              <div className="portfolio-content">
                <h6>
                  <span>//</span> creative art
                </h6>
                <h3>
                  <a href="project-details.html">A vintage postcard design</a>
                </h3>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="portfolio-card-items">
              <div className="portfolio-image">
                <img src="assets/img/project/golkanda2.jpg" alt="img" />
                <a href="/Projectexplore2" className="lets-circle">
                  <i className="fa-sharp fa-regular fa-arrow-up-right"></i>{" "}
                  <br />
                  Project details
                </a>
              </div>
              <div className="portfolio-content">
                <h6>
                  <span>//</span> creative art
                </h6>
                <h3>
                  <a href="project-details.html">Color for simple Company</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedProjects2;
