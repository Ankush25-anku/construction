import React from "react";

const HeaderHome4 = () => {
  return (
    <header id="header-sticky" className="header-1 header-style4">
      <div className="container-fluid">
        <div className="mega-menu-wrapper">
          <div className="header-main">
            {/* Left Section */}
            <div className="header-left">
              {/* Logo */}
              <div className="logo">
                <a href="index.html" className="header-logo">
                  <img src="/assets/img/logo/black-logo-4.svg" alt="logo-img" />
                </a>
              </div>

              {/* Main Menu */}
              <div className="mean__menu-wrapper">
                <div className="main-menu">
                  <nav id="mobile-menu">
                    <ul>
                      <li className="has-dropdown">
                        <a href="index.html">
                          Home <i className="fa-solid fa-chevron-down"></i>
                        </a>
                        <ul className="submenu">
                          <li><a href="/">Home 01</a></li>
                          <li><a href="/index-2">Home 02</a></li>
                          <li><a href="/index-3">Home 03</a></li>
                          <li><a href="/index-4">Home 04</a></li>
                          <li><a href="/index-5">Home 05</a></li>
                          <li><a href="/index-6">Home 06</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="/about">About Us</a>
                      </li>
                      <li className="has-dropdown">
                        <a href="/news">
                          Pages <i className="fa-solid fa-chevron-down"></i>
                        </a>
                        <ul className="submenu">
                          <li><a href="/service">Services</a></li>
                          <li><a href="/team">Team</a></li>
                          <li><a href="/project">Portfolio</a></li>
                          <li><a href="/project-details">Portfolio Details</a></li>
                          <li><a href="/pricing">Pricing</a></li>
                          <li><a href="/faq">Our Faq</a></li>
                          <li><a href="/login">Login</a></li>
                          <li><a href="/register">Register</a></li>
                          <li><a href="/404">404 Page</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="/news-details">
                          Blog <i className="fa-solid fa-chevron-down"></i>
                        </a>
                        <ul className="submenu">
                          <li><a href="/news">Blog</a></li>
                          <li><a href="/news-details">Blog Details</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="/contact">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="header-right gap-sm-4 gap-2 d-flex justify-content-end align-items-center">
              <a
                href="about.html"
                className="theme-btn d-md-block d-none py-3 px-4 theme-btn-3"
              >
                APPOINTMENT NOW{" "}
                <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
              </a>

              {/* Search Icon */}
              <a href="#0" className="search-trigger search-icon">
                <i className="fa-regular fa-magnifying-glass"></i>
              </a>

              {/* Hamburger Menu */}
              <div className="header__hamburger d-xl-block my-auto">
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

export default HeaderHome4;
