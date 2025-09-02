"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Element with id '${sectionId}' not found.`);
    }
  };

  return (
    <footer className="footer-section footer-bg">
      <div className="container">
        <div className="footer-widgets-wrapper">
          <div className="row justify-content-between">
            {/* Newsletter Widget */}
            <div
              className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="single-footer-widget">
                <div className="footer-content">
                  <div className="logo mb-3">
                    <Link href="/" className="header-logo">
                      <img src="/assets/img/hero/modify1.png" alt="logo-img" />
                    </Link>
                  </div>
                  <p>
                    Sri Balaji Ecstatic Infra LLP (SBC) is dedicated to
                    delivering excellence in construction, infrastructure, and
                    interior solutions. With a commitment to quality,
                    innovation, and timely delivery, we bring your vision to
                    life with precision and care.
                  </p>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div
              className="col-xl-2 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3>Company</h3>
                </div>
                <ul className="list-items">
                  <li>
                    {/* ✅ Changed to scroll-to-contact */}
                    <a href="#about" onClick={(e) => handleScroll(e, "about")}>
                      About us
                    </a>
                  </li>
                  <li>
                    {/* ✅ Changed to scroll-to-contact */}
                    <a
                      href="#contact"
                      onClick={(e) => handleScroll(e, "contact")}
                    >
                      Contact us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      onClick={(e) => handleScroll(e, "services")}
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects"
                      onClick={(e) => handleScroll(e, "projects")}
                    >
                      Projects
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Instagram Widget */}
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-3 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3>Instagram</h3>
                </div>
                <div className="row g-3">
                  <div className="col-6 col-sm-6 col-md-6">
                    <div className="footer-thumb">
                      <img src="assets/img/footer/const1.jpg" alt="img" />
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-md-6">
                    <div className="footer-thumb">
                      <img src="assets/img/footer/const4.jpg" alt="img" />
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-md-6">
                    <div className="footer-thumb">
                      <img src="assets/img/footer/const2.jpg" alt="img" />
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-md-6">
                    <div className="footer-thumb">
                      <img src="assets/img/footer/const3.jpg" alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Instagram Widget */}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-wrapper d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className="logo-img wow fadeInUp" data-wow-delay=".3s">
              <a
                href="https://www.rctechbox.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/img/hero/modify1.png" alt="img" />
              </a>
            </div>
            <p className="wow fadeInUp mt-2 mt-md-0" data-wow-delay=".5s">
              <a
                href="https://www.rctechbox.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                RC Techbox IT Services
              </a>{" "}
              © 2025. All Rights Reserved.
            </p>

            <div
              className="social-icon wow fadeInUp mt-2 mt-md-0"
              data-wow-delay=".7s"
            >
              <a href="#">
                <i className="fa-brands fa-discord"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
