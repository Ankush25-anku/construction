import React from "react";

const Header2 = () => {
  return (
    <header id="header-sticky" className="header-2">
      <div className="container-fluid">
        <div className="mega-menu-wrapper">
          <div className="header-main d-flex align-items-center justify-content-between">
            {/* Left Side (Logo + Menu) */}
            <div className="d-flex align-items-center">
              {/* Logo */}
              <div className="logo me-4">
                <a href="index.html" className="header-logo">
                  <img
                    src="assets/img/logo/white-logo-2.svg"
                    alt="logo-img"
                    style={{ maxHeight: "50px" }}
                  />
                </a>
              </div>

              {/* Navigation Menu */}
              <div className="mean__menu-wrapper">
                <div className="main-menu">
                  <nav id="mobile-menu">
                    <ul className="d-flex align-items-center gap-4 mb-0">
                      {/* Home Dropdown */}
                      <li className="has-dropdown">
                        <a href="index.html">
                          Home <i className="fa-solid fa-chevron-down"></i>
                        </a>
                        <ul className="submenu">
                          <li>
                            <a href="/">Home 01</a>
                          </li>
                          <li>
                            <a href="/index-2">Home 02</a>
                          </li>
                          <li>
                            <a href="/index-3">Home 03</a>
                          </li>
                          <li>
                            <a href="/index-4">Home 04</a>
                          </li>
                          <li>
                            <a href="/index-5">Home 05</a>
                          </li>
                          <li>
                            <a href="/index-6">Home 06</a>
                          </li>
                        </ul>
                      </li>

                      {/* About Us */}
                      <li>
                        <a href="about.html">About Us</a>
                      </li>

                      {/* Pages Dropdown */}
                      <li className="has-dropdown">
                        <a href="news.html">
                          Pages <i className="fa-solid fa-chevron-down"></i>
                        </a>
                        <ul className="submenu">
                          <li>
                            <a href="service.html">Services</a>
                          </li>
                          <li>
                            <a href="team.html">Team</a>
                          </li>
                          <li>
                            <a href="project.html">Portfolio</a>
                          </li>
                          <li>
                            <a href="project-details.html">Portfolio Details</a>
                          </li>
                          <li>
                            <a href="pricing.html">Pricing</a>
                          </li>
                          <li>
                            <a href="faq.html">Our Faq</a>
                          </li>
                          <li>
                            <a href="login.html">Login</a>
                          </li>
                          <li>
                            <a href="register.html">Register</a>
                          </li>
                          <li>
                            <a href="404.html">404 Page</a>
                          </li>
                        </ul>
                      </li>

                      {/* Blog Dropdown */}
                      <li className="has-dropdown">
                        <a href="news.html">
                          Blog <i className="fa-solid fa-chevron-down"></i>
                        </a>
                        <ul className="submenu">
                          <li>
                            <a href="news.html">Blog</a>
                          </li>
                          <li>
                            <a href="news-details.html">Blog Details</a>
                          </li>
                        </ul>
                      </li>

                      {/* Contact */}
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

            {/* Right Side (Login + SignUp + Mobile Menu) */}
            <div className="header-right d-flex align-items-center gap-3">
              <a href="login.html" className="join-text">
                Login
              </a>
              <a href="register.html" className="theme-btn">
                Sign Up
              </a>

              {/* Mobile Hamburger */}
              <div className="header__hamburger d-xl-none my-auto">
                <div className="sidebar__toggle">
                  <i className="fas fa-bars"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header2;
