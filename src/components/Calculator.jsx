import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Calculator = () => {
  return (
    <div>
        <Navbar/>
        <div className="">
<h1 className="mb-4 h-24 text-lg bg-[#F6F6F6] text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">Ebey Fee Calculator</h1>                   
<div class=" ml-10 grid grid-cols-2 md:grid-cols-4 gap-4">
 <div className="mt-5">
 <label for="password" class=" text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sold Price</label>
 <input type="number" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
 </div>
 <div className="mt-5">
 <label for="password" class=" text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white">Shipping Charged</label>
 <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
 </div>
 <div className="mt-5">
 <label for="password" class=" text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item Cost</label>
 <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
 </div>
  <div className="mt-5">
  <label for="password" class=" text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white">Shipping Cost</label>
 <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
 </div> 
 <div className="mt-5">
 <label for="password" class=" text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white">No. of Order(s)</label>
 <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
 </div> 
 <div className="mt-5">
 <label for="password" class=" text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seller Type</label>
 <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
 </div>
  <div className="mt-5">
  <label for="password" class=" text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white">Promoted AD Rate(%)</label>
 <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
 </div>
  <div className="mt-5">
  <label for="password" class=" text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white">Donate To Charity(%)</label>
 <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
 </div> 
 <div className="mt-5">
 <label for="password" class=" text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sold Price</label>
 <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
 </div>
  <div className="mt-5">
  <label for="password" class=" text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white">FVF Promotion</label>
 <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
 </div>
 <div className="mt-5">
  <label for="password" class=" text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white">OvserSea Sales?</label>
 <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
 </div> 
 <div className="mt-5">
 <button type="button" class=" mt-7 ml-18 focus:outline-none text-white bg-red-700 w-48 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Reset</button>
 </div>

</div>
<hr className="mt-5 w-[880px] bg-[#000000] relative ml-48" style={{height:"2px"}}></hr>

<div class="grid grid-cols-2 gap-2 mt-10 mr-10 ml-10">
        <div>
        <div class="flex items-center mr-4">
    <h1 className=" relative ml-16 text-2xl text-red text-red-600 font-bold">Ebey Fee</h1>
    <h1 className="relative ml-48 text-2xl text-red text-red-600 font-bold">RS 1200</h1>
    </div>
    <p className="font-bold text-xl mt-10">Fee percentage: 12.86% (£0.90) + £0.30 (VAT included)</p>
        </div>
        <div>
        <div class="flex items-center mr-4">
    <h1 className=" relative ml-16 text-2xl text-red text-red-600 font-bold">Total Profit</h1>
    <h1 className="relative ml-48 text-2xl text-red text-red-600 font-bold">RS 300</h1>
    </div>
    <p className="font-bold text-xl mt-10 ml-10">Profit margin: 82.86% of sold price</p>
        </div>
    </div>
    <hr className="mt-10 w-[880px] bg-[#000000] relative ml-48" style={{height:"2px"}}></hr>
    </div>
    <Footer/>
      
    </div>
  )
}

export default Calculator
