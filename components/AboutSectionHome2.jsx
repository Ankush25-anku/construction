import React from "react";

const AboutSectionHome2 = () => {
  return (
    <section className="about-section fix section-padding-2 pt-0">
      <div
        className="about-wrapper-2 bg-cover"
        style={{ backgroundImage: "url('assets/img/about/about-bg.jpg')" }}
      >
        <div className="container-fluid">
          <div className="row g-4 align-items-center">
            {/* Left Image Section */}
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="about-image">
                <img src="assets/img/about/02.png" alt="img" />
              </div>
            </div>

            {/* Right Content Section */}
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title style-2">
                  <h6 className="wow fadeInUp">
                    <img src="assets/img/circle-title.png" alt="img" /> about chatbot
                  </h6>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Perfect solutions business <br />
                    & <span>creative</span> work
                  </h2>
                </div>

                {/* About List */}
                <ul
                  className="about-list mt-3 mt-md-0 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <li>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="14"
                        viewBox="0 0 22 14"
                        fill="none"
                      >
                        <path
                          d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z"
                          fill="#514DE0"
                        />
                        <path
                          d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z"
                          fill="#514DE0"
                        />
                      </svg>
                      Real-World Transformations
                    </span>
                    Chatbot learns from interactions constantly improving responses
                  </li>

                  <li>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="14"
                        viewBox="0 0 22 14"
                        fill="none"
                      >
                        <path
                          d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z"
                          fill="#514DE0"
                        />
                        <path
                          d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z"
                          fill="#514DE0"
                        />
                      </svg>
                      Integration with E-commerce
                    </span>
                    Monitor chatbot are interaction in real-time to ensure high-quality
                  </li>
                </ul>

                {/* Button */}
                <a
                  href="about.html"
                  className="theme-btn theme-btn-2 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  Learn more <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionHome2;
