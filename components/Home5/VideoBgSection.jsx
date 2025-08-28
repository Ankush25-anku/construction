import React from "react";

const VideoBgSection = () => {
  return (
    <section className="video-bg-section fix">
      <div className="vector-shape">
        <img src="/assets/img/Vector.png" alt="img" />
      </div>
      <div className="container-fluid">
        <div
          className="video-wrapper bg-cover"
          style={{ backgroundImage: "url('/assets/img/video.jpg')" }}
        >
          <div className="video-button">
            <a
              href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
              className="video-btn ripple video-popup"
            >
              <i className="fa-solid fa-play"></i>
            </a>
          </div>
        </div>

        <div className="brand-wrapper-5">
          <div className="swiper brand-slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="brand-image text-center">
                  <img src="/assets/img/home-5/brand/01.png" alt="img" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-image text-center">
                  <img src="/assets/img/home-5/brand/02.png" alt="img" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-image text-center">
                  <img src="/assets/img/home-5/brand/03.png" alt="img" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-image text-center">
                  <img src="/assets/img/home-5/brand/04.png" alt="img" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-image text-center">
                  <img src="/assets/img/home-5/brand/05.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default VideoBgSection;
