import React from "react";

const AboutSectionHome3 = () => {
  return (
    <section
      className="about-section fix section-padding-2 bg-cover"
      style={{
        backgroundImage: "url('/assets/img/about/work-process-bg.jpg')",
      }}
    >
      <div className="vector-shape">
        <img src="/assets/img/Vector.png" alt="img" />
      </div>
      <div className="vector-shape-2">
        <img src="/assets/img/Vector-2.png" alt="img" />
      </div>
      <div className="container">
        <div className="about-wrapper-3">
          <div className="section-title-area">
            <div className="section-title">
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Create <b>stunning</b> image <br />
                and video instantly <br />
                no <b>extra skills</b> needed
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5">
              <div className="about-items">
                <div className="about-image img-custom-anim-top">
                  <img src="/assets/img/about/06.jpg" alt="img" />
                </div>
                <div className="about-content">
                  <h3 className="wow fadeInUp" data-wow-delay=".3s">
                    Instant creativity at your <span>fingertips</span>
                  </h3>
                  <p className="wow fadeInUp" data-wow-delay=".5s">
                    Duise sagittis accumsan magna over adipiscing laoreet
                    ultrices magna consectetuer the iaculis rutrum morbi
                    habitasse orci libero porttitor scelerisque acid vivamus
                    molestie mollise ultrices egestas suscip
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about-image-items-2">
                <p className="about-text wow fadeInUp" data-wow-delay=".3s">
                  Duise sagittis accumsan magna on adipiscing laoreet ultrices
                  magna consectetuer eiaculis rutrum morbie habitasse orci
                  libero porttitor scelerisque acid vivamus molestie mollise
                </p>
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div
                      className="about-image-2 img-custom-anim-top wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <img src="/assets/img/about/07.jpg" alt="img" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="about-image-2 img-custom-anim-left wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <img src="/assets/img/about/04.jpg" alt="img" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="about-image-2 img-custom-anim-right wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <img src="/assets/img/about/05.jpg" alt="img" />
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

export default AboutSectionHome3;
