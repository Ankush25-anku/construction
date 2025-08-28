import React from "react";

const PlatformSection = () => {
  return (
    <section
      className="platform-section fix section-padding-2 bg-cover"
      style={{ backgroundImage: "url('/assets/img/platform-bg.jpg')" }}
    >
      <div className="container">
        <div className="section-title style-2 text-center">
          <img
            src="/assets/img/circle-title.png"
            alt="img"
            className="wow fadeInUp"
          />
          <h6 className="mt-3 wow fadeInUp" data-wow-delay=".3s">
            favorite platform
          </h6>
          <h2 className="wow fadeInUp" data-wow-delay=".5s">
            Compatible with your <br /> <span>preferred</span> platforms
          </h2>
        </div>

        <div className="platform-wrapper">
          <div className="platform-icon">
            <img src="/assets/img/platform/messenger.png" alt="img" />
          </div>
          <div className="platform-items">
            <div className="platform-icon">
              <img src="/assets/img/platform/slack.png" alt="img" />
            </div>
            <div className="platform-icon">
              <img src="/assets/img/platform/chatgpt.png" alt="img" />
            </div>
          </div>
          <div className="platform-icon">
            <img src="/assets/img/platform/drive.png" alt="img" />
          </div>
        </div>

        <div className="platform-wrapper-2">
          <div className="platform-icon">
            <img src="/assets/img/platform/mailchimp.png" alt="img" />
          </div>
          <div className="platform-icon">
            <img src="/assets/img/platform/dropbox.png" alt="img" />
          </div>
          <div className="platform-icon">
            <img src="/assets/img/platform/whatsapp.png" alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
