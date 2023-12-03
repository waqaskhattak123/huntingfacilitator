import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const ProductDisp = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    // navigate("/productdiscription");
  };
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div>
      <Navbar />
      <div>
        <h1 className="mb-4 h-14 pt-4 text-xl bg-[#F6F6F6] text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
          All Products
        </h1>
        <form className="ml-20 mr-48 my-5 sm:ml-32 md:ml-32 lg:ml-36">
          <label
            for="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative ">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 sm:ml-[40px] text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-[250px] sm:ml-[40px] sm:w-[350px] md:w-[500px] lg:w-[800px] p-4 pl-10 text-sm rounded-full text-gray-900 border border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Mockups, Logos..."
              required
            />
          </div>
        </form>
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 bg-[#F6F6F6] lg:grid-cols-4 gap-5 place-items-center">
          {products.map((element) => {
            return (
              <div>
                <div
                  className="bg-white border border-gray-200 h-auto  shadow dark:bg-gray-800 dark:border-gray-700"
                  style={{ border: "1px", borderRadius: "30px" }}
                >
                  <Link to={"/productdiscription/" + element.id}>
                    <img
                      src={element.image}
                      alt=""
                      style={{ border: "1px", borderRadius: "30px" }}
                      className="cursor-pointer w-[180px] h-[230px] mx-auto"
                      onClick={() => handleNavigate()}
                    />
                  </Link>
                  <h1 className="pl-2">Name : {element.title.slice(0, 27)}</h1>
                  <h1 className="pl-4">Price: {element.price}</h1>
                  <br></br>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDisp;
