import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Calculator = () => {
  const [soldPrice, setSoldPrice] = useState(0);
  const [shippingCharged, setShippingCharged] = useState(0);
  const [itemCost, setItemCost] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [numOfOrders, setNumOfOrders] = useState(1);
  const [eBayStore, seteBayStore] = useState("Starter");
  const [sellerLevel, setSellerLevel] = useState("Below Standard");
  const [overseaSales, setOverseaSales] = useState("No");
  const [promotedAdRate, setPromotedAdRate] = useState(0);
  const [donatedToCharity, setDonatedToCharity] = useState(0);
  const [salesTaxRate, setSalesTaxRate] = useState(0);
  const [calculationMethod, setCalculationMethod] = useState("Fixed Amount");
  const [fixedAmount, setFixedAmount] = useState(0);
  const [Perfit, setprofit] = useState();
  const [sales, setsales] = useState();
  const [fee, setfee] = useState();
  const calculateEbayFeeAndProfit = () => {
    // Calculate Sales Tax
    const salesTax = soldPrice * (salesTaxRate / 100);
    // Calculate eBay Fee
    const fvfPromotionRate = sellerLevel === "Below Standard" ? 10 : 8;
    const ebayFee = soldPrice * (fvfPromotionRate / 100);
    // Calculate Total Profit
    let totalProfit;
    if (calculationMethod === "Fixed Amount") {
      totalProfit =
        soldPrice - ebayFee - shippingCost - itemCost - salesTax - fixedAmount;
    } else {
      // Percentage calculation
      totalProfit =
        soldPrice -
        ebayFee -
        shippingCost -
        itemCost -
        salesTax -
        soldPrice * (fixedAmount / 100);
    }
    // Output or use these values as needed
    setprofit(totalProfit.toFixed(2));
    setsales(salesTax.toFixed(2));
    setfee(ebayFee.toFixed(2));
  };

  return (
    <div>
      <Navbar />
      <div className="">
        <h1 className="mb-4 h-24 pt-[30px] text-lg bg-[#F6F6F6] text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
          Ebey Fee Calculator
        </h1>

        <hr className="mt-10 bg-[#000000] relative"></hr>
      </div>
      {/* calculator starts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
        <div className="mb-6">
          <label
            for="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {" "}
            Sold Price:
          </label>
          <input
            type="number"
            value={soldPrice}
            onChange={(e) => setSoldPrice(e.target.value)}
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Sold Price:"
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {" "}
            Shipping Charged:
          </label>
          <input
            type="number"
            value={shippingCharged}
            onChange={(e) => setShippingCharged(e.target.value)}
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Shipping Charged"
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {" "}
            Item Cost:
          </label>
          <input
            type="number"
            value={itemCost}
            onChange={(e) => setItemCost(e.target.value)}
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Shipping Charged"
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Shipping Cost:
          </label>
          <input
            type="number"
            value={shippingCost}
            onChange={(e) => setShippingCost(e.target.value)}
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Shipping Charged"
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            No. of Orders:
          </label>
          <input
            type="number"
            value={numOfOrders}
            onChange={(e) => setNumOfOrders(e.target.value)}
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Shipping Charged"
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            eBay Store:
          </label>
          <select
            value={eBayStore}
            onChange={(e) => seteBayStore(e.target.value)}
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="Starter">Starter</option>
            <option value="Seller">Seller</option>
          </select>
        </div>
        <div className="mb-6">
          <label
            for="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Seller Level:
          </label>
          <select
            value={sellerLevel}
            onChange={(e) => setSellerLevel(e.target.value)}
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="Below Standard">Below Standard</option>
            <option value="Above Standard">Above Standard</option>
          </select>
        </div>
        <div className="mb-6">
          <label
            for="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {" "}
            Oversea Sales:
          </label>
          <select
            value={overseaSales}
            onChange={(e) => setOverseaSales(e.target.value)}
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>
        <div className="mb-6">
          <label
            for="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Promoted Ad Rate (%):
          </label>
          <input
            type="number"
            value={promotedAdRate}
            onChange={(e) => setPromotedAdRate(e.target.value)}
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Shipping Charged"
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {" "}
            Donated to Charity (%):
          </label>
          <input
            type="number"
            value={donatedToCharity}
            onChange={(e) => setDonatedToCharity(e.target.value)}
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Shipping Charged"
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {" "}
            Sales Tax Rate (%):
          </label>
          <input
            type="number"
            value={salesTaxRate}
            onChange={(e) => setSalesTaxRate(e.target.value)}
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Shipping Charged"
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Calculation Method:
          </label>
          <select
            value={calculationMethod}
            onChange={(e) => setCalculationMethod(e.target.value)}
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="Fixed Amount">Fixed Amount</option>
            <option value="Percentage">Percentage</option>
          </select>
        </div>
        {calculationMethod === "Fixed Amount" && (
          <div className="mb-6">
            <label
              for="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Fixed Amount:
            </label>
            <input
              type="number"
              value={fixedAmount}
              onChange={(e) => setFixedAmount(e.target.value)}
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Shipping Charged"
              required
            />
          </div>
        )}
        {calculationMethod === "Percentage" && (
          <div className="mb-6">
            <label
              for="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              {" "}
              Amount (%):
            </label>
            <input
              type="number"
              value={fixedAmount}
              onChange={(e) => setFixedAmount(e.target.value)}
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Shipping Charged"
              required
            />
          </div>
        )}
      </div>
      {/* calculator ended */}
      <button
        type="button"
        onClick={calculateEbayFeeAndProfit}
        className="text-white w-full sm:w-1/2 lg:w-1/3 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Calculate
      </button>
      <div className=" grid grid-cols-2 mt-10">
        <div>
          <div className="flex items-center mr-4">
            <h1 className=" relative  text-2xl text-red text-red-600 font-bold">
              EbeyFee {fee}
            </h1>

            <h1 className="relative  text-2xl text-red text-red-600 font-bold">
              Sales: {sales}
            </h1>
          </div>
          <p className="font-bold text-xl mt-10">
            Fee percentage: 12.86% (£0.90) + £0.30 (VAT included)
          </p>
        </div>
        <div>
          <div className="flex items-center">
            <h1 className=" relative text-2xl text-red text-red-600 font-bold">
              Total Profit: {Perfit}
            </h1>
          </div>
          <p className="font-bold text-xl mt-10">
            Profit margin: 82.86% of sold price
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Calculator;
