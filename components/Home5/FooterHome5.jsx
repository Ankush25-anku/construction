import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const FooterHome5 = () => {
  return (
    <footer className="footer-section overflow-hidden">
      <div className="container">
        <div className="footer-widgets-wrapper style-5">
          <div className="row">
            {/* Logo & Subscribe */}
            <div
              className="col-xl-5 col-lg-4 col-md-5 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <a href="index.html">
                    <img src="assets/img/logo/black-logo.svg" alt="logo" />
                  </a>
                </div>
                <div className="footer-content">
                  <h5>Subscribe Now</h5>
                  <div className="footer-input-5">
                    <input type="email" id="email" placeholder="enter email" />
                    <button className="newsletter-btn" type="submit">
                      <FaArrowUpRightFromSquare />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div
              className="col-xl-2 col-lg-4 col-md-2 ps-lg-5 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3>Quick Links</h3>
                </div>
                <ul className="list-items">
                  <li>
                    <a href="about.html">About us</a>
                  </li>
                  <li>
                    <a href="contact.html">Career</a>
                  </li>
                  <li>
                    <a href="news-details.html">Our Blog</a>
                  </li>
                  <li>
                    <a href="contact.html">Privacy</a>
                  </li>
                  <li>
                    <a href="news.html">Contact us</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div
              className="col-xl-3 col-lg-4 col-md-4 ps-lg-5 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3>Say Hello</h3>
                </div>
                <ul className="contact-list">
                  <li>
                    536 Palmer Road Western <br /> OH, 43081
                  </li>
                  <li>
                    <a href="tel:+025262560365">+02 526 2560 365</a>
                  </li>
                  <li>
                    <a href="mailto:support@ailandinfo.com">
                      support@ailandinfo.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Social Links */}
            <div
              className="col-xl-2 col-lg-4 col-md-4 ps-lg-5 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3>Follow</h3>
                </div>
                <ul className="list-items">
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                  <li>
                    <a href="#">Dribbble</a>
                  </li>
                  <li>
                    <a href="#">Linkedin</a>
                  </li>
                  <li>
                    <a href="#">Behance</a>
                  </li>
                  <li>
                    <a href="#">Instagram</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom-5">
          <div className="footer-bottom-wrapper">
            <p>
              Copyright © 2024 | Alright reserved by{" "}
              <span className="fw-bold">Ai-forge</span>
            </p>
            <ul className="footer-menu justify-content-center flex-wrap d-flex align-items-center wow fadeInUp">
              <li>
                <a href="contact.html">Career</a>
              </li>
              <li className="style-5">
                <a href="contact.html">Privacy & Policy</a>
              </li>
              <li className="style-5">
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterHome5;
