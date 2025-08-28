import React from "react";

const Home5WhyChooseUs = () => {
  return (
    <section className="why-choose-us-section section-padding fix">
      <div className="container">
        {/* Section Title */}
        <div className="section-title style-5 text-center">
          <h6 className="text-primary wow fadeInUp" data-wow-delay=".3s">
            Why Choose Us
          </h6>
          <h2 className="text-black wow fadeInUp" data-wow-delay=".5s">
            Design Meets Technology
          </h2>
        </div>

        {/* Items */}
        <div className="row g-0">
          <div
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".2s"
          >
            <div className="why-choose-us-item-5 style-5">
              <div className="icon">
                <img src="/assets/img/home-5/icon/01.svg" alt="AI Design" />
              </div>
              <div className="content">
                <h3>AI-Powered Room Design</h3>
                <p>Generate personalized layouts and decor suggestions</p>
              </div>
            </div>
          </div>

          <div
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="why-choose-us-item-5">
              <div className="icon">
                <img src="/assets/img/home-5/icon/02.svg" alt="Budget" />
              </div>
              <div className="content">
                <h3>Budget-Friendly Planning</h3>
                <p>Generate personalized layouts and decor suggestions</p>
              </div>
            </div>
          </div>

          <div
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".6s"
          >
            <div className="why-choose-us-item-5 style-5">
              <div className="icon">
                <img src="/assets/img/home-5/icon/03.svg" alt="Color Palette" />
              </div>
              <div className="content">
                <h3>Smart Color Palette Generator</h3>
                <p>Generate personalized layouts and decor suggestions</p>
              </div>
            </div>
          </div>

          <div
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".8s"
          >
            <div className="why-choose-us-item-5">
              <div className="icon">
                <img src="/assets/img/home-5/icon/04.svg" alt="Mood Boards" />
              </div>
              <div className="content">
                <h3>Personalized Mood Boards</h3>
                <p>Generate personalized layouts and decor suggestions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home5WhyChooseUs;
