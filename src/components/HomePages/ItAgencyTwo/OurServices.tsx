"use client";

import React from "react";
import Link from "next/link";

const servicesData = [
  {
    iconName: "pe-7s-comment bg-13c4a1",
    title: "Finance",
    shortText:
      "Enhance regulatory compliance, streamline budgeting, and optimize workforce management.",
    viewDetails: "",
    aosDelay: "100",
  },
  {
    iconName: "pe-7s-display2 bg-6610f2",
    title: "Recruitment",
    shortText:
      "Automate resume screening, scheduling, and onboarding for efficient talent acquisition.",
    viewDetails: "",
    aosDelay: "200",
  },
  {
    iconName: "pe-7s-light bg-ffb700",
    title: "Logistics",
    shortText:
      "Improve fleet management and warehouse operations to boost efficiency and reduce costs.",
    viewDetails: "",
    aosDelay: "300",
  },
  {
    iconName: "pe-7s-phone bg-fc3549",
    title: "Healthcare",
    shortText:
      "Transform patient monitoring, appointment scheduling, and EHR management for better care.",
    viewDetails: "",
    aosDelay: "400",
  },
  {
    iconName: "pe-7s-cart bg-00d280",
    title: "Manufacturing",
    shortText:
      "Optimize inventory, enhance maintenance practices, and streamline workflow automation.",
    viewDetails: "",
    aosDelay: "500",
  },
  {
    iconName: "pe-7s-users bg-ff612f",
    title: "Retail",
    shortText:
      "Automate order fulfillment and inventory management to improve efficiency and customer satisfaction.",
    viewDetails: "",
    aosDelay: "600",
  },
];

const OurServices: React.FC = () => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Industries Benefiting from Automation</h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p> */}
          </div>

          <div className="row justify-content-center">
            {servicesData &&
              servicesData.slice(0, 6).map((value, i) => (
                <div 
                  className="col-lg-4 
                  col-sm-6" 
                  key={i}
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay={value.aosDelay}
                >
                  <div className="service-card-one bg-fcfbfb text-center">
                    <i className={value.iconName}></i>
                    <h3>
                      <Link href={value.viewDetails}>{value.title}</Link>
                    </h3>
                    <p>{value.shortText}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
