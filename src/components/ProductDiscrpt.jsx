import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
const ProductDiscrpt = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);
  if (!product) {
    return (
      <div class="h-screen bg-gray-200 w-full grid place-items-center">
        <div className="w-40 h-4">
          <h1 className="text-xl font-bold">Loading,wait for a While.....</h1>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <div className="mx-3">
        <div className="grid grid-cols-1 gap-1 mt-8">
          <div className="md:relative md:ml-16">
            <img
              className="rounded-lg w-[150px] mx-auto"
              src={product.image}
              alt=""
            />
          </div>
          <div className="">
            <h2 className="text-red-600 text-2xl font-bold">Name:</h2>
            <h1 className="font-bold"> {product.title}</h1>
            <h2 className="text-red-600 text-2xl font-bold">Descp:</h2>
            <p>{product.description}</p>
            <h2 className="text-red-600 text-2xl font-bold">Category:</h2>
            {product.category}

            <div className="flex items-center mr-4">
              <p>Rs 299/-</p>
              <label
                htmlFor="inline-radio"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Inline 1
              </label>
            </div>
          </div>
        </div>
        {/* product more description started */}
        <div>
          <h1 className="mb-4 pt-3 h-14 text-lg bg-[#F6F6F6] text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
            Dscription
          </h1>
          <div className="w-full flex justify-center items-center ">
            <Link to={"/productmoredispcription"}>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Watch History
              </button>
            </Link>
          </div>

          <p className="text-justify text-gray-500 dark:text-gray-400">
            You can place here Full discription of the product You can place
            here Full discription of the product You can place here Full
            discription of the product You can place here Full discription of
            the product You can place here Full discription of the product You
            can place here Full discription of the product You can place here
            Full discription of the product You can place here Full discription
            of the product You can place here Full discription of the product
            You can place here Full discription of the product{" "}
          </p>
        </div>
        {/* product more description ended */}
      </div>
      <Footer />
    </div>
  );
};

export default ProductDiscrpt;
