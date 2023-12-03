import React from "react";
import Navbar from "../components/Navbar";
import SideCarosel from "../components/SideCarosel";
import TrustedBy from "../components/TrustedBy";
import SearchProd from "../components/SearchProd";
import EbayCal from "../components/EbayCal";
import WhoWeAre from "../components/WhoWeAre";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <SideCarosel />
      <TrustedBy />
      <SearchProd />
      <EbayCal />
      <WhoWeAre />
      <Footer />
    </div>
  );
};

export default LandingPage;
