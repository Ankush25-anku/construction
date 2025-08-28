import React from "react";

const HowItWorks = () => {
  return (
    <section className="how-to-work-section fix section-padding section-bg">
      <div className="container">
        <div className="section-title text-center">
          <h6 className="wow fadeInUp">
            <img src="/assets/img/star.png" alt="img" /> we we works
          </h6>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Understanding our <br />
            <span>
              AI <b>chatbot’s</b> workflow
            </span>
          </h2>
        </div>
        <div className="how-to-work-wrapper">
          {/* Step 1 */}
          <div
            className="how-too-work-items text-center wow fadeInUp"
            data-wow-delay=".2s"
          >
            <div className="icon">
              <img src="/assets/img/icon/23.svg" alt="img" />
              <div className="bar-shape">
                <img src="/assets/img/work-bar-shape.png" alt="img" />
              </div>
            </div>
            <div className="content">
              <h3>Choose Plan</h3>
              <p>Start by signing up for our service with and proces simple</p>
            </div>
          </div>

          <div className="arrow-shape">
            <img src="/assets/img/work-arrow.png" alt="img" />
          </div>

          {/* Step 2 */}
          <div
            className="how-too-work-items text-center wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="icon">
              <img src="/assets/img/icon/24.svg" alt="img" />
              <div className="bar-shape">
                <img src="/assets/img/work-bar-shape.png" alt="img" />
              </div>
            </div>
            <div className="content">
              <h3>Setup Chatbot</h3>
              <p>Start by signing up for our service with and proces simple</p>
            </div>
          </div>

          <div className="arrow-shape">
            <img src="/assets/img/work-arrow.png" alt="img" />
          </div>

          {/* Step 3 */}
          <div
            className="how-too-work-items text-center wow fadeInUp"
            data-wow-delay=".6s"
          >
            <div className="icon">
              <img src="/assets/img/icon/25.svg" alt="img" />
              <div className="bar-shape">
                <img src="/assets/img/work-bar-shape.png" alt="img" />
              </div>
            </div>
            <div className="content">
              <h3>Train Your Bot</h3>
              <p>Start by signing up for our service with and proces simple</p>
            </div>
          </div>

          <div className="arrow-shape">
            <img src="/assets/img/work-arrow.png" alt="img" />
          </div>

          {/* Step 4 */}
          <div
            className="how-too-work-items text-center wow fadeInUp"
            data-wow-delay=".8s"
          >
            <div className="icon">
              <img src="/assets/img/icon/26.svg" alt="img" />
              <div className="bar-shape">
                <img src="/assets/img/work-bar-shape.png" alt="img" />
              </div>
            </div>
            <div className="content">
              <h3>Client Support</h3>
              <p>Start by signing up for our service with and proces simple</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
