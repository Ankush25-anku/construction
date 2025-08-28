import React from "react";

const Home3Hero = () => {
  return (
    <section
      className="hero-secton hero-3 bg-cover"
      style={{ backgroundImage: "url('/assets/img/hero/hero-4.jpg')" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="hero-content">
              <h1 className="wow fadeInUp" data-wow-delay=".3s">
                <span>Create</span> unique content <span>in</span> second
              </h1>
              <p className="wow fadeInUp" data-wow-delay=".5s">
                Unlock the power of AI to generate high-quality images and
                videos in few seconds
              </p>
              <div className="hero-button wow fadeInUp" data-wow-delay=".7s">
                <a href="/contact" className="theme-btn style-2">
                  explore now{" "}
                  <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-image-items">
          <div className="hero-image style-2 wow fadeInUp" data-wow-delay=".3s">
            <img src="/assets/img/hero/02.jpg" alt="img" />
          </div>
          <div className="hero-image wow fadeInUp" data-wow-delay=".5s">
            <img src="/assets/img/hero/03.jpg" alt="img" />
          </div>
          <div className="hero-image style-3 wow fadeInUp" data-wow-delay=".7s">
            <img src="/assets/img/hero/04.jpg" alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home3Hero;
