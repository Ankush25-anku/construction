"use client";
import React, { useState } from "react";
import Preloader from "../Preloader"; // ✅ adjust import path if needed

const ParallaxSection3 = () => {
  const [loading, setLoading] = useState(false); // controls preloader
  const [playVideo, setPlayVideo] = useState(false); // controls iframe mount

  const handlePlayClick = () => {
    setLoading(true);
    setPlayVideo(true);

    // ✅ Brief preloader before showing video
    setTimeout(() => {
      setLoading(false);
    }, 100);
  };

  return (
    <>
      {loading && <Preloader />}

      <div
        className="paralax-section-2 mt-0 fix bg-cover"
        style={{ backgroundImage: "url('/assets/img/project/aff2.jpg')" }}
      >
        <div className="video-text">
          {!playVideo ? (
            <>
              <button
                type="button"
                onClick={handlePlayClick}
                className="video-btn ripple video-popup"
              >
                <i className="fas fa-play"></i>
              </button>
              <h3>Click to Play</h3>
            </>
          ) : (
            <div className="video-popup">
              <iframe
                width="900"
                height="506"
                src="https://www.youtube.com/embed/NAipjjLP8CU?autoplay=1"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  opacity: loading ? 0 : 1,
                  transition: "opacity 0.3s ease-in-out",
                }}
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ParallaxSection3;
