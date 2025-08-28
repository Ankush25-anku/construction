import React from "react";

const HeroSection = () => {
  return (
    <section
      className="hero-secton hero-1 bg-cover"
      style={{
        backgroundImage: "url('/assets/img/hero/sribalaji1.jpg')",
        minHeight: "100vh", // full screen height
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-10 col-md-12">
            <div className="hero-content text-center position-relative">
              {/* Content removed, only background remains */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
