import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
  
      {/* footer started */}
      <footer className=" shadow dark:bg-gray-900 m-4 bg-[#C6233C] rounded-xl" >
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              className="flex items-center mb-4 sm:mb-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                fill="none"
                className=" flex flex-shrink-0 ml-[20px] w-[40px] mt-2"
              >
                <g filter="url(#filter0_d_25_500)">
                  <path
                    d="M34 40V37.1428C34 36.7676 33.9354 36.3961 33.8097 36.0494C33.6841 35.7029 33.5 35.3879 33.2679 35.1224C33.0356 34.8571 32.76 34.6467 32.4568 34.5031C32.1534 34.3596 31.8283 34.2857 31.5 34.2857H21.4993C18.1841 34.2857 15.0047 32.7806 12.6604 30.1015C10.3162 27.4224 8.99918 23.7889 8.99913 20C8.99913 18.124 9.32246 16.2663 9.95066 14.5331C10.5789 12.7998 11.4996 11.225 12.6604 9.89843C13.8211 8.57189 15.1991 7.51963 16.7157 6.80172C18.2323 6.0838 19.8578 5.71433 21.4993 5.71435H31.4993C31.8276 5.71445 32.1529 5.64064 32.4562 5.49711C32.7596 5.35357 33.0354 5.14313 33.2675 4.87781C33.4998 4.61247 33.6839 4.29746 33.8097 3.95076C33.9354 3.60406 34 3.23246 34 2.85717V0H21.4999C19.2017 -1.50743e-10 16.9261 0.517317 14.8029 1.52241C12.6797 2.52751 10.7505 4.00071 9.12554 5.85787C7.50051 7.71505 6.21148 9.91984 5.33204 12.3464C4.45261 14.7729 3.99998 17.3736 4 20C4 25.3042 5.84372 30.3914 9.12557 34.1421C12.4074 37.8928 16.8586 40 21.4999 40H34Z"
                    fill="url(#paint0_linear_25_500)"
                  />
                
                  <path
                    d="M13.9993 20C13.9993 22.2733 14.7894 24.4533 16.1959 26.0606C17.6024 27.6681 19.51 28.5711 21.499 28.5711H34.0001C35.3262 28.5711 36.5978 29.1732 37.5355 30.2448C38.4731 31.3164 39 32.7699 39 34.2854V39.9998H44.0001V34.2857C44.0001 31.2547 42.9465 28.3478 41.0712 26.2044C39.1957 24.0612 36.6522 22.8572 34.0001 22.8572H21.4994C20.8363 22.8572 20.2004 22.5561 19.7316 22.0204C19.2627 21.4845 18.9993 20.7578 18.9993 20C18.9993 19.2422 19.2627 18.5155 19.7316 17.9797C20.2004 17.4438 20.8363 17.1428 21.4994 17.1428H34.0001C36.6522 17.1428 39.1957 15.9388 41.0712 13.7955C42.9465 11.6523 44.0001 8.74536 44.0001 5.71435V0H38.9992V5.71435C38.9992 7.22967 38.4726 8.68297 37.5351 9.75455C36.5976 10.8261 35.3261 11.4282 34.0001 11.4285H21.4994C20.5144 11.4284 19.5391 11.6501 18.6292 12.0808C17.7192 12.5116 16.8923 13.143 16.1959 13.9389C15.4994 14.7348 14.947 15.6798 14.5701 16.7198C14.1932 17.7597 13.9992 18.8744 13.9993 20Z"
                    fill="url(#paint1_linear_25_500)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_25_500"
                    x={0}
                    y={0}
                    width={48}
                    height={48}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy={4} />
                    <feGaussianBlur stdDeviation={2} />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_25_500"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_25_500"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_25_500"
                    x1="8.53"
                    y1={20}
                    x2="47.0201"
                    y2={20}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#817696" />
                    <stop offset={1} stopColor="#817698" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_25_500"
                    x1="8.50913"
                    y1="19.9999"
                    x2="47.0301"
                    y2="19.9999"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#8575D2" />
                    <stop offset={1} stopColor="#9083D5" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="font-black shadow-sm mt-2 text-white">
                HuntingFacilitator
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <NavLink to={'/about'} className="mr-4 hover:underline md:mr-6 text-white">
                About
                </NavLink>

              </li>
              <li>
                <NavLink to={'/privacy'} className="mr-4 hover:underline md:mr-6 text-white">
                Privacy Policy
                </NavLink>

              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6  text-white">
                  Licensing
                </a>
              </li>
              <li>
                <NavLink to={'/contactus'} className="mr-4 hover:underline md:mr-6 text-white">
                Contact Us
                </NavLink>

              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm  sm:text-center dark:text-gray-400 text-white  ">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline text-white">
              HuntingFacilitator™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>

      {/* footer started ended */}
    </div>
  );
};

export default Footer;
