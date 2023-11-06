import React from "react";
import three from '../images/three.png'

const EbayCal = () => {
  return (
    <div className="bg-[#F9F8F8]">
      {/* main div */}
      <div className=" text-center flex flex-row-reverse mx-[200px] mt-[80px]">
        {/* side div */}
        <div className="w-[500px] mx-10">
          <h1 className="text-[#C00B27] mt-4 text-3xl font-bold">Search your product </h1>
          <h1 className="text-lg leading-10">
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
        <div>
            <img src={three} className="w-[400px] rounded-3xl"/>
        </div>
        {/* image div ended */}
      </div>
      {/* main div ended */}
     
    </div>
  );
};

export default EbayCal;
