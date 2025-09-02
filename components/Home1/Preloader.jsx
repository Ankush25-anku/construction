"use client";
import { useEffect, useState } from "react";
import Image from "next/image"; // ✅ Next.js Image for optimization
// <-- update path to your logo

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
    <div id="preloader" className="preloader flex items-center justify-center">
      <div className="animation-preloader text-center">
        {/* ✅ Logo directly above company name */}
        <div className="mb-4 flex justify-center">
          <img
            src="/assets/img/logo/logo.png"
            alt="Company Logo"
            className="object-contain max-w-[120px] h-auto"
            width={120}
            height={120}
          />
        </div>

        {/* ❌ Removed spinner (if you don’t want it) */}
        {/* <div className="spinner mx-auto mb-4"></div> */}

        {/* ✅ Company name letters */}
        <div className="txt-loading company-name">
          {"Sri Balaji Ecstatic Infra LLP".split("").map((letter, idx) => (
            <span
              key={idx}
              data-text-preloader={letter}
              className="letters-loading"
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </div>
      </div>

      {/* Background overlay animation */}
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
