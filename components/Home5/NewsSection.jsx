import React from "react";

const NewsSection = () => {
  return (
    <section className="news-section-5 section-padding fix bg-color-2">
      <div className="container">
        {/* Section Title */}
        <div className="section-title style-5 text-center">
          <h6
            className="text-primary wow fadeInUp"
            data-wow-delay=".3s"
          >
            recent post
          </h6>
          <h2
            className="text-white wow fadeInUp"
            data-wow-delay=".5s"
          >
            expert interior designers
          </h2>
        </div>

        <div className="row">
          {/* News Item 1 */}
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="news-card-items-5">
              <div className="news-image">
                <img src="/assets/img/news/01.jpg" alt="img" />
                <a href="news-details.html" className="arrow-icon">
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
              <div className="news-content">
                <ul className="news-meta">
                  <li>
                    <i className="fa-regular fa-file"></i>
                    Architecture
                  </li>
                  <li className="style-2">May 26, 2024</li>
                </ul>
                <h3>
                  <a href="news-details.html">
                    Designing Small Spaces How AI Maximizes Every Inch
                  </a>
                </h3>
              </div>
            </div>
          </div>

          {/* News Item 2 */}
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="news-card-items-5">
              <div className="news-image">
                <img src="/assets/img/news/02.jpg" alt="img" />
                <a href="news-details.html" className="arrow-icon">
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
              <div className="news-content">
                <ul className="news-meta">
                  <li>
                    <i className="fa-regular fa-file"></i>
                    Architecture
                  </li>
                  <li className="style-2">May 26, 2024</li>
                </ul>
                <h3>
                  <a href="news-details.html">
                    Virtual Reality &amp; AI The New Frontier of Home Design
                  </a>
                </h3>
              </div>
            </div>
          </div>

          {/* News Item 3 */}
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".7s"
          >
            <div className="news-card-items-5">
              <div className="news-image">
                <img src="/assets/img/news/03.jpg" alt="img" />
                <a href="news-details.html" className="arrow-icon">
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
              <div className="news-content">
                <ul className="news-meta">
                  <li>
                    <i className="fa-regular fa-file"></i>
                    Architecture
                  </li>
                  <li className="style-2">May 26, 2024</li>
                </ul>
                <h3>
                  <a href="news-details.html">
                    AI and Home Renovations What You Need to Know
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
