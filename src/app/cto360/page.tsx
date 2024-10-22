import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import Navbar from "../../components/Layouts/Navbar";
import MainBanner from "../../components/HomePages/cto360/MainBanner";
import Features from "../../components/HomePages/cto360/Features";
import WhoWeAre from "../../components/HomePages/cto360/WhoWeAre";
import Services from "../../components/HomePages/cto360/Services";
import Funfacts from "../../components/HomePages/cto360/Funfacts";
import WhatWeDo from "../../components/HomePages/cto360/WhatWeDo";
import TeamMembers from "../../components/HomePages/cto360/TeamMembers";
import Pricing from "../../components/HomePages/cto360/Pricing";
import CallToAction from "../../components/HomePages/cto360/CallToAction";
import LatestNews from "../../components/HomePages/cto360/LatestNews";
import OurClients from "../../components/HomePages/cto360/OurClients";
import Newsletter from "../../components/Common/Newsletter";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      {/* <Navbar /> */}
      <NavbarTwo />

      <MainBanner />

      <Features />

      <WhoWeAre />

      <Services />

      {/* <Funfacts /> */}

      {/* <WhatWeDo />

      <TeamMembers />

      <Pricing /> */}

      <CallToAction />

      {/* <LatestNews /> */}

      {/* <OurClients /> */}

      {/* <div className="ptb-100">
        <Newsletter />
      </div> */}

      <Footer />
    </>
  );
}
