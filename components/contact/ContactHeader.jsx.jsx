"use client";

import React, { useState } from "react";
import Link from "next/link";

const HeaderHome1 = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header id="header-sticky" className="header-1">
      <div className="container-fluid">
        <div className="mega-menu-wrapper">
          <div className="header-main d-flex justify-content-between align-items-center">
            {/* ---------------- LEFT: LOGO + NAV ---------------- */}
            <div className="header-left d-flex align-items-center">
              {/* Logo */}
              <div className="logo">
                <Link href="/" className="header-logo">
                  <img src="/assets/img/hero/iphonese1.png" alt="logo-img" />
                </Link>
              </div>

              {/* Main Navigation */}
              <div
                className={`mean__menu-wrapper ${
                  isMobileMenuOpen ? "open" : ""
                }`}
              >
                <div className="main-menu">
                  <nav>
                    <ul>
                      <li>
                        <Link href="/" onClick={closeMenu}>
                          Home
                        </Link>
                      </li>

                      <li>
                        <Link href="/Aboutsection" onClick={closeMenu}>
                          About Us
                        </Link>
                      </li>

                      <li className="has-dropdown">
                        <Link href="/news" onClick={closeMenu}>
                          Pages <i className="fa-solid fa-chevron-down"></i>
                        </Link>
                        <ul className="submenu">
                          <li>
                            <Link href="/Servicesection" onClick={closeMenu}>
                              Services
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <Link href="/contact" onClick={closeMenu}>
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

            {/* ---------------- RIGHT: HAMBURGER ---------------- */}
            <div className="header-right d-flex align-items-center">
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
        <div className="mobile-menu-overlay" onClick={closeMenu}></div>
      )}
    </header>
  );
};

export default HeaderHome1;
