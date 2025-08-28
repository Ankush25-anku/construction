import React from "react";

const WorkProcessSectionHome3 = () => {
  return (
    <section
      className="work-process-section fix section-padding-2 bg-cover"
      style={{ backgroundImage: "url('/assets/img/work-process-bg.jpg')" }}
    >
      <div className="container">
        <div className="section-title text-center">
          <img
            src="/assets/img/title-icon.png"
            alt="img"
            className="wow fadeInUp mb-3"
          />
          <h2 className="mb-3 wow fadeInUp" data-wow-delay=".3s">
            Working <b>process</b>
          </h2>
          <p className="wow fadeInUp" data-wow-delay=".7s">
            Our professional grade visuals content created effortlessly
          </p>
        </div>

        <div className="row">
          <div
            className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay=".2s"
          >
            <div className="work-process-items">
              <div className="icon">
                <img src="/assets/img/icon/19.svg" alt="img" />
              </div>
              <div className="number">01</div>
              <div className="content">
                <h3>Choose style</h3>
                <p>
                  Nullam purus egesta magna fames volutpat morbi torquent over
                  theese ligula.
                </p>
              </div>
            </div>
          </div>

          <div
            className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="work-process-items">
              <div className="icon">
                <img src="/assets/img/icon/20.svg" alt="img" />
              </div>
              <div className="number">02</div>
              <div className="content">
                <h3>Write prompt</h3>
                <p>
                  Nullam purus egesta magna fames volutpat morbi torquent over
                  theese ligula.
                </p>
              </div>
            </div>
          </div>

          <div
            className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay=".6s"
          >
            <div className="work-process-items">
              <div className="icon">
                <img src="/assets/img/icon/21.svg" alt="img" />
              </div>
              <div className="number">03</div>
              <div className="content">
                <h3>Generate now</h3>
                <p>
                  Nullam purus egesta magna fames volutpat morbi torquent over
                  theese ligula.
                </p>
              </div>
            </div>
          </div>

          <div
            className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay=".8s"
          >
            <div className="work-process-items">
              <div className="icon">
                <img src="/assets/img/icon/22.svg" alt="img" />
              </div>
              <div className="number">04</div>
              <div className="content">
                <h3>Upscale image</h3>
                <p>
                  Nullam purus egesta magna fames volutpat morbi torquent over
                  theese ligula.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div
              className="cta-wrapper bg-cover"
              style={{ backgroundImage: "url('/assets/img/cta-bg.jpg')" }}
            >
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Experience the future of <br />
                <span></span> creation
              </h2>
              <a
                href="contact.html"
                className="theme-btn style-2 wow fadeInUp"
                data-wow-delay=".5s"
              >
                free generate{" "}
                <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSectionHome3;
