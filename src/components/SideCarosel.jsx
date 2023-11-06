import React from "react";
import one from "../images/one.png";

const SideCarosel = () => {
  return (
    <div>
      {/* carosel main div */}
      <div className="flex flex-row mt-[30px] mx-3">
        {/* side contend */}
        <div className="w-[500px] mx-[70px]">
          <h1 className="text-3xl text-[#C00B27] font-bold">
            EBay Selling Manager Software
          </h1>
          <p className="text-2xl font-bold mt-2">
            All the selling tools you need to manage, automate, and grow your
            eBay business.
          </p>
          <button
            type="button"
            className="focus:outline-none mt-[100px] w-[100%] text-2xl rounded-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Try all features for 7 days free
          </button>
        </div>
        {/* side contend ended */}
        {/* img div */}
        <div>
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
