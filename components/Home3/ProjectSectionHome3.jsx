import React from "react";

const ProjectSectionHome3 = () => {
  return (
    <section
      className="project-secton fix section-padding-2 pt-0 bg-cover"
      style={{
        backgroundImage: "url('/assets/img/about/work-process-bg.jpg')",
      }}
    >
      <div className="vector-shape">
        <img src="/assets/img/Vector-3.png" alt="img" />
      </div>
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="project-box-image img-custom-anim-left">
              <img src="/assets/img/project/04.jpg" alt="img" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="project-box-content">
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Text to video & Image <span>generate</span> easy ways
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".5s">
                Duise sagittis accumsan magna on adipiscing laoreet ultrices
                magna consectetuer eiaculis rutrum morbie habitasse orci libero
                porttitor scelerisque acid vivamus molestie best mollise
              </p>
              <a href="project-details.html" className="theme-btn style-2">
                Generate now{" "}
                <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="project-box-content style-2">
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Easily upscaling and <span>enhance</span> any image & video
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".5s">
                Duise sagittis accumsan magna on adipiscing laoreet ultrices
                magna consectetuer eiaculis rutrum morbie habitasse orci libero
                porttitor scelerisque acid vivamus molestie best mollise
              </p>
              <a
                href="project-details.html"
                className="theme-btn style-2 wow fadeInUp"
                data-wow-delay=".7s"
              >
                Generate now{" "}
                <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="project-box-image img-custom-anim-right">
              <img src="/assets/img/project/05.jpg" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSectionHome3;
