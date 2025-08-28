import React from "react";

const MessageSection = () => {
  return (
    <section className="message-section fix bg-white section-padding overflow-hidden">
      <div className="brand-section brand-style4 pb-0">
        <div className="container">
          <h4
            className="sponsor-title text-center mb-lg-5 mb-4 text-dark wow fadeInUp"
            data-wow-delay=".3s"
          >
            <span>Global Trusted Partner</span>
          </h4>
          <div className="swiper brand-slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="brand-image text-center">
                  <img src="/assets/img/brand/brandv1.png" alt="img" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-image text-center">
                  <img src="/assets/img/brand/brandv2.png" alt="img" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-image text-center">
                  <img src="/assets/img/brand/brandv3.png" alt="img" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-image text-center">
                  <img src="/assets/img/brand/brandv4.png" alt="img" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-image text-center">
                  <img src="/assets/img/brand/brandv5.png" alt="img" />
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
