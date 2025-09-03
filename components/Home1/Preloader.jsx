"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (!loading) return null;

  return (
    <div
      id="preloader"
      className="preloader flex flex-col items-center justify-center text-center px-4"
    >
      <div className="animation-preloader w-full max-w-[90%] sm:max-w-[400px]">
        {/* ✅ Logo centered */}
        <div className="mb-4 flex justify-center">
          <img
            src="/assets/img/logo/logo.png"
            alt="Company Logo"
            className="object-contain max-w-[100px] sm:max-w-[120px] h-auto"
            width={120}
            height={120}
          />
        </div>

        {/* ✅ Company name letters, wrap nicely on small screens */}
        <div className="txt-loading company-name flex flex-wrap justify-center leading-tight">
          {"Sri Balaji Ecstatic Infra LLP".split("").map((letter, idx) => (
            <span
              key={idx}
              data-text-preloader={letter}
              className="letters-loading text-base sm:text-lg"
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </div>
      </div>

      {/* ✅ Background overlay remains same */}
      <div className="loader">
        <div className="row">
          {Array(4)
            .fill(0)
            .map((_, idx) => (
              <div
                key={idx}
                className={`col-3 loader-section ${
                  idx < 2 ? "section-left" : "section-right"
                }`}
              >
                <div className="bg"></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
