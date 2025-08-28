import React from "react";

const ProjectDetails4 = () => {
  return (
    <section className="portfolio-details-section section-padding fix section-bg">
      <div className="container">
        <div className="project-details-wrapper">
          {/* Added mt-5 to push images slightly down */}
          <div className="row g-4 justify-content-center mt-5">
            <div className="col-xl-8">
              <div className="project-details-content">
                {/* reduced gap with mb-4 */}
                <div className="row g-4 mt-3 mb-4 justify-content-center">
                  <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
                    <div className="details-image">
                      <img
                        src="/assets/img/project/material1.jpg"
                        alt="project"
                        className="img-fluid"
                      />
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
                    <div className="details-image">
                      <img
                        src="/assets/img/project/material2.jpg"
                        alt="project"
                        className="img-fluid"
                      />
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
                    <div className="details-image">
                      <img
                        src="/assets/img/project/material7.jpg"
                        alt="project"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails4;
