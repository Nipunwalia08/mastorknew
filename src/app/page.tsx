// import Navbar from "./../components/Layouts/Navbar";
// import MainBanner from "../components/HomePages/DefaultHome/MainBanner";
// import Services from "../components/HomePages/DefaultHome/Services";
// import About from "../components/HomePages/DefaultHome/About";
// import OurWorks from "../components/HomePages/DefaultHome/OurWorks";
// import WorkProcess from "../components/HomePages/DefaultHome/WorkProcess";
// import Feedback from "../components/Common/Feedback";
// import Team from "../components/Common/Team";
// import FunFacts from "../components/Common/FunFacts";
// import LatestNewsSlider from "../components/Common/LatestNewsSlider";
// import CtaArea from "../components/Common/CtaArea";
// import Partner from "../components/Common/Partner";
// import Footer from "../components/Layouts/Footer";

// export default function Home() {
//   return (
//     <>
//       <Navbar />

//       <MainBanner />

//       <Services />

//       <About />

//       <OurWorks />

//       <WorkProcess />

//       <Feedback />

//       <Team />

//       <FunFacts />

//       {/* <LatestNewsSlider /> */}

//       <CtaArea />

//       <Partner />

//       <Footer />
//     </>
//   );
// }
import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import MainBanner from "../components/HomePages/StudioAgency/MainBanner";
import Services from "../components/HomePages/StudioAgency/Services";
import OurWorks from "../components/HomePages/StudioAgency/OurWorks";
import FunFactsTwo from "../components/Common/FunFactsTwo";
import About from "../components/HomePages/StudioAgency/About";
import Feedback from "../components/Common/Feedback";
import LatestNewsSlider from "../components/Common/LatestNewsSlider";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Partner from "../components/Common/Partner";
import Footer from "../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <MainBanner />

      <Services />

      <About />

      <Partner />

      <OurWorks />

      {/* <FunFactsTwo />

      <Feedback /> */}

      {/* <LatestNewsSlider /> */}

      <CtaAreaTwo />



      <Footer />
    </>
  );
}
