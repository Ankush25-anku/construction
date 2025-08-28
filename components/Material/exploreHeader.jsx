"use client";
import React from "react";
import Link from "next/link";

const Header4 = () => {
  return (
    <header id="header-sticky" className="header-1">
      <div className="container-fluid">
        <div className="mega-menu-wrapper">
          <div className="header-main">
            {/* Logo */}
            <div className="logo">
              <Link href="/" className="header-logo">
                <img src="/assets/img/hero/iphonese1.png" alt="logo-img" />
              </Link>
            </div>

            {/* Menu */}
            <div className="mean__menu-wrapper">
              <div className="main-menu">
                <nav id="mobile-menu">
                  <ul>
                    {/* Home Dropdown */}
                    <li className="has-dropdown">
                      <Link href="/">Home</Link>
                      {/* <ul className="submenu">
                        <li>
                          <Link href="/">Home 01</Link>
                        </li>
                        <li>
                          <Link href="/index-2">Home 02</Link>
                        </li>
                        <li>
                          <Link href="/index-3">Home 03</Link>
                        </li>
                        <li>
                          <Link href="/index-4">Home 04</Link>
                        </li>
                        <li>
                          <Link href="/index-5">Home 05</Link>
                        </li>
                        <li>
                          <Link href="/index-6">Home 06</Link>
                        </li>
                      </ul> */}
                    </li>

                    {/* About */}
                    <li>
                      <Link href="/Aboutsection">About Us</Link>
                    </li>

                    {/* Pages Dropdown */}
                    <li className="has-dropdown">
                      <Link href="/news">
                        Pages <i className="fa-solid fa-chevron-down"></i>
                      </Link>
                      <ul className="submenu">
                        <li>
                          <Link href="/Servicesection">Services</Link>
                        </li>
                        {/* <li>
                          <Link href="/team">Team</Link>
                        </li>
                        <li>
                          <Link href="/project">Portfolio</Link>
                        </li>
                        <li>
                          <Link href="/project-details">Portfolio Details</Link>
                        </li>
                        <li>
                          <Link href="/pricing">Pricing</Link>
                        </li>
                        <li>
                          <Link href="/faq">Our Faq</Link>
                        </li>
                        <li>
                          <Link href="/login">Login</Link>
                        </li>
                        <li>
                          <Link href="/register">Register</Link>
                        </li>
                        <li>
                          <Link href="/404">404 Page</Link>
                        </li> */}
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

            {/* Right Side */}
            <div className="header-right d-flex justify-content-end align-items-center">
              {/* <Link href="/login" className="join-text">
                <img src="/assets/img/discord.svg" alt="img" /> Join now
              </Link> */}
              {/* 
              <a href="#0" className="search-trigger search-icon">
                <i className="fa-regular fa-magnifying-glass"></i>
              </a> */}

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

export default Header4;
