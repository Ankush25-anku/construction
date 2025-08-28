// 📂 components/home2/MobileApp.jsx
import React from "react";

const MobileApp = () => {
  return (
    <section
      className="mobile-app fix section-padding-2 bg-cover"
      style={{ backgroundImage: "url('assets/img/mobile-app-bg.jpg')" }}
    >
      <div className="container">
        <div className="mobile-app-wrapper">
          <div className="row g-4 align-items-center">
            {/* Left Side - Mobile Image */}
            <div className="col-lg-6 wow fadeInUp">
              <div className="mobile-thumb text-center">
                <img src="assets/img/mobile.png" alt="img" />
                <div className="shape-img">
                  <img src="assets/img/mobile-shaape.png" alt="img" />
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="col-lg-6">
              <div className="mobile-app-content">
                <div className="section-title style-2">
                  <h6 className="text-white wow fadeInUp">
                    <img src="assets/img/circle-title-2.png" alt="img" /> Our
                    application
                  </h6>
                  <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                    Mobile apps drive the easy and formal{" "}
                    <span>revolution</span>
                  </h2>
                </div>

                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  Download our mobile apps from android & app store
                </p>

                <div className="apps-button">
                  <a
                    href="contact.html"
                    className="wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <img src="assets/img/google-play.png" alt="img" />
                  </a>
                  <a
                    href="contact.html"
                    className="wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <img src="assets/img/app-store.png" alt="img" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
