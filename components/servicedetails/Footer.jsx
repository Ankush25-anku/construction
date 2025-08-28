import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="footer-section footer-bg">
      <div className="container">
        <div className="footer-widgets-wrapper">
          <div className="row">
            {/* Newsletter Widget */}
            <div
              className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="single-footer-widget">
                <div className="footer-content">
                  <div className="logo mb-3">
                    <Link href="/" className="header-logo">
                      <img src="/assets/img/logo/iphoneSE.png" alt="logo-img" />
                      {/* If you want text beside logo → <span className="logo-text">SBC</span> */}
                    </Link>
                  </div>

                  <p>
                    Sri Balaji Ecstatic Infra LLP (SBC) is dedicated to
                    delivering excellence in construction, infrastructure, and
                    interior solutions. With a commitment to quality,
                    innovation, and timely delivery, we bring your vision to
                    life with precision and care.
                  </p>

                  {/* 
    <div className="footer-input">
      <input
        type="text"
        id="sbc-message"
        placeholder="Write your message..."
      />
      <button className="newsletter-btn" type="submit">
        <img src="assets/img/circle-check.png" alt="send" />
      </button>
    </div> 
    */}
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
                    <a href="/Aboutsection">About us</a>
                  </li>
                  <li>
                    <a href="/contact">Opportunity</a>
                  </li>
                  <li>
                    <a href="/contact">Events</a>
                  </li>
                  <li>
                    <a href="/contact">Consulting</a>
                  </li>
                  <li>
                    <a href="news.html">Our blog</a>
                  </li>
                  <li>
                    <a href="/contact">Contact us</a>
                  </li>
                  <li>
                    <a href="/contact">Careers</a>
                  </li>
                  <li>
                    <a href="login.html">User login</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Services Links */}
            {/* <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3>Company</h3>
                </div>
                <ul className="list-items">
                  <li>
                    <a href="service.html">Graphic design</a>
                  </li>
                  <li>
                    <a href="service.html">Marketing</a>
                  </li>
                  <li>
                    <a href="service.html">Photography</a>
                  </li>
                  <li>
                    <a href="service.html">Art generate</a>
                  </li>
                  <li>
                    <a href="service.html">Face swap</a>
                  </li>
                  <li>
                    <a href="service.html">Interior design</a>
                  </li>
                  <li>
                    <a href="service.html">Face swap</a>
                  </li>
                  <li>
                    <a href="service.html">Mockup create</a>
                  </li>
                </ul>
              </div>
            </div> */}

            {/* Instagram Gallery */}
            {/* <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-3 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3>Instagram</h3>
                </div>
                <div className="row g-3">
                  <div className="col-md-6 col-sm-4 col-4">
                    <div className="footer-thumb">
                      <img src="assets/img/footer/gallery-1.jpg" alt="img" />
                      <a href="index.html" className="icon">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-4 col-4">
                    <div className="footer-thumb">
                      <img src="assets/img/footer/gallery-2.jpg" alt="img" />
                      <a href="index.html" className="icon">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-4 col-4">
                    <div className="footer-thumb">
                      <img src="assets/img/footer/gallery-3.jpg" alt="img" />
                      <a href="index.html" className="icon">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-4 col-4">
                    <div className="footer-thumb">
                      <img src="assets/img/footer/gallery-4.jpg" alt="img" />
                      <a href="index.html" className="icon">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-wrapper">
            <div className="logo-img wow fadeInUp" data-wow-delay=".3s">
              <a href="index.html">
                <img src="/assets/img/logo/iphoneSE.png" alt="img" />
              </a>
            </div>
            <p className="wow fadeInUp" data-wow-delay=".5s">
              Namespaceit © 2024. All Rights Reserved.
            </p>
            <div className="social-icon wow fadeInUp" data-wow-delay=".7s">
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
