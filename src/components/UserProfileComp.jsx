import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import three from "../images/three.png";
import Footer from "./Footer";
import axios from "axios";

const UserProfileComp = () => {
  const [Profile, setprofile] = useState([]);
  const [data, setdata] = useState(false);
  console.log(Profile);
  const getAuth = localStorage.getItem("Token");

  const getData1 = async () => {
    try {
      setdata(true);
      const result = await fetch("http://localhost:5000/api/vi/UserDetail", {
        method: "Get",
        headers: {
          "Content-Type": "application/json",
          "auth-token": getAuth,
        },
      });
      if (!result.ok) {
        throw new Error(`HTTP error! status: ${result.status}`);
      }
      const response = await result.json();
      setprofile(response);
      setdata(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setdata(false);
    }
  };
  useEffect(() => {
    getData1();
  }, []);
  const handlelogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  // console.log(Profile)
  return (
    <div>
      <Navbar />
      {data ? (
        <div>
          <div className="bg-[#F6F6F6] h-[100px] rounded-xl mb-[242px] ">
            <div className="flex items-center space-x-4 mt-11 pt-5 bg-[#F6F6F6]">
              <img className="w-10 h-10 rounded-full " src={three} />
              <div className="font-medium dark:text-white">
                <div>Name </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  No Name
                </div>
              </div>
              <div className="font-medium dark:text-white">
                <div>Phone Number</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  No phone Number
                </div>
              </div>
              <div className="font-medium dark:text-white">
                <div>Gender</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  No Gender
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-[#F6F6F6] h-[100px] rounded-xl mb-[242px] ">
          <div className="flex items-center space-x-4 mx-4 mt-11 pt-5 bg-[#F6F6F6]">
            <img className="w-10 h-10 rounded-full " src={three} />
            <div className="font-medium dark:text-white">
              <div>{Profile?.user?.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {Profile?.user?.name}
              </div>
            </div>
            <div className="font-medium dark:text-white">
              <div>Phone Number</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {Profile?.user?.name}
              </div>
            </div>
            <div className="font-medium dark:text-white">
              <div>Gender</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {Profile?.user?.name}
              </div>
            </div>
            <button
              type="button"
              className=" bg-white text-red-600   from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
              onClick={handlelogout}
            >
              Sign Out
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default UserProfileComp;
