"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

// -------------------- SERVICES MENU COMPONENT --------------------
const ServicesMenu = ({ setMobileMenuOpen }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleProjectsClick = (e) => {
    e.preventDefault();

    if (pathname === "/") {
      const target = document.getElementById("projects");
      if (target) target.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    } else {
      router.push("/#projects");
      setMobileMenuOpen(false);
    }
  };

  return (
    <li className="has-dropdown">
      <Link href="/Servicesection">
        Services <i className="fa-solid fa-chevron-down"></i>
      </Link>
      <ul className="submenu">
        <li>
          <a href="/#projects" onClick={handleProjectsClick}>
            Projects
          </a>
        </li>
      </ul>
    </li>
  );
};

// -------------------- HEADER COMPONENT --------------------
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
                  <img src="/assets/img/hero/modify1.png" alt="logo-img" />
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
                      </li>

                      {/* About */}
                      <li>
                        <Link href="/Aboutsection">About Us</Link>
                      </li>

                      {/* Services */}
                      <ServicesMenu setMobileMenuOpen={setMobileMenuOpen} />

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
