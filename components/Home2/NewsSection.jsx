import React from "react";

const NewsSection = () => {
  return (
    <section className="news-section fix section-padding-2">
      <div className="container">
        {/* Section Title */}
        <div className="section-title style-2 text-center">
          <img
            src="/assets/img/circle-title.png"
            alt="img"
            className="wow fadeInUp"
          />
          <h6 className="mt-3 wow fadeInUp" data-wow-delay=".3s">
            recent articles
          </h6>
          <h2 className="wow fadeInUp" data-wow-delay=".5s">
            Story & <span>journal</span>
          </h2>
        </div>

        {/* News Items */}
        <div className="row">
          {/* News Item 1 */}
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="news-box-items">
              <div className="news-image">
                <img src="/assets/img/news/01.jpg" alt="img" />
                <div className="post-date">
                  <h4>08</h4>
                  <span>aug</span>
                </div>
              </div>
              <div className="news-content">
                <ul className="post-cat">
                  <li>
                    <i className="fa-regular fa-folder-open"></i> reporting
                  </li>
                </ul>
                <h3>
                  <a href="news-details.html">
                    Fames pellen tesque an vivamu duis tortor distract from
                  </a>
                </h3>
                <a href="news-details.html" className="link-btn">
                  Learn more{" "}
                  <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>

          {/* News Item 2 */}
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="news-box-items">
              <div className="news-image">
                <img src="/assets/img/news/02.jpg" alt="img" />
                <div className="post-date">
                  <h4>09</h4>
                  <span>aug</span>
                </div>
              </div>
              <div className="news-content">
                <ul className="post-cat">
                  <li>
                    <i className="fa-regular fa-folder-open"></i> analytics
                  </li>
                </ul>
                <h3>
                  <a href="news-details.html">
                    Responsive & really understand what I’m asking to
                  </a>
                </h3>
                <a href="news-details.html" className="link-btn">
                  Learn more{" "}
                  <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>

          {/* News Item 3 */}
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".7s"
          >
            <div className="news-box-items">
              <div className="news-image">
                <img src="/assets/img/news/03.jpg" alt="img" />
                <div className="post-date">
                  <h4>10</h4>
                  <span>aug</span>
                </div>
              </div>
              <div className="news-content">
                <ul className="post-cat">
                  <li>
                    <i className="fa-regular fa-folder-open"></i> reporting
                  </li>
                </ul>
                <h3>
                  <a href="news-details.html">
                    chatbot not only for answered my questions but also
                  </a>
                </h3>
                <a href="news-details.html" className="link-btn">
                  Learn more{" "}
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

export default NewsSection;
