import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/all.min.css";
import "../../public/assets/css/animate.css";
import "../../public/assets/css/magnific-popup.css";
import "../../public/assets/css/meanmenu.css";
import "../../public/assets/css/swiper-bundle.min.css";
import "../../public/assets/css/nice-select.css";
import "../../public/assets/css/color.css";
import "../../public/assets/css/main.css";
import SearchArea from "../../components/SearchArea";
import Script from "next/script";

import Header from "../../components/Header";
import MouseCursor from "../../components/MouseCursor";
import Preloader from "../../components/Preloader";
import ScrollToTop from "../../components/ScrollToTop";
import OffcanvasSidebar from "../../components/OffcanvasSidebar";
import Footer from "../../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AIForge - AI Startup & Technology HTML Template",
  description: "AIForge - AI Startup & Technology HTML Template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="namespace-it" />
        <meta
          name="description"
          content="AIForge - AI Startup & Technology HTML Template"
        />
        <title>AIForge - AI Startup & Technology HTML Template</title>
        <link rel="shortcut icon" href="assets/img/favicon.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <OffcanvasSidebar />
        <SearchArea />
        <Preloader />
        <ScrollToTop />
        {children}
        <MouseCursor />
        <Footer />

        {/* JS Files */}
        <Script
          src="/assets/js/jquery-3.7.1.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/assets/js/viewport.jquery.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/jquery.nice-select.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/jquery.waypoints.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/jquery.counterup.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/swiper-bundle.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/jquery.meanmenu.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/jquery.magnific-popup.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/wow.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
        <Script src="/assets/js/ajax-mail.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/circle-progress.js"
          strategy="afterInteractive"
        />

        {/* Inline script to check if all scripts loaded */}
        <Script id="check-scripts" strategy="afterInteractive">
          {`
    console.log("All scripts loaded successfully");
    
    if (typeof jQuery !== "undefined") {
      console.log("jQuery is loaded and working!");
    } else {
      console.log("jQuery is NOT loaded");
    }
  `}
        </Script>
      </body>
    </html>
  );
}
