import React from "react";

const FooterHome6 = () => {
  return (
    <footer
      className="footer-section overflow-hidden bg-cover"
      style={{ backgroundImage: "url('/assets/img/home-6/footer-bg.jpg')" }}
    >
      <div className="container">
        <div className="footer-widgets-wrapper style-6">
          <div className="row">
            <div
              className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3>
                    <a href="mailto:EXAMPLE@EVANTBIZ.COM">
                      EXAMPLE@EVANTBIZ.COM
                    </a>
                  </h3>
                </div>
                <div className="footer-content">
                  <h4>27 Division St, New York, NY 10002, USA</h4>
                  <h4>
                    <a href="tel:+1800123456789">+1 800 123 456 789</a>
                  </h4>
                  <ul className="social-profile">
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className="col-xl-2 col-lg-3 col-md-6 ps-lg-5 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3>ABOUT aI</h3>
                </div>
                <ul className="list-items">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="service.html">Services</a>
                  </li>
                  <li>
                    <a href="project-details.html">Project</a>
                  </li>
                  <li>
                    <a href="faq.html">Project</a>
                  </li>
                  <li>
                    <a href="news-details.html">Blog</a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-xl-6 col-lg-5 col-md-6 ps-lg-5 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="single-footer-widget">
                <div className="newsletter-content">
                  <h3>Subscribe To Our Newsletter</h3>
                  <p>
                    Leo site ultrices donec a volutpat penatibus mind suscipit
                    faucibus and duis pharetra name sociosqu phasellus nunce
                    accumsan
                  </p>
                  <div className="footer-input-6">
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter Email Address"
                    />
                    <button className="newsletter-btn" type="submit">
                      <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-6">
          <div className="footer-bottom-wrapper">
            <div className="logo wow fadeInUp" data-wow-delay=".3s">
              <a href="index.html" className="header-logo">
                <img src="/assets/img/logo/white-logo.svg" alt="logo-img" />
              </a>
            </div>
            <p className="wow fadeInUp" data-wow-delay=".5s">
              Copyright © 2025 by <span>AI-Forge.</span> All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterHome6;
