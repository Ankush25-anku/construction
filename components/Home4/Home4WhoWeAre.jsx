import React from "react";

const Home4WhoWeAre = () => {
  return (
    <section className="news-section section-bg2 section-padding fix">
      <div className="container">
        <div className="row gx-xxl-5 g-4">
          {/* Left Side - Image with Video */}
          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="who-thumb4 position-relative">
              <img
                src="/assets/img/who-thumb4.png"
                alt="img"
                className="w-100"
              />
              <a
                href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                className="video-btn video-popup"
              >
                <i className="fas fa-play"></i>
              </a>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
            <div className="section-title style-4">
              <h6
                className="d-flex text-primary align-items-center gap-2 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <img src="/assets/img/section-badge4.png" alt="img" />
                Who we are
              </h6>
              <h2
                className="text-black mb-md-3 mb-2 wow fadeInUp"
                data-wow-delay=".5s"
              >
                Excellence Through Experience
              </h2>
              <p className="cmn-pra">
                With decades of medical expertise, our dedicated team delivers
                trusted, high-quality care using proven methods, advanced
                technology, and a compassionate, patient-first approach.
              </p>
            </div>

            {/* Features List */}
            <div className="d-flex flex-column gap-3 mb-4 pb-xxl-2">
              <div
                className="d-flex text-primary align-items-center gap-3 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <img src="/assets/img/who-icon1.png" alt="img" />
                <div>
                  <h4 className="text-black mb-1">
                    Minor Procedures & Urgent Care
                  </h4>
                  <p className="cmn-pra">
                    Treatment for non-emergency injuries and conditions.
                  </p>
                </div>
              </div>

              <div
                className="d-flex text-primary align-items-center gap-3 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <img src="/assets/img/who-icon1.png" alt="img" />
                <div>
                  <h4 className="text-black mb-1">Telehealth Appointments</h4>
                  <p className="cmn-pra">
                    Remote consultations for convenient, at-home care.
                  </p>
                </div>
              </div>
            </div>

            {/* More About Us Button */}
            <a
              href="about.html"
              className="theme-btn d-inline-flex py-3 fw-normal px-4 theme-btn-3"
            >
              MORE ABOUT US
              <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home4WhoWeAre;
