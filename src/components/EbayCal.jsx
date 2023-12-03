import React from "react";
import three from "../images/three.png";

const EbayCal = () => {
  return (
    <div className="bg-[#F9F8F8]">
      {/* main div */}
      <div className=" text-center mt-[10px]">
        {/* side div */}
        <div className="">
          <h1 className="text-[#C00B27] text-3xl mt-10 font-bold">
            Search your product{" "}
          </h1>
          <h1 className=" leading-10 p-[30px]">
            "Find Your Product: Our powerful search tool simplifies the hunt for
            your desired items. Effortlessly browse through a vast selection of
            products across various categories, ensuring you discover exactly
            what you're looking for. Make your shopping experience quick,
            convenient, and efficient with our intuitive product search
            feature."
          </h1>
        </div>
        {/* side div ended */}

        {/* image div */}
        <div data-aos="zoom-in-up">
          <img src={three} className="w-auto mx-auto rounded-3xl" />
        </div>
        {/* image div ended */}
      </div>
      {/* main div ended */}
    </div>
  );
};

export default EbayCal;
