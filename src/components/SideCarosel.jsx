import React from "react";
import one from "../images/one.png";

const SideCarosel = () => {
  return (
    <div>
      {/* carosel main div */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-[30px] mx-2">
        {/* side contend */}
        <div className="">
          <h1 className=" text-[#C00B27] text-3xl font-bold">
            EBay Selling Manager Software
          </h1>
          <p className=" font-bold mt-2">
            All the selling tools you need to manage, automate, and grow your
            eBay business.
          </p>
          <button
            type="button"
            className="focus:outline-none rounded-full mt-[10px]  text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium px-5 py-2.5 mr-2 mb-4 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Try all features for 7 days free
          </button>
        </div>
        {/* side contend ended */}
        {/* img div */}
        <div data-aos="zoom-in-up">
          <img src={one} className="rounded-xl h-[350px] w-[600px]" />
        </div>
        {/* img div ended */}
      </div>
      <hr></hr>
      {/* carosel main ended */}
    </div>
  );
};

export default SideCarosel;
