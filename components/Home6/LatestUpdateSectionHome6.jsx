import React from "react";

const LatestUpdateSectionHome6 = () => {
  return (
    <section className="latest-update-section section-padding pt-0 bg-color-6 fix">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="lates-input-content">
              <div className="section-title style-6 text-center mb-0">
                <h6 className="wow fadeInUp">Latest in EdTech</h6>
                <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                  SmartClass Update
                </h2>
              </div>
              <p className="text wow fadeInUp" data-wow-delay=".5s">
                SmartClass Update brings you the latest innovations, success stories, and insights from the world of AI-powered education—helping educators, students, and institutions stay ahead in the digital learning era.
              </p>
              <div className="latest-input wow fadeInUp" data-wow-delay=".3s">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Your Email"
                />
                <button className="theme-btn" type="submit">
                  SUBMIT NOW <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestUpdateSectionHome6;
