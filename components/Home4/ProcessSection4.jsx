import React from "react";

const ProcessSection4 = () => {
  return (
    <section
      className="process-section4 pb-5 fix bg-cover"
      style={{ backgroundImage: "url('/assets/img/feature-bg4.png')" }}
    >
      <div className="container pb-5 mb-xxl-4">
        <div className="section-title mb-4 pb-lg-3 style-4 text-center">
          <h6
            className="mt-3 text-primary d-flex justify-content-center align-items-center gap-2 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <img src="/assets/img/section-badge4.png" alt="img" />
            Working Process
          </h6>
          <h2 className="wow fadeInUp text-black" data-wow-delay=".5s">
            Our Care Process
          </h2>
        </div>

        <div className="row g-4">
          <div className="col-lg-4 col-sm-6">
            <div className="process-item4 text-center wow fadeInUp" data-wow-delay=".6s">
              <div className="icon mb-4 mx-auto">
                <img src="/assets/img/icon/process1.png" alt="img" />
                <span className="serial">01</span>
              </div>
              <h4 className="mb-xl-3 mb-2">
                <a href="#0" className="text-black">Start Generate</a>
              </h4>
              <p className="fw-normal cmn-pra d-block mb-0">
                Suspend cubilia comodo per dictumst dolor vitae lorem facilisis and sagittis semitant molestie aliquam
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="process-item4 text-center wow fadeInUp" data-wow-delay=".8s">
              <div className="icon mb-4 mx-auto">
                <img src="/assets/img/icon/process2.png" alt="img" />
                <span className="serial">02</span>
              </div>
              <h4 className="mb-xl-3 mb-2">
                <a href="#0" className="text-black">Model Building</a>
              </h4>
              <p className="fw-normal cmn-pra d-block mb-0">
                Suspend cubilia comodo per dictumst dolor vitae lorem facilisis and sagittis semitant molestie aliquam
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="process-item4 text-center wow fadeInUp" data-wow-delay=".9s">
              <div className="icon mb-4 mx-auto">
                <img src="/assets/img/icon/process3.png" alt="img" />
                <span className="serial">03</span>
              </div>
              <h4 className="mb-xl-3 mb-2">
                <a href="#0" className="text-black">Data Analysis</a>
              </h4>
              <p className="fw-normal cmn-pra d-block mb-0">
                Suspend cubilia comodo per dictumst dolor vitae lorem facilisis and sagittis semitant molestie aliquam
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection4;
