import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBanner from "../../components/Common/PageBanner";
import WorksStyleOne from "../../components/Portfolio/WorksStyleOne";
import WorksStyleTwo from "../../components/Portfolio/WorksStyleTwo";
import CtaAreaTwo from "../../components/Common/CtaAreaTwo";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle="Case Study" BGImage="/images/page-banner3.jpg" />

      {/* <WorksStyleOne /> */}

      <WorksStyleTwo />

      <CtaAreaTwo />

      <Footer />
    </>
  );
}
