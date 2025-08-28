import React from "react";

const ParallaxSection = () => {
  return (
    <div
      className="paralax-section-2 mt-0 fix bg-cover"
      style={{ backgroundImage: "url('/assets/img/paralax-bg-2.jpg')" }}
    >
      <div className="video-text">
        <a
          href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
          className="video-btn ripple video-popup"
        >
          <i className="fas fa-play"></i>
        </a>
        <h3>Free training</h3>
      </div>
    </div>
  );
};

export default ParallaxSection;
