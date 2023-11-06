import React from "react";
import two from '../images/two.png'
import { Link } from "react-router-dom";

const SearchProd = () => {
  return (
    <div className="bg-[#F9F8F8]">
      {/* main div */}
      <div className=" text-center flex flex-row mx-[200px] mt-[80px]">
        {/* side div */}
        <div className="w-[500px] mx-10">
          <h1 className="text-[#C00B27] mt-10 text-3xl font-bold">Search your product </h1>
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
            <img src={two} className="w-[400px]"/>
        </div>
        {/* image div ended */}
      </div>
      {/* main div ended */}
      {/* getUltimate Acces */}
      <div className="bg-[#C00B27] text-white] text-white">
        <h1 className="text-3xl mx-[400px] my-3 pt-5">Get ultimate access to all features</h1>
        <h1 className="text-2xl mx-[400px] my-3">7 days free trial</h1>
        <h1 className="text-2xl mx-[400px] my-3">No creadit card required</h1>
        <Link to={"/register"}>
        <button type="button" className="focus:outline-none w-[200px] text-2xl text-red-600 mx-[400px] bg-white  hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
        SignUp
        </button>
        
        </Link>
      </div>
      {/* getUltimate Acces ended */}
    </div>
  );
};

export default SearchProd;
