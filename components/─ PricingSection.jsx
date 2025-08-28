// "use client";

// import { useState } from "react";
// import Paralax from "../components/Paralax"; // import Parallax component

// const PricingSection = () => {
//   const [activeTab, setActiveTab] = useState("monthly");

//   const plans = {
//     monthly: [
//       {
//         title: "Standard",
//         price: "$25",
//         desc: "Ideal for personal project",
//         features: [
//           "✔ Access AI tool",
//           "✔ Exclusive feature",
//           "✔ 24/7 support",
//           "✔ Discord access",
//         ],
//       },
//       {
//         title: "Professional",
//         price: "$29",
//         desc: "Ideal for personal project",
//         features: [
//           "✔ Access AI tool",
//           "✔ Exclusive feature",
//           "✔ 24/7 support",
//           "✔ Discord access",
//         ],
//       },
//       {
//         title: "Business",
//         price: "$49",
//         desc: "Ideal for personal project",
//         features: [
//           "✔ Access AI tool",
//           "✔ Exclusive feature",
//           "✔ 24/7 support",
//           "✔ Discord access",
//         ],
//       },
//       {
//         title: "Enterprise",
//         price: "$54",
//         desc: "Ideal for personal project",
//         features: [
//           "✔ Access AI tool",
//           "✔ Exclusive feature",
//           "✔ 24/7 support",
//           "✔ Discord access",
//         ],
//       },
//     ],
//     annual: [
//       {
//         title: "Standard",
//         price: "$250",
//         desc: "Ideal for personal project",
//         features: [
//           "✔ Access AI tool",
//           "✔ Exclusive feature",
//           "✔ 24/7 support",
//           "✔ Discord access",
//         ],
//       },
//       {
//         title: "Professional",
//         price: "$290",
//         desc: "Ideal for personal project",
//         features: [
//           "✔ Access AI tool",
//           "✔ Exclusive feature",
//           "✔ 24/7 support",
//           "✔ Discord access",
//         ],
//       },
//       {
//         title: "Business",
//         price: "$490",
//         desc: "Ideal for personal project",
//         features: [
//           "✔ Access AI tool",
//           "✔ Exclusive feature",
//           "✔ 24/7 support",
//           "✔ Discord access",
//         ],
//       },
//       {
//         title: "Enterprise",
//         price: "$540",
//         desc: "Ideal for personal project",
//         features: [
//           "✔ Access AI tool",
//           "✔ Exclusive feature",
//           "✔ 24/7 support",
//           "✔ Discord access",
//         ],
//       },
//     ],
//   };

//   return (
//     <>
//       {/* Parallax Section */}
//       <Paralax />

//       {/* Pricing Section */}
//       <section
//         className="faq-section fix section-padding section-bg bg-cover"
//         style={{ backgroundImage: "url('/assets/img/faq/line-shape.png')" }}
//       >
//         <div className="container">
//           {/* Section Title + Tabs */}
//           <div className="section-title-area">
//             <div className="section-title ml-200">
//               <h6 className="wow fadeInUp">
//                 <img src="/assets/img/star.png" alt="star" /> POPULAR PACKAGE
//               </h6>
//               <h2 className="wow fadeInUp" data-wow-delay=".3s">
//                 Competitive Package <br />
//                 <span>
//                   Best AI <b>Expertise</b>
//                 </span>
//               </h2>
//             </div>
//             <ul className="nav">
//               <li className="nav-item wow fadeInUp" data-wow-delay=".3s">
//                 <button
//                   onClick={() => setActiveTab("annual")}
//                   className={`nav-link ${
//                     activeTab === "annual" ? "active" : ""
//                   }`}
//                 >
//                   Annual
//                 </button>
//               </li>
//               <li className="nav-item wow fadeInUp" data-wow-delay=".5s">
//                 <button
//                   onClick={() => setActiveTab("monthly")}
//                   className={`nav-link ${
//                     activeTab === "monthly" ? "active" : ""
//                   }`}
//                 >
//                   Monthly
//                 </button>
//               </li>
//             </ul>
//           </div>

//           {/* Pricing Cards */}
//           <div className="tab-content">
//             <div className="row">
//               {plans[activeTab].map((plan, idx) => (
//                 <div key={idx} className="col-lg-3 col-md-6">
//                   <div className="pricing-card">
//                     <div className="icon">
//                       <img src="/assets/img/icon/02.svg" alt="icon" />
//                     </div>
//                     <h4>{plan.title}</h4>
//                     <p>{plan.desc}</p>
//                     <h2>{plan.price}</h2>
//                     <ul>
//                       {plan.features.map((feature, i) => (
//                         <li key={i}>{feature}</li>
//                       ))}
//                     </ul>
//                     <a href="#" className="btn btn-primary">
//                       Start Now
//                     </a>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default PricingSection;

import React from "react";

