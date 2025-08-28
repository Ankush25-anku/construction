import React from "react";

const AboutSectionHome6 = () => {
  return (
    <section
      className="about-section section-padding fix bg-cover"
      style={{ backgroundImage: "url('/assets/img/home-6/about/bg.jpg')" }}
    >
      <div className="container">
        <div className="about-wrapper-6">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="about-image">
                <img
                  src="/assets/img/about/0102.jpg"
                  alt="img"
                  className="wow img-custom-anim-top"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.3s"
                />
                <div
                  className="about-image-2 wow img-custom-anim-right"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.3s"
                >
                  <img src="/assets/img/about/0102.jpg" alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title style-6 mb-0">
                  <h6 className="wow fadeInUp" data-wow-delay=".3s">
                    About Us
                  </h6>
                  <h2 className="text-white wow fadeInUp" data-wow-delay=".5s">
                    Building the Future of Education
                  </h2>
                </div>
                <p className="text wow fadeInUp" data-wow-delay=".3s">
                  We combine artificial intelligence with educational expertise
                  to create smart, adaptive learning environments that inspire
                  growth, personalize instruction, and prepare students for a
                  rapidly changing world.
                </p>
                <div className="about-content-item wow fadeInUp" data-wow-delay=".5s">
                  <div className="count-item">
                    <h2>
                      <span className="count">590</span>+
                    </h2>
                    <p>
                      Satisfied <br /> Students
                    </p>
                  </div>
                  <div className="about-item">
                    <div className="about-icon-item">
                      <div className="icon">
                        <i className="fa fa-graduation-cap"></i>
                      </div>
                      <div className="content">
                        <h5>Skill Scholarships</h5>
                        <p>
                          After all, what's the issue with bad rent by real in?
                          However, she lived despite the fact that
                        </p>
                      </div>
                    </div>
                    <div className="about-icon-item mb-0">
                      <div className="icon">
                        <i className="fas fa-handshake"></i>
                      </div>
                      <div className="content">
                        <h5>Our Commitment</h5>
                        <p>
                          After all, what's the issue with bad rent by real in?
                          However, she lived despite the fact that
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="about.html"
                  className="theme-btn wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  More about us <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionHome6;
