"use client";

import React, { useState } from "react";
import Link from "next/link";

const HeaderHome1 = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header id="header-sticky" className="header-1">
      <div className="container-fluid">
        <div className="mega-menu-wrapper">
          <div className="header-main d-flex justify-content-between align-items-center">
            {/* ---------------- HEADER LEFT ---------------- */}
            <div className="header-left d-flex align-items-center">
              {/* Logo */}
              <div className="logo">
                <Link href="/" className="header-logo">
                  <img src="/assets/img/logo/iPhonese1.png" alt="logo-img" />
                  {/* If you want text beside logo → <span className="logo-text">SBC</span> */}
                </Link>
              </div>

              {/* Main Navigation */}
              <div
                className={`mean__menu-wrapper ${
                  isMobileMenuOpen ? "open" : ""
                }`}
              >
                <div className="main-menu">
                  <nav id="mobile-menu">
                    <ul>
                      {/* Home */}
                      <li className="has-dropdown">
                        <Link href="/">Home</Link>

                        {/* Submenu (uncomment if needed) */}
                        {/* 
                        <ul className="submenu">
                          <li><Link href="/">Home 01</Link></li>
                          <li><Link href="/index-2">Home 02</Link></li>
                          <li><Link href="/index-3">Home 03</Link></li>
                        </ul> 
                        */}
                      </li>

                      {/* About */}
                      <li>
                        <Link href="/Aboutsection">About Us</Link>
                      </li>

                      {/* Pages */}
                      <li className="has-dropdown">
                        <Link href="/news">
                          Pages <i className="fa-solid fa-chevron-down"></i>
                        </Link>
                        <ul className="submenu">
                          <li>
                            <Link href="/Servicesection">Services</Link>
                          </li>
                          {/* More submenu items can be added here */}
                        </ul>
                      </li>

                      {/* Contact */}
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

            {/* ---------------- HEADER RIGHT ---------------- */}
            <div className="header-right d-flex align-items-center">
              {/* Search Icon */}
              {/* <Link href="#0" className="search-trigger search-icon ms-3">
                <i className="fa-regular fa-magnifying-glass"></i>
              </Link> */}

              {/* Hamburger Menu */}
              <div
                className="header__hamburger d-xl-block my-auto ms-3"
                onClick={handleHamburgerClick}
                style={{ cursor: "pointer" }}
              >
                <div className="sidebar__toggle">
                  <i className="fas fa-bars"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- MOBILE MENU OVERLAY ---------------- */}
      {isMobileMenuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default HeaderHome1;
