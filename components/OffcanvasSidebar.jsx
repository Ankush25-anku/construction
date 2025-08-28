"use client";

import React from "react";

const OffcanvasSidebar = () => {
  console.log("sidebar called");
  return (
    <>
      <div className="fix-area">
        <div className="offcanvas__info">
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <a href="index.html">
                    <img src="assets/img/logo/white-logo.svg" alt="logo-img" />
                  </a>
                </div>
                <div className="offcanvas__close">
                  <button>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>

              <p className="text d-none d-xl-block">
                Welcome to SBC – Your trusted partner in construction and
                interiors. Reach us anytime at our Bengaluru or Hyderabad
                offices.
              </p>

              <div className="mobile-menu fix mb-3"></div>

              <div className="offcanvas__contact">
                <h4>Contact Info</h4>
                <ul>
                  {/* Bengaluru Office */}
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">
                        <strong>Bengaluru</strong> <br />
                        Site No 23, Flat No A1, First Floor Office, Valepura,
                        Varthur, Bengaluru 560087
                      </a>
                    </div>
                  </li>

                  {/* Hyderabad Office */}
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">
                        <strong>Hyderabad</strong> <br />
                        FLAT NO. 302, AMPLIO BUILDING, DREAM HOME APARTMENT,
                        RAVI ENCLAVE, OPP. APARNA TOWERS, Kondapur, Hyderabad,
                        500084
                      </a>
                    </div>
                  </li>

                  {/* GST Numbers */}
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-file-invoice"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <span>GSTIN : 29AEUFS1675R1ZO</span> <br />
                      <span>GSTIN : 36AEUFS1675R1ZT</span>
                    </div>
                  </li>

                  {/* Contact Numbers */}
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="far fa-phone"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+919980046222">+91 9980046222</a>,{" "}
                      <a href="tel:08068708475">08068708475</a>
                    </div>
                  </li>

                  {/* Email */}
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-envelope"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="mailto:yvreddy@sribalajillp.in">
                        yvreddy@sribalajillp.in
                      </a>
                    </div>
                  </li>
                </ul>

                {/* <div className="header-button mt-4">
                  <a href="contact.html" className="theme-btn text-center">
                    Get A Quote
                  </a>
                </div> */}

                <div className="social-icon d-flex align-items-center">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="offcanvas__overlay"></div>
    </>
  );
};

export default OffcanvasSidebar;
