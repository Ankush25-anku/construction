import React from "react";

const ProjectSection = () => {
  return (
    <section
      className="project-section fix section-padding section-bg bg-cover"
      style={{ backgroundImage: "url('assets/img/project/line-shape.png')" }}
    >
      <div className="color-bg">
        <img src="assets/img/project/color-bg.png" alt="img" />
      </div>

      <div className="project-wrapper">
        {/* Updated Title */}
        <h2
          className="project-title text-center wow fadeInUp"
          data-wow-delay=".3s"
        >
          Some Of Our <br />
          <span className="selected-text">Popular Dream</span>{" "}
          <span className="projects-text">Projects</span>
        </h2>

        <div className="row align-items-center">
          {/* Project 1 - Ace Ananta */}
          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="project-image">
              <img src="assets/img/project/ace1.jpg" alt="Ace Ananta" />
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
            <div className="project-content">
              <span>Hyderabad, Telangana</span>
              <h3>
                <a href="/Projectexplore">Ace Ananta</a>
              </h3>
              <p>Tatti Annaram, Nagole, Hyderabad, Telangana 500068</p>
              <a href="/Projectexplore" className="theme-btn">
                Explore now{" "}
                <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
              </a>
            </div>
          </div>

          {/* Project 2 - Aakruthi Arcadia */}
          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="project-content">
              <span>Hyderabad, Telangana</span>
              <h3>
                <a href="/Projectexplore2">Aakruthi Arcadia</a>
              </h3>
              <p>Gajularamaram, Hyderabad, Telangana 500055</p>
              <a href="/Projectexplore2" className="theme-btn">
                Explore now{" "}
                <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
            <div className="project-image style-2">
              <img src="assets/img/project/aak3.jpg" alt="Aakruthi Arcadia" />
            </div>
          </div>

          {/* Project 3 - Affinity Brundaavana */}
          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="project-image">
              <img
                src="assets/img/project/aff1.jpg"
                alt="Affinity Brundaavana"
              />
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
            <div className="project-content">
              <span>Bengaluru, Karnataka</span>
              <h3>
                <a href="/Relatedproject">Affinity Brundaavana</a>
              </h3>
              <p>Sampigehalli, Jakkur Main Road, Bengaluru – 560064</p>
              <a href="/Relatedproject" className="theme-btn">
                Explore now{" "}
                <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
              </a>
            </div>
          </div>

          {/* Project 4 - Sri Balaji Elite */}
          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="project-content">
              <span>Available for Rent</span>
              <h3>
                <a href="/Material">Centering Material</a>
              </h3>
              <p>Bengaluru, Karnataka</p>
              <a href="/Material" className="theme-btn">
                Explore now{" "}
                <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
            <div className="project-image style-2 text-center">
              <img
                src="assets/img/project/material4.jpg"
                alt="Affinity Brundaavana"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
