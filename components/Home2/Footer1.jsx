import React from "react";

const Footer1 = () => {
  return (
    <footer
      className="footer-section bg-cover"
      style={{ backgroundImage: "url('/assets/img/footer-bg.jpg')" }}
    >
      <div className="container">
        <div className="footer-widgets-wrapper style-2">
          <div className="row">
            {/* Logo & Social */}
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <a href="index.html">
                    <img src="/assets/img/logo/black-logo.svg" alt="logo" />
                  </a>
                </div>
                <div className="footer-content">
                  <p>
                    Chatbot not only answered question offered suggestions even
                    thought of It’s like chatting with
                  </p>
                  <div className="social-icon">
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

            {/* Company Links */}
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3>Company</h3>
                </div>
                <ul className="list-items">
                  <li>
                    <a href="about.html">Chat incubator</a>
                  </li>
                  <li>
                    <a href="contact.html">Opportunity</a>
                  </li>
                  <li>
                    <a href="contact.html">Events</a>
                  </li>
                  <li>
                    <a href="contact.html">Consulting</a>
                  </li>
                  <li>
                    <a href="contact.html">Partner program</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact us</a>
                  </li>
                  <li>
                    <a href="contact.html">Careers</a>
                  </li>
                  <li>
                    <a href="contact.html">System status</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Integration Links */}
            <div
              className="col-xl-2 col-lg-4 col-md-6 ps-lg-3 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3>Integration</h3>
                </div>
                <ul className="list-items">
                  <li>
                    <a href="service.html">Chat widget</a>
                  </li>
                  <li>
                    <a href="service.html">Marketing</a>
                  </li>
                  <li>
                    <a href="service.html">Photography</a>
                  </li>
                  <li>
                    <a href="service.html">Visual builder</a>
                  </li>
                  <li>
                    <a href="service.html">Slack app</a>
                  </li>
                  <li>
                    <a href="service.html">Education</a>
                  </li>
                  <li>
                    <a href="service.html">Product demo</a>
                  </li>
                  <li>
                    <a href="service.html">Help desk</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Newsletter */}
            <div
              className="col-xl-4 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3>Newsletter</h3>
                </div>
                <div className="footer-content">
                  <p>
                    Don't hesitate to contact us if you're interested in
                    collaborating or just want to chat
                  </p>
                  <div className="footer-input-2">
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter email..."
                    />
                    <button className="newsletter-btn" type="submit">
                      <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                    </button>
                  </div>
                  <p>We send interesting and relevant emails.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom style-2">
          <div className="footer-bottom-wrapper">
            <p className="wow fadeInUp" data-wow-delay=".3s">
              Namespaceit © 2024. All Rights Reserved.
            </p>
            <ul className="footer-menu wow fadeInUp" data-wow-delay=".5s">
              <li>
                <a href="contact.html">Privacy policy -</a>
              </li>
              <li>
                <a href="contact.html">Contact -</a>
              </li>
              <li>
                <a href="contact.html">Terms & conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