const MonthlyPricing = () => {
  return (
    <section
      className="faq-section fix section-padding section-bg bg-cover"
      style={{ backgroundImage: "url('/assets/img/faq/line-shape.png')" }}
    >
      <div className="container">
        <div id="Monthly" className="tab-pane fade show active">
          <div className="row">
            {/* Standard Plan */}
            <div
              className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="pricing-box-items">
                <div className="icon">
                  <img src="assets/img/icon/02.svg" alt="Standard Plan" />
                </div>
                <div className="pricing-header">
                  <h3>Standard</h3>
                  <p>Ideal for personal project</p>
                  <h2>$25</h2>
                </div>
                <ul className="pricing-list">
                  <li>
                    <CheckIcon /> <span>Access AI tool</span>
                  </li>
                  <li>
                    <CheckIcon /> <span>Exclusive feature</span>
                  </li>
                  <li>
                    <CheckIcon /> <span>24/7 support</span>
                  </li>
                  <li>
                    <CheckIcon /> <span>Discord access</span>
                  </li>
                </ul>
                <div className="pricing-button">
                  <a href="pricing.html" className="theme-btn">
                    Start Now{" "}
                    <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Professional Plan */}
            <div
              className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="pricing-box-items">
                <div className="icon">
                  <img src="assets/img/icon/02.svg" alt="Professional Plan" />
                </div>
                <div className="pricing-header">
                  <h3>Professional</h3>
                  <p>Ideal for personal project</p>
                  <h2>$29</h2>
                </div>
                <ul className="pricing-list">
                  <li>
                    <CheckIcon /> <span>Access AI tool</span>
                  </li>
                  <li>
                    <CheckIcon /> <span>Exclusive feature</span>
                  </li>
                  <li>
                    <CheckIcon /> <span>24/7 support</span>
                  </li>
                  <li>
                    <CheckIcon /> <span>Discord access</span>
                  </li>
                </ul>
                <div className="pricing-button">
                  <a href="pricing.html" className="theme-btn">
                    Start Now{" "}
                    <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Business Plan */}
            <div
              className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="pricing-box-items">
                <div className="icon">
                  <img src="assets/img/icon/02.svg" alt="Business Plan" />
                </div>
                <div className="pricing-header">
                  <h3>Business</h3>
                  <p>Ideal for personal project</p>
                  <h2>$49</h2>
                </div>
                <ul className="pricing-list">
                  <li>
                    <CheckIcon /> <span>Access AI tool</span>
                  </li>
                  <li>
                    <CheckIcon /> <span>Exclusive feature</span>
                  </li>
                  <li>
                    <CheckIcon /> <span>24/7 support</span>
                  </li>
                  <li>
                    <CheckIcon /> <span>Discord access</span>
                  </li>
                </ul>
                <div className="pricing-button">
                  <a href="pricing.html" className="theme-btn">
                    Start Now{" "}
                    <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div
              className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="pricing-box-items">
                <div className="icon">
                  <img src="assets/img/icon/02.svg" alt="Professional Plan" />
                </div>
                <div className="pricing-header">
                  <h3>Professional</h3>
                  <p>Ideal for personal project</p>
                  <h2>$29</h2>
                </div>
                <ul className="pricing-list">
                  <li>
                    <CheckIcon /> <span>Access AI tool</span>
                  </li>
                  <li>
                    <CheckIcon /> <span>Exclusive feature</span>
                  </li>
                  <li>
                    <CheckIcon /> <span>24/7 support</span>
                  </li>
                  <li>
                    <CheckIcon /> <span>Discord access</span>
                  </li>
                </ul>
                <div className="pricing-button">
                  <a href="pricing.html" className="theme-btn">
                    Start Now{" "}
                    <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ✅ Reusable check icon component
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="12"
    viewBox="0 0 20 12"
    fill="none"
  >
    <path
      d="M10.3553 12C10.0508 12 9.84772 11.8857 9.64467 11.6571L5.38071 6.85714C4.97462 6.4 4.97462 5.71429 5.38071 5.25714C5.7868 4.8 6.39594 4.8 6.80203 5.25714L10.3553 9.25714L18.2741 0.342857C18.6802 -0.114286 19.2893 -0.114286 19.6954 0.342857C20.1015 0.8 20.1015 1.48571 19.6954 1.94286L11.066 11.6571C10.9645 11.8857 10.6599 12 10.3553 12Z"
      fill="#CDCDCD"
    />
    <path
      d="M5.27919 12C4.97462 12 4.77157 11.8857 4.56853 11.6571L0.304569 6.85714C-0.101523 6.4 -0.101523 5.71429 0.304569 5.25714C0.71066 4.8 1.3198 4.8 1.72589 5.25714L5.98985 10.0571C6.39594 10.5143 6.39594 11.2 5.98985 11.6571C5.88833 11.8857 5.58376 12 5.27919 12ZM10.6599 6.05714C10.3553 6.05714 10.1523 5.94286 9.94924 5.71429C9.54315 5.25714 9.54315 4.57143 9.94924 4.11429L13.198 0.342857C13.6041 -0.114286 14.2132 -0.114286 14.6193 0.342857C15.0254 0.8 15.0254 1.48571 14.6193 1.94286L11.3706 5.71429C11.1675 5.94286 10.9645 6.05714 10.6599 6.05714Z"
      fill="#CDCDCD"
    />
  </svg>
);

export default MonthlyPricing;
