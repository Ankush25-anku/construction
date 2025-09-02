// import React from "react";

// const ParallaxSection2 = () => {
//   return (
//     <div
//       className="paralax-section-2 mt-0 fix bg-cover"
//       style={{ backgroundImage: "url('/assets/img/paralax-bg-2.jpg')" }}
//     >
//       <div className="video-text">
//         <a
//           href="https://www.youtube.com/watch?v=kbaQHvYbwNg"
//           className="video-btn ripple video-popup"
//         >
//           <i className="fas fa-play"></i>
//         </a>
//         <h3>Free training</h3>
//       </div>
//     </div>
//   );
// };

// export default ParallaxSection2;
"use client";
import React, { useState } from "react";
import Preloader from "../Home1/Preloader";

const ParallaxSection2 = () => {
  const [loading, setLoading] = useState(false); // controls preloader
  const [playVideo, setPlayVideo] = useState(false); // controls iframe mount

  const handlePlayClick = () => {
    setLoading(true);
    setPlayVideo(true);

    // ✅ Immediately hide preloader after it renders once
    setTimeout(() => {
      setLoading(false);
    }, 100); // tiny delay (100ms) just so preloader appears briefly
  };

  return (
    <>
      {loading && <Preloader />}

      <div
        className="paralax-section-2 mt-0 fix bg-cover"
        style={{ backgroundImage: "url('/assets/img/project/aak1.jpg')" }}
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
                src="https://www.youtube.com/embed/kbaQHvYbwNg?autoplay=1"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  opacity: loading ? 0 : 1, // shows video as soon as preloader ends
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

export default ParallaxSection2;
