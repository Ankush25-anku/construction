"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

// -------------------- SERVICES MENU COMPONENT --------------------
const ServicesMenu = ({ setMobileMenuOpen }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleScroll = (e, sectionId) => {
    e.preventDefault();

    if (pathname === "/") {
      // Already on home page, scroll to the target section
      const target = document.getElementById(sectionId);
      if (target) target.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    } else {
      // Navigate to home page and scroll after render
      router.push(`/#${sectionId}`);
      setMobileMenuOpen(false);
    }
  };
};

// -------------------- HEADER COMPONENT --------------------
const HeaderHome1 = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleHamburgerClick = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = (e, sectionId) => {
    e.preventDefault();

    if (pathname === "/") {
      const target = document.getElementById(sectionId);
      if (target) target.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    } else {
      router.push(`/#${sectionId}`);
      setMobileMenuOpen(false);
    }
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

                      {/* ✅ About (scroll to section) */}
                      <li>
                        <a
                          href="/#about"
                          onClick={(e) => handleScroll(e, "about")}
                        >
                          About Us
                        </a>
                      </li>

                      {/* Services */}
                      <li>
                        <a
                          href="/#services"
                          onClick={(e) => handleScroll(e, "services")}
                        >
                          Services
                        </a>
                      </li>
                      <li>
                        <a
                          href="/#projects"
                          onClick={(e) => handleScroll(e, "projects")}
                        >
                           Projects
                        </a>
                      </li>

                      {/* Contact */}
                      <li>
                        <a
                          href="/#contact"
                          onClick={(e) => handleScroll(e, "contact")}
                        >
                          Contact
                        </a>
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
