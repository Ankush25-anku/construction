import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="about-section section-padding section-bg fix"
    >
      {/* Decorative Backgrounds */}
      <div className="bg-shape">
        <img src="assets/img/about/bg-shape.png" alt="shape" />
      </div>
      <div className="color-bg">
        {/* <img src="assets/img/about/color-bg-shape.png" alt="shape" /> */}
      </div>
      <div className="color-bg-2">
        <img src="assets/img/about/color-bg-shape-2.png" alt="shape" />
      </div>

      <div className="container">
        {/* Section Heading */}
        <div className="section-title text-center mb-5">
          <h6 className="wow fadeInUp d-inline-flex align-items-center gap-2">
            <img src="assets/img/star.png" alt="star" className="img-fluid" />
            <span>Who we are</span>
          </h6>

          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            We are the Leader in <br />
            <span>
              Construction <b>Industry</b>
            </span>
          </h2>
        </div>

        {/* About Content Wrapper */}
        <div className="about-wrapper row align-items-center g-4">
          {/* Left Content */}
          <div className="col-lg-6 col-md-12">
            <div className="about-content">
              <p className="wow fadeInUp" data-wow-delay=".3s">
                Welcome to Sri Balaji Ecstatic Infra LLP, where innovation meets
                craftsmanship and excellence is our standard. Founded in 2007,
                we have established ourselves as a leading name in the
                construction industry, serving clients with integrity and
                dedication.
                <br />
                <br />
                Our journey began with a vision to build more than just
                structures, our goal has always been to foster enduring
                relationships founded on trust and mutual respect. Over the
                years, we have steadfastly adhered to this vision, consistently
                delivering exceptional results and earning the trust of our
                clients and the admiration of our peers.
              </p>

              <ul className="list-items mt-3">
                <li className="flex items-center gap-2">
                  <CheckIcon /> <span>Perfect Planning</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon /> <span>Professional Workers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon /> <span>First Working Process</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon /> <span>Quality Materials</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon /> <span>Commitment to Safety</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon /> <span>Environmental Responsibility</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-6 col-md-12">
            <div className="about-image wow fadeInUp" data-wow-delay=".3s">
              <img
                src="assets/img/about/construction123.png"
                alt="about"
                className="img-fluid rounded-3 shadow"
              />
            </div>
          </div>
        </div>

        {/* Counter Section */}
        {/* <div className="counter-section section-padding pb-0 mt-5">
          <div className="container">
            <div className="row text-center g-4">
              <div className="col-md-4">
                <div
                  className="counter-items wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="icon mb-3">
                    <img src="assets/img/icon/01.svg" alt="icon" />
                  </div>
                  <h2>
                    <span className="count">236</span>
                  </h2>
                  <p>Finished Projects</p>
                </div>
              </div>

              <div className="col-md-4">
                <div
                  className="counter-items wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="icon mb-3">
                    <img src="assets/img/icon/01.svg" alt="icon" />
                  </div>
                  <h2>
                    <span className="count">150+</span>
                  </h2>
                  <p>Happy Clients</p>
                </div>
              </div>

              <div className="col-md-4">
                <div
                  className="counter-items wow fadeInUp"
                  data-wow-delay=".7s"
                >
                  <div className="icon mb-3">
                    <img src="assets/img/icon/01.svg" alt="icon" />
                  </div>
                  <h2>
                    <span className="count">18+</span>
                  </h2>
                  <p>Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

// ✅ Reusable Check Icon
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" fill="none">
    <path
      d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z"
      fill="#EFFB53"
    />
    <path
      d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z"
      fill="#EFFB53"
    />
  </svg>
);

export default AboutSection;
