import React, {useState, useEffect} from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import axios from 'axios'
const ProductDiscrpt = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]);
  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Navbar />
      <div>
        <div class="grid grid-cols-2 gap-1 mr-20 ml-20 mt-8">
          <div className="md:relative md:ml-16">
            <img
              class="rounded-lg lg:w-[350px]"
              src={product.image}
              alt=""
            />
          </div>
          <div className="">
            <h2 className="text-red-600 text-2xl font-bold">
              Name of Products: {product.title}
            </h2>
            <p>
             {product.description}
            </p>
            <p>
              Catagory:
             {product.category}
            </p>

            <div class="flex items-center mr-4">
              <p>Rs 299/-</p>
              <label
                for="inline-radio"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Inline 1
              </label>
            </div>
          </div>
        </div>
        <h1 className="mb-4 h-14 text-lg bg-[#F6F6F6] text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white my-4 mt-11">
          Dscription
        </h1>
        <Link to={'/productmoredispcription'}>
          <button
            type="button"
            className="text-white mx-[600px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Watch History
          </button>
        </Link>
        <p class="w-[1000px] text-center ml-36 text-gray-500 dark:text-gray-400">
          You can place here Full discription of the product You can place here
          Full discription of the product You can place here Full discription of
          the product You can place here Full discription of the product You can
          place here Full discription of the product You can place here Full
          discription of the product You can place here Full discription of the
          product You can place here Full discription of the product You can
          place here Full discription of the product You can place here Full
          discription of the product{" "}
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDiscrpt;
