"use client";

import React, { useEffect } from "react";

const MouseCursor = () => {
  useEffect(() => {
    const cursorInner = document.querySelector(".cursor-inner");
    const cursorOuter = document.querySelector(".cursor-outer");

    // Track mouse position
    const handleMouseMove = (e) => {
      if (cursorInner && cursorOuter) {
        cursorInner.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        cursorOuter.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup on unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Back to top button functionality
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Mouse Cursor */}
      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>

      {/* Back To Top */}
      <button id="back-top" className="back-to-top" onClick={scrollToTop}>
        <i className="fa-regular fa-arrow-up"></i>
      </button>
    </>
  );
};

export default MouseCursor;
