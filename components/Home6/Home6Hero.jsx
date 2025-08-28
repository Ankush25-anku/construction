import React from "react";

const Home6Hero = () => {
  return (
    <section
      className="hero-section hero-6 fix bg-cover"
      style={{ backgroundImage: "url('/assets/img/hero/bg.jpg')" }}
    >
      <div className="container-fluid">
        <div className="row g-4 align-items-center">
          {/* Left Content */}
          <div className="col-lg-6">
            <div className="hero-content">
              <div className="text">
                <span></span>
                <h6>Future of Learning</h6>
              </div>
              <h1
                className="wow img-custom-anim-left"
                data-wow-duration="1.3s"
                data-wow-delay="0.3s"
              >
                Redefining Classrooms with Smart Technology
              </h1>
              <p
                className="wow fadeInUp"
                data-wow-delay=".3s"
              >
                We harness the power of AI to create personalized, engaging, and
                efficient learning experiences—empowering students and educators
                with tools that adapt, evolve, and elevate the way we teach and
                learn.
              </p>
              <a
                href="contact.html"
                className="theme-btn wow fadeInUp"
                data-wow-delay=".5s"
              >
                Get Started Free
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-6">
            <div className="hero-image">
              <img
                src="/assets/img/hero/0101.png"
                alt="img"
                className="wow img-custom-anim-left"
                data-wow-duration="1.3s"
                data-wow-delay="0.3s"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home6Hero;
