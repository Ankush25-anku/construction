import React from "react";

const BenefitSection = () => {
  return (
    <section className="benefit-section fix section-padding section-bg">
      <div className="container">
        <div className="benefit-wrapper">
          <div className="row g-4 align-items-center">
            {/* Left Content */}
            <div className="col-xl-4 col-lg-6">
              <div className="benefit-left-content">
                <div className="section-title">
                  <h6 className="wow fadeInUp">
                    <img src="/assets/img/star.png" alt="img" />
                    our benefit
                  </h6>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Innovate the intelligence lead with AI
                  </h2>
                </div>
                <p className="mt-3 mt-md-0">
                  Duise sagittis accumsan magna onest adipisciny laoreet ultrices
                  magna consectetuer eiaculis rutrium morbie habitasse orcide libero
                  porttitor scelerisque acid vivamu
                </p>
                <a
                  href="about.html"
                  className="theme-btn wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  free generate{" "}
                  <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                </a>
              </div>
            </div>

            {/* Center Image */}
            <div className="col-xl-4 col-lg-6">
              <div className="benefit-image">
                <img src="/assets/img/benefit-image.jpg" alt="img" />
              </div>
            </div>

            {/* Right Content */}
            <div className="col-xl-4 col-lg-6">
              <div className="benefit-right-items">
                {/* Item 1 */}
                <div className="benefit-icon-items">
                  <div className="icon">
                    <img src="/assets/img/icon/27.svg" alt="img" />
                  </div>
                  <div className="content">
                    <h3>Diverse Content</h3>
                    <p>
                      Magna onest also atornas adipiscine contacting pure ams agency
                      rutrium morbie over habitasse
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="benefit-icon-items">
                  <div className="icon">
                    <img src="/assets/img/icon/27.svg" alt="img" />
                  </div>
                  <div className="content">
                    <h3>Secure & Reliable</h3>
                    <p>
                      Magna onest also atornas adipiscine contacting pure ams agency
                      rutrium morbie over habitasse
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="benefit-icon-items">
                  <div className="icon">
                    <img src="/assets/img/icon/27.svg" alt="img" />
                  </div>
                  <div className="content">
                    <h3>Friendly Interface</h3>
                    <p>
                      Magna onest also atornas adipiscine contacting pure ams agency
                      rutrium morbie over habitasse
                    </p>
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

export default BenefitSection;
