import React from "react";

const features = [
  {
    id: "01",
    title: "Creative Delivery",
    desc: "Suspend cubilia comodo per dictumst dolor vitae lorem facilisis and sagittis semitant",
    delay: ".6s",
  },
  {
    id: "02",
    title: "Rapidly Generate",
    desc: "Suspend cubilia comodo per dictumst dolor vitae lorem facilisis and sagittis semitant",
    delay: ".8s",
    extraClass: "mt-xxl-5",
  },
  {
    id: "03",
    title: "Unique Resource",
    desc: "Suspend cubilia comodo per dictumst dolor vitae lorem facilisis and sagittis semitant",
    delay: "1.1s",
  },
  {
    id: "04",
    title: "Analyzing Data",
    desc: "Suspend cubilia comodo per dictumst dolor vitae lorem facilisis and sagittis semitant",
    delay: "1.2s",
    extraClass: "mt-xxl-5",
  },
];

const FeatureSection4 = () => {
  return (
    <section
      className="feature-section4 section-padding fix bg-cover"
      style={{ backgroundImage: "url('assets/img/feature-bg4.png')" }}
    >
      <div className="container">
        {/* Section Title */}
        <div className="section-title style-4 text-center">
          <h6
            className="mt-3 text-primary d-flex justify-content-center align-items-center gap-2 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <img src="assets/img/section-badge4.png" alt="badge" />
            Care Features
          </h6>
          <h2
            className="wow fadeInUp text-black"
            data-wow-delay=".5s"
          >
            Why Choose Us
          </h2>
        </div>

        {/* Feature Items */}
        <div className="row g-0">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`col-lg-3 col-sm-6 ${feature.extraClass || ""}`}
            >
              <div
                className="feature-item4 border-end wow fadeInUp"
                data-wow-delay={feature.delay}
              >
                <h4 className="mb-2">
                  <a href="#0" className="text-black">
                    {feature.title}
                  </a>
                </h4>
                <p className="fw-normal cmn-pra d-block mb-4">
                  {feature.desc}
                </p>
                <div className="d-flex align-items-center justify-content-between">
                  <a href="#0">
                    <svg
                      width="49"
                      height="16"
                      viewBox="0 0 49 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M48.7071 8.7071C49.0976 8.31658 49.0976 7.68341 48.7071 7.29289L42.3431 0.928928C41.9526 0.538404 41.3195 0.538404 40.9289 0.928929C40.5384 1.31945 40.5384 1.95262 40.9289 2.34314L46.5858 8L40.9289 13.6569C40.5384 14.0474 40.5384 14.6805 40.9289 15.0711C41.3195 15.4616 41.9526 15.4616 42.3431 15.0711L48.7071 8.7071ZM0 8L8.74228e-08 9L48 9L48 8L48 7L-8.74228e-08 7L0 8Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <span className="serial d-block">{feature.id}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection4;
