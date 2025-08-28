import React from "react";

const HeroSectionHome2 = () => {
  return (
    <section
      className="hero-secton section-padding hero-2 bg-cover"
      style={{ backgroundImage: "url('/assets/img/hero/hero-bg.jpg')" }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-7">
            <div className="hero-content">
              <h1 className="wow fadeInUp" data-wow-delay=".3s">
                <span>Revolutionize</span> customer interplay for AI{" "}
                <span>chatbots</span>
              </h1>
              <p className="wow fadeInUp" data-wow-delay=".5s">
                Unlock the power of AI to generate high-quality images <br />{" "}
                and videos in less than minutes
              </p>
              <a
                href="index.html"
                className="theme-btn wow fadeInUp"
                data-wow-delay=".7s"
              >
                explore now{" "}
                <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-5 wow fadeInUp" data-wow-delay=".3s">
            <div
              className="hero-image"
              style={{ position: "relative", display: "inline-block" }}
            >
              {/* Robot image */}
              <img
                src="/assets/img/hero/hero.png"
                alt="hero"
                style={{
                  position: "relative",
                  zIndex: 2,
                  maxWidth: "100%",
                  height: "auto",
                  display: "block",
                }}
              />

              {/* Circle shape behind */}
              <div
                className="circle-shape"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 1,
                }}
              >
                <img
                  src="/assets/img/hero/hero21.png"
                  alt="circle-shape"
                  style={{
                    maxWidth: "120%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionHome2;
