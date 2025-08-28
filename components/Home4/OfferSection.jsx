import React from "react";

const OfferSection = () => {
  return (
    <section className="offer-section pb-120 fix">
      <div className="container">
        {/* Section Heading */}
        <div className="row g-3 align-items-end mb-4 pb-lg-2">
          <div className="col-md-8">
            <div className="section-title style-4 mb-0">
              <h6
                className="d-flex text-primary align-items-center gap-2 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <img src="/assets/img/section-badge4.png" alt="img" />
                What We Offer
              </h6>
              <h2 className="text-black wow fadeInUp" data-wow-delay=".5s">
                Our Medical Services
              </h2>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-md-end">
              <a
                href="about.html"
                className="theme-btn d-inline-block fw-medium py-3 px-4 theme-btn-3"
              >
                VIEW ALL BLOG
                <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="row g-4 align-items-end">
          {/* Service 1 */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="offer-box-items overflow-hidden bg-white">
              <div className="offer-image d-flex align-content-center justify-content-center mb-3 rounded-3 overflow-hidden">
                <img src="/assets/img/news/offer-service1.png" alt="img" className="w-100" />
                <div className="img-box d-flex align-items-center justify-content-center text-center">
                  <div>
                    <img
                      width="64"
                      height="64"
                      src="/assets/img/news/offer-helth.png"
                      alt="img"
                      className="mb-xxl-4 mb-md-3 mb-2 mx-auto d-block"
                    />
                    <a
                      href="about.html"
                      className="theme-btn d-inline-block fw-medium py-3 px-4 theme-btn-3"
                    >
                      READ MORE
                      <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="offer-content px-4">
                <h4 className="mb-1">
                  <a href="news-details.html" className="fw-semibold text-black">
                    General Medicine
                  </a>
                </h4>
                <p className="cmn-pra">
                  Diagnosis, treatment, and management of common illnesses and health concerns.
                </p>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
            <div className="offer-box-items overflow-hidden bg-white">
              <div className="offer-image d-flex align-content-center justify-content-center mb-3 rounded-3 overflow-hidden">
                <img src="/assets/img/news/offer-service2.png" alt="img" className="w-100" />
                <div className="img-box d-flex align-items-center justify-content-center text-center">
                  <div>
                    <img
                      width="64"
                      height="64"
                      src="/assets/img/news/offer-helth.png"
                      alt="img"
                      className="mb-xxl-4 mb-md-3 mb-2 mx-auto d-block"
                    />
                    <a
                      href="about.html"
                      className="theme-btn d-inline-block fw-medium py-3 px-4 theme-btn-3"
                    >
                      READ MORE
                      <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="offer-content px-4">
                <h4 className="mb-1">
                  <a href="news-details.html" className="fw-semibold text-black">
                    Gynecology & Women’s Health
                  </a>
                </h4>
                <p className="cmn-pra">
                  Comprehensive care for reproductive health, prenatal checkups, and family planning.
                </p>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
            <div className="offer-box-items overflow-hidden bg-white">
              <div className="offer-image d-flex align-content-center justify-content-center mb-3 rounded-3 overflow-hidden">
                <img src="/assets/img/news/offer-service3.png" alt="img" className="w-100" />
                <div className="img-box d-flex align-items-center justify-content-center text-center">
                  <div>
                    <img
                      width="64"
                      height="64"
                      src="/assets/img/news/offer-helth.png"
                      alt="img"
                      className="mb-xxl-4 mb-md-3 mb-2 mx-auto d-block"
                    />
                    <a
                      href="about.html"
                      className="theme-btn d-inline-block fw-medium py-3 px-4 theme-btn-3"
                    >
                      READ MORE
                      <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="offer-content px-4">
                <h4 className="mb-1">
                  <a href="news-details.html" className="fw-semibold text-black">
                    Mental Health Services
                  </a>
                </h4>
                <p className="cmn-pra">
                  Immediate care for injuries, infections, and sudden health issues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
