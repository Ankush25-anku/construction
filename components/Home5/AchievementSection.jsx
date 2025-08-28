import React from "react";

const AchievementSection = () => {
  return (
    <section className="achievement-section section-padding bg-color fix">
      <div className="container">
        <div className="section-title style-5 text-center">
          <h6
            className="text-primary wow fadeInUp"
            data-wow-delay=".3s"
          >
            our achievement
          </h6>
          <h2
            className="text-black wow fadeInUp"
            data-wow-delay=".5s"
          >
            international awards
          </h2>
        </div>

        <div className="row">
          <div className="col-xl-12">
            {/* Item 1 */}
            <div
              className="achievement-box-items wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="accordion-single">
                <div className="header-area">
                  <div className="accordion-btn">
                    <div className="logo-item">
                      <div className="logo">
                        <img
                          src="/assets/img/home-5/feature/logo-1.png"
                          alt="logo"
                        />
                      </div>
                      <h3>
                        Modern Minimalist <br /> Living Room
                      </h3>
                    </div>
                    <div className="content-item">
                      <p>
                        A sleek, clutter-free space optimized by AI for natural
                        light and comfort, featuring smart furniture placement
                      </p>
                      <div className="achievement-image">
                        <img
                          src="/assets/img/home-5/feature/03.jpg"
                          alt="img"
                        />
                      </div>
                      <ul className="button-list">
                        <li>
                          <i className="fa-solid fa-calendar-days"></i>
                          December 2022
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div
              className="achievement-box-items wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="accordion-single">
                <div className="header-area">
                  <div className="accordion-btn">
                    <div className="logo-item">
                      <div className="logo">
                        <img
                          src="/assets/img/home-5/feature/logo-2.png"
                          alt="logo"
                        />
                      </div>
                      <h3>
                        Modern Minimalist <br /> Living Room
                      </h3>
                    </div>
                    <div className="content-item">
                      <p>
                        A sleek, clutter-free space optimized by AI for natural
                        light and comfort, featuring smart furniture placement
                      </p>
                      <div className="achievement-image">
                        <img
                          src="/assets/img/home-5/feature/04.jpg"
                          alt="img"
                        />
                      </div>
                      <ul className="button-list">
                        <li>
                          <i className="fa-solid fa-calendar-days"></i>
                          December 2022
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div
              className="achievement-box-items wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="accordion-single">
                <div className="header-area">
                  <div className="accordion-btn">
                    <div className="logo-item">
                      <div className="logo">
                        <img
                          src="/assets/img/home-5/feature/logo-3.png"
                          alt="logo"
                        />
                      </div>
                      <h3>
                        Modern Minimalist <br /> Living Room
                      </h3>
                    </div>
                    <div className="content-item">
                      <p>
                        A sleek, clutter-free space optimized by AI for natural
                        light and comfort, featuring smart furniture placement
                      </p>
                      <div className="achievement-image">
                        <img
                          src="/assets/img/home-5/feature/03.jpg"
                          alt="img"
                        />
                      </div>
                      <ul className="button-list">
                        <li>
                          <i className="fa-solid fa-calendar-days"></i>
                          December 2022
                        </li>
                      </ul>
                    </div>
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

export default AchievementSection;
