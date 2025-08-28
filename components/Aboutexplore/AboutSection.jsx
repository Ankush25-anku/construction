import React from "react";

const AboutExplore = () => {
  return (
    <section
      className="about-section style-padding section-padding fix"
      style={{
        backgroundImage: "url('/assets/img/hero/hero-bg-34.png')",
      }}
    >
      <div className="bg-shape">
        <img src="assets/img/about/bg-shape.png" alt="shape-img" />
      </div>
      <div className="color-bg">
        <img src="assets/img/about/color-bg-shape.png" alt="img" />
      </div>
      <div className="color-bg-2">
        <img src="assets/img/about/color-bg-shape-2.png" alt="img" />
      </div>
      <div className="container">
        <div className="section-title ml-200">
          <h6 className="wow fadeInUp">
            <img src="assets/img/star.png" alt="img" /> Who we are
          </h6>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Explore the AI power <br />
            <span>
              & our <b>innovative</b> solutions
            </span>
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-5">
            <div className="about-image-33 img-custom-anim-left">
              <img
                src="assets/img/about/065.jpg"
                alt="img"
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
              />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-image-33 img-custom-anim-right">
              <img
                src="assets/img/about/066.jpg"
                alt="img"
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
              />
            </div>
          </div>
        </div>

        <div className="about-wrapper mt-4">
          <ul className="nav">
            <li className="nav-item wow fadeInUp" data-wow-delay=".3s">
              <a href="#Mission" data-bs-toggle="tab" className="nav-link">
                Our Mission
              </a>
            </li>
            <li className="nav-item wow fadeInUp" data-wow-delay=".5s">
              <a
                href="#Vision"
                data-bs-toggle="tab"
                className="nav-link active"
              >
                Our Vision
              </a>
            </li>
            <li className="nav-item wow fadeInUp" data-wow-delay=".5s">
              <a href="#Feature" data-bs-toggle="tab" className="nav-link">
                Key Feature
              </a>
            </li>
          </ul>
          <div className="tab-content">
            {/* Mission Tab */}
            <div id="Mission" className="tab-pane fade">
              <div className="about-items">
                <div className="about-content">
                  <p>
                    Duise sagittis accumsan magna on adipiscine laoreet ultrices
                    magna consectetuer eiaculis rutrum morbie habitasse orcids
                    libero porttitor molestie mollise
                  </p>
                  <ul className="list-items">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="14"
                        viewBox="0 0 22 14"
                        fill="none"
                      >
                        <path
                          d="M11.3909 14C11.0558 14 10.8325 13.8667..."
                          fill="#EFFB53"
                        />
                        <path
                          d="M5.80711 14C5.47208 14 5.24873..."
                          fill="#EFFB53"
                        />
                      </svg>
                      <span>Real-World Transformations</span>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="14"
                        viewBox="0 0 22 14"
                        fill="none"
                      >
                        <path d="M11.3909 14C11.0558 14..." fill="#EFFB53" />
                        <path d="M5.80711 14C5.47208 14..." fill="#EFFB53" />
                      </svg>
                      <span>Innovative AI Solutions</span>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="14"
                        viewBox="0 0 22 14"
                        fill="none"
                      >
                        <path d="M11.3909 14C11.0558 14..." fill="#EFFB53" />
                        <path d="M5.80711 14C5.47208 14..." fill="#EFFB53" />
                      </svg>
                      <span>Bot Brains, Business Boosters</span>
                    </li>
                  </ul>
                  <a href="about.html" className="theme-btn">
                    explore now{" "}
                    <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                  </a>
                </div>
                <div className="about-image">
                  <img src="assets/img/about/01.jpg" alt="img" />
                </div>
              </div>
            </div>

            {/* Vision Tab */}
            <div id="Vision" className="tab-pane fade show active">
              <div className="about-items">
                <div className="about-content">
                  <p className="wow fadeInUp" data-wow-delay=".3s">
                    Duise sagittis accumsan magna on adipiscine laoreet ultrices
                    magna consectetuer eiaculis rutrum morbie habitasse orcids
                    libero porttitor molestie mollise
                  </p>
                  <ul className="list-items wow fadeInUp" data-wow-delay=".5s">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="14"
                        viewBox="0 0 22 14"
                        fill="none"
                      >
                        <path d="M11.3909 14C11.0558 14..." fill="#EFFB53" />
                        <path d="M5.80711 14C5.47208 14..." fill="#EFFB53" />
                      </svg>
                      <span>Real-World Transformations</span>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="14"
                        viewBox="0 0 22 14"
                        fill="none"
                      >
                        <path d="M11.3909 14C11.0558 14..." fill="#EFFB53" />
                        <path d="M5.80711 14C5.47208 14..." fill="#EFFB53" />
                      </svg>
                      <span>Innovative AI Solutions</span>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="14"
                        viewBox="0 0 22 14"
                        fill="none"
                      >
                        <path d="M11.3909 14C11.0558 14..." fill="#EFFB53" />
                        <path d="M5.80711 14C5.47208 14..." fill="#EFFB53" />
                      </svg>
                      <span>Bot Brains, Business Boosters</span>
                    </li>
                  </ul>
                  <a
                    href="about.html"
                    className="theme-btn wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    explore now{" "}
                    <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                  </a>
                </div>
                <div className="about-image wow fadeInUp" data-wow-delay=".3s">
                  <img src="assets/img/about/01.jpg" alt="img" />
                </div>
              </div>
            </div>

            {/* Feature Tab */}
            <div id="Feature" className="tab-pane fade">
              <div className="about-items">
                <div className="about-content">
                  <p className="wow fadeInUp" data-wow-delay=".3s">
                    Duise sagittis accumsan magna on adipiscine laoreet ultrices
                    magna consectetuer eiaculis rutrum morbie habitasse orcids
                    libero porttitor molestie mollise
                  </p>
                  <ul className="list-items wow fadeInUp" data-wow-delay=".5s">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="14"
                        viewBox="0 0 22 14"
                        fill="none"
                      >
                        <path d="M11.3909 14C11.0558 14..." fill="#EFFB53" />
                        <path d="M5.80711 14C5.47208 14..." fill="#EFFB53" />
                      </svg>
                      <span>Real-World Transformations</span>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="14"
                        viewBox="0 0 22 14"
                        fill="none"
                      >
                        <path d="M11.3909 14C11.0558 14..." fill="#EFFB53" />
                        <path d="M5.80711 14C5.47208 14..." fill="#EFFB53" />
                      </svg>
                      <span>Innovative AI Solutions</span>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="14"
                        viewBox="0 0 22 14"
                        fill="none"
                      >
                        <path d="M11.3909 14C11.0558 14..." fill="#EFFB53" />
                        <path d="M5.80711 14C5.47208 14..." fill="#EFFB53" />
                      </svg>
                      <span>Bot Brains, Business Boosters</span>
                    </li>
                  </ul>
                  <a
                    href="about.html"
                    className="theme-btn wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    explore now{" "}
                    <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                  </a>
                </div>
                <div className="about-image wow fadeInUp" data-wow-delay=".3s">
                  <img src="assets/img/about/01.jpg" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="brand-section section-padding pb-0">
        <div className="container">
          <div className="swiper brand-slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="brand-image text-center">
                  <img src="/assets/img/brand/01.png" alt="img" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-image text-center">
                  <img src="/assets/img/brand/02.png" alt="img" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-image text-center">
                  <img src="/assets/img/brand/03.png" alt="img" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-image text-center">
                  <img src="/assets/img/brand/04.png" alt="img" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-image text-center">
                  <img src="/assets/img/brand/05.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutExplore;

//   <section
//       className="about-section style-padding section-padding fix"
//       style={{ backgroundImage: "url('/assets/img/about/hero-bg-3.png')" }}
//     ></section>
