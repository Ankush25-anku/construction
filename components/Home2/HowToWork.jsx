import React from "react";

const HowToWork = () => {
  return (
    <section
      className="how-to-work-section fix section-padding-2 bg-cover"
      style={{ backgroundImage: "url('/assets/img/how-work-bg.jpg')" }}
    >
      <div className="container">
        <div className="section-title style-2 text-center">
          <img
            src="/assets/img/circle-title-2.png"
            alt="img"
            className="wow fadeInUp"
          />
          <h6 className="text-white mt-3 wow fadeInUp" data-wow-delay=".3s">
            How we works
          </h6>
          <h2 className="text-white wow fadeInUp" data-wow-delay=".5s">
            Understanding our <br />
            AI <span>chatbot’s</span> workflow
          </h2>
        </div>

        <div className="how-to-work-wrapper">
          {/* Step 1 */}
          <div className="how-too-work-items text-center wow fadeInUp">
            <div className="icon">
              <img src="/assets/img/icon/15.svg" alt="img" />
              <div className="bar-shape">
                <img src="/assets/img/work-bar-shape.png" alt="img" />
              </div>
            </div>
            <div className="content">
              <h3>Choose Plan</h3>
              <p>Start by signing up for our service with and proces simple</p>
            </div>
          </div>
          <div className="arrow-shape wow fadeInUp" data-wow-delay=".2s">
            <img src="/assets/img/work-arrow.png" alt="img" />
          </div>

          {/* Step 2 */}
          <div
            className="how-too-work-items text-center wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="icon">
              <img src="/assets/img/icon/16.svg" alt="img" />
              <div className="bar-shape">
                <img src="/assets/img/work-bar-shape.png" alt="img" />
              </div>
            </div>
            <div className="content">
              <h3>Choose Plan</h3>
              <p>Start by signing up for our service with and proces simple</p>
            </div>
          </div>
          <div className="arrow-shape wow fadeInUp" data-wow-delay=".6s">
            <img src="/assets/img/work-arrow.png" alt="img" />
          </div>

          {/* Step 3 */}
          <div
            className="how-too-work-items text-center wow fadeInUp"
            data-wow-delay=".7s"
          >
            <div className="icon">
              <img src="/assets/img/icon/17.svg" alt="img" />
              <div className="bar-shape">
                <img src="/assets/img/work-bar-shape.png" alt="img" />
              </div>
            </div>
            <div className="content">
              <h3>Choose Plan</h3>
              <p>Start by signing up for our service with and proces simple</p>
            </div>
          </div>
          <div className="arrow-shape wow fadeInUp" data-wow-delay=".8s">
            <img src="/assets/img/work-arrow.png" alt="img" />
          </div>

          {/* Step 4 */}
          <div
            className="how-too-work-items text-center wow fadeInUp"
            data-wow-delay=".9s"
          >
            <div className="icon">
              <img src="/assets/img/icon/18.svg" alt="img" />
              <div className="bar-shape">
                <img src="/assets/img/work-bar-shape.png" alt="img" />
              </div>
            </div>
            <div className="content">
              <h3>Choose Plan</h3>
              <p>Start by signing up for our service with and proces simple</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToWork;
