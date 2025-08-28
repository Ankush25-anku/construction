import React from "react";
import Link from "next/link";

const ServiceSection = () => {
  return (
    <section
      className="service-section fix section-padding section-bg bg-cover"
      style={{ backgroundImage: "url('/assets/img/service/servicebg1.png')" }}
    >
      <div className="container">
        {/* Section Title */}
        <div className="section-title text-center">
          <h6 className="wow fadeInUp">
            <img
              src="/assets/img/star.png"
              alt="star"
              className="inline-block"
            />{" "}
            Our Services
          </h6>

          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            We Provide The Best <br />
            <span>
              Construction <b>Services</b>
            </span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="row g-4">
          {/* Service 1 */}
          <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
            <div className="service-box-items h-100">
              <div className="service-image">
                <img
                  src="/assets/img/service/service-1.jpg"
                  alt="Infrastructure Construction"
                  className="img-fluid"
                />
              </div>
              <div className="service-content">
                <h3>Infrastructure Construction</h3>
                <p>
                  Delivering robust infrastructure projects with precision,
                  quality, and long-lasting durability.
                </p>
                <Link href="/servicedetails" className="link-btn">
                  More details{" "}
                  <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
            <div className="service-box-items h-100">
              <div className="service-image">
                <img
                  src="/assets/img/service/service-2.jpg"
                  alt="House Renovation"
                  className="img-fluid"
                />
              </div>
              <div className="service-content">
                <h3>House Renovation</h3>
                <p>
                  Transform your living space with modern, efficient, and
                  innovative renovation solutions.
                </p>
                <Link href="/servicedetails" className="link-btn">
                  More details{" "}
                  <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
            <div className="service-box-items h-100">
              <div className="service-image">
                <img
                  src="/assets/img/service/Architecturaldesign.jpg"
                  alt="Architecture Design"
                  className="img-fluid"
                />
              </div>
              <div className="service-content">
                <h3>Architecture Design</h3>
                <p>
                  Creative and functional designs that bring your vision to life
                  while ensuring structural excellence.
                </p>
                <Link href="/servicedetails" className="link-btn">
                  More details{" "}
                  <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Service 4 */}
          <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".8s">
            <div className="service-box-items h-100">
              <div className="service-image">
                <img
                  src="/assets/img/service/interiordesign1.jpg"
                  alt="Interior Design"
                  className="img-fluid"
                />
              </div>
              <div className="service-content">
                <h3>Interior Design</h3>
                <p>
                  Elevate interiors with modern, stylish, and practical designs
                  tailored to your lifestyle.
                </p>
                <Link href="/servicedetails" className="link-btn">
                  More details{" "}
                  <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Service 5 */}

          {/* Service 5 */}
          <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".8s">
            <div className="service-box-items h-100">
              <div className="service-image">
                <img
                  src="/assets/img/service/fix.jpg"
                  alt="Fixing & Support"
                  className="img-fluid"
                />
              </div>
              <div className="service-content">
                <h3>Fixing & Support</h3>
                <p>
                  Reliable fixing solutions and round-the-clock support to
                  ensure seamless installation and maintenance for your
                  projects.
                </p>
                <Link href="/servicedetails" className="link-btn">
                  More details{" "}
                  <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Service 6 */}
          <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".8s">
            <div className="service-box-items h-100">
              <div className="service-image">
                <img
                  src="/assets/img/service/labour.jpg"
                  alt="Labour & Material Contract"
                  className="img-fluid"
                />
              </div>
              <div className="service-content">
                <h3>Labour & Material Contract</h3>
                <p>
                  Comprehensive labour and material contract services to deliver
                  cost-effective and high-quality results
                </p>
                <Link href="/servicedetails" className="link-btn">
                  More details{" "}
                  <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
