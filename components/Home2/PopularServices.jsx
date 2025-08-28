// 📂 components/home2/PopularServices.jsx
import React from "react";

const PopularServices = () => {
  return (
    <section className="popular-service-section fix section-padding-2 pt-0">
      <div className="container">
        {/* Section Title */}
        <div className="section-title style-2 text-center">
          <img
            src="assets/img/circle-title.png"
            alt="img"
            className="wow fadeInUp"
          />
          <h6 className="mt-3 wow fadeInUp" data-wow-delay=".3s">
            Exclusive services
          </h6>
          <h2 className="wow fadeInUp" data-wow-delay=".5s">
            Comprehensive analytics <br /> <span>and popular</span> services
          </h2>
        </div>

        <div className="row">
          {/* Left Items */}
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="service-left-items">
              <div className="popular-service-items">
                <div className="icon">
                  <img src="assets/img/icon/11.svg" alt="img" />
                </div>
                <div className="content">
                  <h3>
                    Custom Chatbot <br /> Development
                  </h3>
                  <p>
                    Selmas ligula anser vestibulum morbi lacsus urna fell crases
                    eleifen mauris meet the specific
                  </p>
                </div>
              </div>

              <div className="popular-service-items style-2">
                <div className="content">
                  <h3>
                    Custom Chatbot <br /> Development
                  </h3>
                  <p>
                    Selmas ligula anser vestibulum morbi lacsus urna fell crases
                    eleifen mauris meet the specific
                  </p>
                </div>
                <div className="icon">
                  <img src="assets/img/icon/12.svg" alt="img" />
                </div>
              </div>
            </div>
          </div>

          {/* Middle Image */}
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="popular-service-image">
              <img src="assets/img/service/Illustration.png" alt="img" />
            </div>
          </div>

          {/* Right Items */}
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".7s"
          >
            <div className="service-right-items">
              <div className="popular-service-items style-3">
                <div className="icon">
                  <img src="assets/img/icon/13.svg" alt="img" />
                </div>
                <div className="content">
                  <h3>
                    Custom Chatbot <br /> Development
                  </h3>
                  <p>
                    Selmas ligula anser vestibulum morbi lacsus urna fell crases
                    eleifen mauris meet the specific
                  </p>
                </div>
              </div>

              <div className="popular-service-items style-2 style-3">
                <div className="content">
                  <h3>
                    Custom Chatbot <br /> Development
                  </h3>
                  <p>
                    Selmas ligula anser vestibulum morbi lacsus urna fell crases
                    eleifen mauris meet the specific
                  </p>
                </div>
                <div className="icon">
                  <img src="assets/img/icon/14.svg" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularServices;
