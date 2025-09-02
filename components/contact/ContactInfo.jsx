"use client";
import Link from "next/link";

export default function ContactInfo() {
  return (
    <section
      id="contact" // ✅ Added ID so header scroll works
      className="service-section fix section-padding section-bg bg-cover"
      style={{ backgroundImage: "url('/assets/img/hero/hero-bg-34.png')" }}
    >
      <div className="container">
        {/* Section Title */}
        <div className="section-title text-center">
          <h6 className="wow fadeInUp">
            <img src="/assets/img/star.png" alt="img" /> Quick support info
          </h6>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Contact{" "}
            <span>
              <b>information</b>
            </span>
          </h2>
        </div>

        {/* Contact Info Boxes */}
        <div className="row g-4">
          {/* Offices */}
          <div
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".2s"
          >
            <div className="contact-box-items-4 h-100">
              <div className="icon">
                <i className="fa-sharp fa-light fa-location-dot"></i>
              </div>
              <div className="content">
                <h3>Our Offices</h3>
                <p>
                  <b>Bengaluru</b> <br />
                  Site No 23, Flat No A1 <br />
                  Valepura, Varthur, 560087
                </p>
                <p>
                  <b>Hyderabad</b> <br />
                  Flat No. 302, Amplio Building <br />
                  Kondapur, 500084
                </p>
              </div>
            </div>
          </div>

          {/* GSTIN */}
          <div
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".8s"
          >
            <div className="contact-box-items-4 h-100">
              <div className="icon">
                <i className="fa-regular fa-file-invoice"></i>
              </div>
              <div className="content">
                <h3>GSTIN</h3>
                <p>
                  <b>Bengaluru:</b> 29AEUFS1675R1ZO
                </p>
                <p>
                  <b>Hyderabad:</b> 36AEUFS1675R1ZT
                </p>
              </div>
            </div>
          </div>

          {/* Call Us */}
          <div
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".6s"
          >
            <div className="contact-box-items-4 h-100">
              <div className="icon">
                <i className="fa-regular fa-phone"></i>
              </div>
              <div className="content">
                <h3>Call Us</h3>
                <p>
                  <Link href="tel:+919980046222">+91 9980046222</Link>
                </p>
                <p>
                  <Link href="tel:+918068708475">080 68708475</Link>
                </p>
              </div>
            </div>
          </div>

          {/* Email Us */}
          <div
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="contact-box-items-4 h-100">
              <div className="icon">
                <i className="fa-light fa-envelope"></i>
              </div>
              <div className="content">
                <h3>Email Us</h3>
                <p>
                  <Link href="mailto:yvreddy@sribalajillp.in">
                    yvreddy@sribalajillp.in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
