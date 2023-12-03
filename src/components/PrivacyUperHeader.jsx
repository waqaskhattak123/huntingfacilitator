import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PrivacyUperHeader = () => {
  return (
    <div className="mx-3">
      <Navbar />
      <div className="text-center">
        <h1 className="text-5xl text-red-600 h-[70px] font-semibold mt-6">
          Privacy Policy
        </h1>
        <hr></hr>
      </div>
      <div className="justify-center text-justify">
        <h1 className="font-bold text-center text-2xl">
          Privacy Policy for eBay Calculato
        </h1>
        <span className="justify-center font-semibold leading-9">
          Website This Privacy Policy outlines how your personal information is
          collected, used, and protected when you use the eBay Calculator
          website (referred to as the "Service"). By accessing or using the
          Service, you agree to the terms outlined in this Privacy Policy. If
          you do not agree with these terms, please refrain from using the
          Service.
        </span>
      </div>
      <div className="text-center justify-center">
        <h1 className="font-bold text-2xl">Personal Information</h1>
        <span className="justify-center font-semibold leading-9">
          When you use the eBay Calculator website, we may collect personally
          identifiable information, including but not limited to your name,
          email address, and eBay username. We collect this information when you
          voluntarily provide it to us through contact forms, registration, or
          when you use certain features of the Service.
        </span>
      </div>
      <div className=" text-center justify-center">
        <h1 className="font-bold text-2xl">Usage Data</h1>
        <span className="justify-center font-semibold leading-9">
          We may also collect non-personal information about your interactions
          with the Service. This may include your IP address, browser type,
          referring website, pages you visit, and the date and time of your
          visits. We use this information to analyze trends, administer the
          Service, track user movements, and gather demographic information for
          aggregate use
        </span>
      </div>
      <div className="text-center justify-center">
        <h1 className="font-bold text-2xl">
          Cookies and Tracking Technologies
        </h1>
        <span className="justify-center font-semibold leading-9">
          The eBay Calculator website may use cookies and similar tracking
          technologies to collect and track information about your interactions
          with the Service. These technologies help us analyze usage patterns,
          improve user experience, and tailor our content to your interests. You
          can control cookies through your browser settings and opt-out of
          certain tracking by following the instructions provided in our Cookie
          Policy.
        </span>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyUperHeader;
