import React from "react";
import two from "../images/two.png";

const MoreDiscription = () => {
  return (
    <div>
      <>
        {/* main div started */}
        <div className="mx-2">
          <div>
            <h1 className="text-3xl font-bold mt-[20px]">
              Item Purchase History...
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 mx-4">
            <img src={two} alt="" className="w-[200px] h-[200px]" />
            <h1 className="text-lg font-bold text-blue-400 underline cursor-pointer">
              Personlized Custom Mens T-Shirt New USA Gift
            </h1>
          </div>
          <div className="">
            <div className="flex flex-row">
              <h1 className="text-xl font-bold">Shipping:</h1>
              <span className=" font-semibold">
                Free Standard Shipping-USPS First Class
              </span>
            </div>
            <div className="flex flex-row">
              <h1 className="text-xl font-bold">Quantity:</h1>
              <span className=" font-semibold">More Than 10 Available</span>
            </div>
            <div className="flex flex-row">
              <h1 className="text-xl font-bold">Item Number:</h1>
              <span className=" font-semibold">979797473</span>
            </div>
            <div>
              <h1 className="mt-4 text-2xl font-bold mb-4">
                Recent Purchases:
              </h1>
              {/* table started */}
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        User ID:
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <div className="flex items-center">
                          Variation
                          <a href="#">
                            <svg
                              className="w-3 h-3 ml-1.5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                            </svg>
                          </a>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <div className="flex items-center">
                          Buy It Now
                          <a href="#">
                            <svg
                              className="w-3 h-3 ml-1.5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                            </svg>
                          </a>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <div className="flex items-center">
                          Quantity
                          <a href="#">
                            <svg
                              className="w-3 h-3 ml-1.5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                            </svg>
                          </a>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <div className="flex items-center">
                          Date of Purchase
                          <a href="#">
                            <svg
                              className="w-3 h-3 ml-1.5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                            </svg>
                          </a>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-1">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        A*********8"
                      </th>
                      <td className="px-6 py-4">Silver</td>
                      <td className="px-6 py-4">20$</td>
                      <td className="px-6 py-4">1</td>
                      <td className="px-6 py-4 font-semibold">21-Nov-2023</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        A*********66"
                      </th>
                      <td className="px-6 py-4">White</td>
                      <td className="px-6 py-4">19$</td>
                      <td className="px-6 py-4">3</td>
                      <td className="px-6 py-4 font-semibold">21-Nov-2023</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        A*********833"
                      </th>
                      <td className="px-6 py-4">Black</td>
                      <td className="px-6 py-4">20$</td>
                      <td className="px-6 py-4">5</td>
                      <td className="px-6 py-4 font-semibold">21-Nov-2023</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* table ended */}
            </div>
          </div>
        </div>
        {/* main div ended */}
      </>
    </div>
  );
};

export default MoreDiscription;
