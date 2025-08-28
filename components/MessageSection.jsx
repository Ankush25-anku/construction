"use client";
import React, { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const MessageSection = () => {
  useEffect(() => {
    const s = new Swiper(".brand-slider", {
      loop: true,
      autoplay: {
        delay: 0, // continuous scroll
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      },
      speed: 4000, // adjust to taste
      slidesPerView: 5, // logos visible (desktop)
      spaceBetween: 60, // gap between logos
      allowTouchMove: false, // keep it always moving
      grabCursor: false,
      breakpoints: {
        0: { slidesPerView: 2, spaceBetween: 24 },
        576: { slidesPerView: 3, spaceBetween: 32 },
        992: { slidesPerView: 5, spaceBetween: 60 },
      },
    });

    return () => s && s.destroy(true, true);
  }, []);

  return (
    <section className="message-section fix section-bg section-padding">
      {/* Background Shape */}
      <div className="bg-shape">
        <img src="assets/img/about/bg-shape.png" alt="shape-img" />
      </div>

      <div className="container">
        <div className="message-items">
          {/* Heading */}
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Have any query
            <span>
              {" "}
              send us <b>message</b>
            </span>
          </h2>

          {/* Circle Background */}
          <div className="circle-bg wow fadeInUp" data-wow-delay=".3s">
            <img src="assets/img/circle-bg.png" alt="img" />
          </div>

          {/* Let’s Talk Section */}
          <div className="lets-talk-items wow fadeInUp" data-wow-delay=".5s">
            <a href="contact.html" className="lets-circle">
              <i className="fa-sharp fa-regular fa-arrow-up-right"></i> <br />
              Let’s talk
            </a>
            <p>
              Duise sagittis accumsan magna on adipiscing laoreet ultrices magna
              consectetuer eiaculis rutrum morbie habitasse orci libero
              porttitor scelerisque acid vivamus molestie mollise
            </p>
          </div>
        </div>
      </div>

      {/* Brand Section */}
      <div className="brand-section section-padding pb-0">
        <div className="container">
          <div className="swiper brand-slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="brand-image text-center">
                  <img src="assets/img/brand/01.png" alt="img" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-image text-center">
                  <img src="assets/img/brand/02.png" alt="img" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-image text-center">
                  <img src="assets/img/brand/03.png" alt="img" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-image text-center">
                  <img src="assets/img/brand/04.png" alt="img" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-image text-center">
                  <img src="assets/img/brand/05.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
