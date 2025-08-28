import React from "react";

const Home5Hero = () => {
  return (
    <section className="hero-section hero-5 fix">
      {/* Social Links */}
      <div className="social-icon-list d-flex align-items-center">
        <a href="#">linkedin</a>
        <a href="#">twitter</a>
        <a href="#">facebook</a>
      </div>

      <div className="container-fluid">
        <div className="row g-4">
          {/* Left Image Section */}
          <div className="col-lg-6">
            <div className="hero-image">
              <img
                src="/assets/img/hero/hero-1.jpg"
                alt="img"
                className="wow img-custom-anim-left"
                data-wow-duration="1.3s"
                data-wow-delay="0.3s"
              />
              <div className="hero-image-2">
                <img
                  src="/assets/img/hero/hero-2.jpg"
                  alt="img"
                  className="wow img-custom-anim-top"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.3s"
                />
                <div className="hero-text">
                  <div className="icon">
                    <img src="/assets/img/home-5/hero/arrow.png" alt="img" />
                  </div>
                  <h4>
                    20 years <br />
                    experience
                  </h4>
                </div>
                <div className="shape-image">
                  <img
                    src="/assets/img/home-5/hero/shape.png"
                    alt="img"
                    className="wow img-custom-anim-right"
                    data-wow-duration="1.3s"
                    data-wow-delay="0.3s"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Section */}
          <div className="col-lg-6">
            <div className="hero-content">
              <h1
                className="wow img-custom-anim-left"
                data-wow-duration="1.3s"
                data-wow-delay="0.3s"
              >
                AI-Powered Interior Design Made Easy{" "}
                <img
                  src="/assets/img/home-5/hero/star.png"
                  alt="img"
                  className="float-bob-y"
                />
              </h1>
              <p className="wow fadeInUp" data-wow-delay=".3s">
                Bonubia cumis accumsan massa mattis curae convallis parturient
                massa semper quam fermentum facilis mauris many dolor see after
              </p>
              <div
                className="hero-button-item wow fadeInUp"
                data-wow-delay=".5s"
              >
                <a href="#" className="circle-button">
                  <span className="btn-text">
                    Learn <br /> more
                  </span>
                  <i className="fa-solid fa-arrow-right-long"></i>
                </a>
                <div className="hero-cont">
                  <h3>W.</h3>
                  <h4>
                    Award winner <br />
                    company
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home5Hero;
