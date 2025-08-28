import React from "react";

const Home5FeatureAI = () => {
  return (
    <section className="feature-ai-section section-padding fix pt-0">
      <div className="container">
        <div className="feature-ai-wrapper-5">
          <div className="row g-4 align-content-center">
            {/* Left Content */}
            <div className="col-lg-6">
              <div className="feature-ai-content">
                <div className="section-title style-5 mb-0">
                  <h6
                    className="style-new text-primary wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    Who We Are
                  </h6>
                  <h2 className="wow fadeInUp text-black" data-wow-delay=".5s">
                    Where AI Meets Interior Design
                  </h2>
                </div>

                <p className="text wow fadeInUp" data-wow-delay=".3s">
                  We combine advanced AI technology with creative design to
                  craft personalized, stylish, and functional living
                  spaces—making interior design effortless and accessible for
                  everyone.
                </p>

                {/* Feature Item 1 */}
                <div
                  className="feature-ai-item wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="icon">
                    <img
                      src="/assets/img/home-5/icon/05.svg"
                      alt="Modern Design"
                    />
                  </div>
                  <div className="content">
                    <h5>Modern Design</h5>
                    <p>
                      After all, what's the issue with bad rent by real in?
                      However, she lived despite the fact that
                    </p>
                  </div>
                </div>

                {/* Feature Item 2 */}
                <div
                  className="feature-ai-item wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="icon">
                    <img
                      src="/assets/img/home-5/icon/06.svg"
                      alt="Quality Work"
                    />
                  </div>
                  <div className="content">
                    <h5>Quality Work</h5>
                    <p>
                      After all, what's the issue with bad rent by real in?
                      However, she lived despite the fact that
                    </p>
                  </div>
                </div>

                <a
                  href="/contact.html"
                  className="theme-btn style-5 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  Learn more{" "}
                  <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                </a>
              </div>
            </div>

            {/* Right Image + Video */}
            <div className="col-lg-6">
              <div className="feature-ai-image">
                <img
                  src="/assets/img/feature/01.jpg"
                  alt="AI Interior"
                  className="wow img-custom-anim-right"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.3s"
                />
                <div
                  className="video-bg bg-cover wow img-custom-anim-top"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.3s"
                  style={{
                    backgroundImage: "url(/assets/img/feature/029.jpg)",
                  }}
                >
                  <div className="video-content">
                    <div className="video-button">
                      <a
                        href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                        className="video-btn video-popup"
                      >
                        <i className="fa-solid fa-play"></i>
                      </a>
                    </div>
                    <h3>
                      founded <br /> in 1965
                    </h3>
                    <p>
                      Meat It so fish a morning, may night for grass shall moved
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Right */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home5FeatureAI;
