"use client";

import React from "react";
import Link from "next/link";

const MainBanner: React.FC = () => {
  return (
    <>
      <div 
        className="consulting-banner-area"
        style={{ 
          backgroundImage: `url(/images/business-consulting/consulting-banner-bg.jpg)` 
        }}
      >
        <div className="container">
          <div className="consulting-banner-content">
            <h1
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              Mastork CTO360: Turning Struggles into Innovation & Ease
            </h1>

            <p
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
             In todays fast-moving tech landscape, overcoming technical challenges can be daunting. Whether you’re struggling with implementation, scaling a team, or driving innovation, Mastork CTO360 provides the expert guidance and personalized solutions you need to streamline your business and seize new opportunities
            </p>

            <Link 
              href="/contact-us/" 
              className="default-btn-two"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              Book a Call Today<i className="fas fa-chevron-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
