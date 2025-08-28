import React from "react";

const ServiceSection = () => {
  return (
    <section
      className="service-section style-padding fix section-padding bg-cover"
      style={{ backgroundImage: "url('/assets/img/service/Pattern.png')" }}
    >
      <div className="container">
        <div className="section-title text-center">
          <h6 className="wow fadeInUp">
            <img src="/assets/img/star.png" alt="img" />
            popular services
          </h6>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Exclusive AI-powered <br />
            <span>
              idea & <b>automation</b> services
            </span>
          </h2>
        </div>

        <div className="row">
          {/* Service Item 1 */}
          <div className="col-xl-6 wow fadeInUp" data-wow-delay=".2s">
            <div className="service-box-items">
              <div className="service-image">
                <img src="/assets/img/service/01.jpg" alt="Business Strategy" />
              </div>
              <div className="service-content">
                <h3>Business strategy planning</h3>
                <p>
                  Duise sagettis rosend accumsas magna onest curos adipiscine
                  contacting the agency secondar
                </p>
                <a href="service.html" className="link-btn">
                  more details{" "}
                  <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Service Item 2 */}
          <div className="col-xl-6 wow fadeInUp" data-wow-delay=".4s">
            <div className="service-box-items">
              <div className="service-image">
                <img src="/assets/img/service/02.jpg" alt="Data Analysis" />
              </div>
              <div className="service-content">
                <h3>Data analysis services</h3>
                <p>
                  Duise sagettis rosend accumsas magna onest curos adipiscine
                  contacting the agency secondar
                </p>
                <a href="service.html" className="link-btn">
                  more details{" "}
                  <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Service Item 3 */}
          <div className="col-xl-6 wow fadeInUp" data-wow-delay=".6s">
            <div className="service-box-items">
              <div className="service-image">
                <img src="/assets/img/service/03.jpg" alt="Machine Learning" />
              </div>
              <div className="service-content">
                <h3>Machine learning models</h3>
                <p>
                  Duise sagettis rosend accumsas magna onest curos adipiscine
                  contacting the agency secondar
                </p>
                <a href="service.html" className="link-btn">
                  more details{" "}
                  <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Service Item 4 */}
          <div className="col-xl-6 wow fadeInUp" data-wow-delay=".8s">
            <div className="service-box-items mb-0">
              <div className="service-image">
                <img src="/assets/img/service/04.jpg" alt="AI Solutions" />
              </div>
              <div className="service-content">
                <h3>Custom artificial solutions</h3>
                <p>
                  Duise sagettis rosend accumsas magna onest curos adipiscine
                  contacting the agency secondar
                </p>
                <a href="service.html" className="link-btn">
                  more details{" "}
                  <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
