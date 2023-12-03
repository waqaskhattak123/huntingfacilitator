import React from "react";
import Navbar from "./Navbar";
import TrustedBy from "./TrustedBy";
import WhoWeAre from "./WhoWeAre";
import Footer from "./Footer";

const UpperAboutHeader = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col h-auto mx-3 text-justify">
        <h1 className="text-center text-5xl text-red-600 font-semibold mt-6">
          About Us{" "}
        </h1>

        {/* trusted by */}
        <div className="h-auto">
          <TrustedBy />
        </div>
        {/* trusted by ende */}
        <hr></hr>
        <div className="font-bold">
          <WhoWeAre />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default UpperAboutHeader;
