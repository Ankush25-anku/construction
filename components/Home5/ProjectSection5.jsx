import React from "react";

const ProjectSection5 = () => {
  return (
    <section className="project-section-5 section-padding">
      <div className="container">
        <div className="section-title-area">
          <div className="section-title style-5">
            <h6 className="text-primary wow fadeInUp" data-wow-delay=".3s">
              Featured Projects
            </h6>
            <h2 className="text-black wow fadeInUp" data-wow-delay=".5s">
              AI Home Makeover Gallery
            </h2>
          </div>
          <a
            href="project.html"
            className="theme-btn style-5 wow fadeInUp"
            data-wow-delay=".5s"
          >
            view all project{" "}
            <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
          </a>
        </div>

        <div className="row">
          <div className="col-xl-12">
            <div className="project-image-item-5">
              <div className="project-image">
                <img src="/assets/img/project/014.jpg" alt="img" />
                <div className="project-content">
                  <h2>
                    <a href="project-details.html">Luxurious Home</a>
                  </h2>
                  <p>_Interior Design</p>
                </div>
              </div>
            </div>

            <div className="project-image-item-5">
              <div className="project-image">
                <img src="/assets/img/project/015.jpg" alt="img" />
                <div className="project-content">
                  <h2>
                    <a href="project-details.html">Soft Minimalism</a>
                  </h2>
                  <p>_Interior Design</p>
                </div>
              </div>
            </div>

            <div className="project-image-item-5">
              <div className="project-image">
                <img src="/assets/img/project/016.jpg" alt="img" />
                <div className="project-content">
                  <h2>
                    <a href="project-details.html">Modern Kitchen</a>
                  </h2>
                  <p>_Interior Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection5;
