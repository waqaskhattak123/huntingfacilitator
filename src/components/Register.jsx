import React, { useState } from "react";
import { toast } from 'react-toastify'; 
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sucess, setsuccess] = useState(false)
  const [sucess1, setsuccess1] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    birth: "",
    number: "",
    gender: "",
  });
  const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit1 = async (e) => {
    e.preventDefault();

    try {
         const response = await axios.post(
        "http://localhost:5000/api/vi/Login",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // console.log("Response from server:", response.data);
      const result = await response.data.AuthToken;
      console.log(result);
      setsuccess1(true)
      setTimeout(() => {
        setsuccess1(false)
      },2000);
      localStorage.setItem("Token", result);
      toast.success('Login Successfull', {
        position: "top-right",
        autoClose: 2000, // in milliseconds
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate('/')
      window.location.reload();
      // Handle the response data as needed
    } catch (error) {
      console.error("Error:", error);
      toast.info('Error Found While Login ', {
        position: "top-right",
        autoClose: 2000, // in milliseconds
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // Handle error
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/vi/create", formData);
      setsuccess(true);
      setTimeout(() => {
        setsuccess(false);
      }, 3000);
      toast.success('SignUp Successfull', {
        position: "top-right",
        autoClose: 2000, // in milliseconds
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // console.log("ghfhjkl")
    } catch (error) {
      console.error("Error adding user:", error);
      toast.info('Login Successfull', {
        position: "top-right",
        autoClose: 2000, // in milliseconds
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setFormData({
      name: '',
      email: '',
      password: '',
      birth: '',
      number: '',
      gender: '',
    })
  };
  return (
    <div>
      <Navbar />
      <div>
        <div  className="alert h-16">
        {sucess &&  <div   class="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
          role="alert"
        >
          <span class="font-medium">sucessifully create Account Please Login</span> </div>}
          {sucess1 &&  <div   class="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
          role="alert"
        >
          <span class="font-medium">sucessifully create Login</span> </div>}
        </div>
        <div class="grid grid-cols-2  gap-2  mr-10 mb-5 relative bottom-5 ml-10 ">
          <div>
            <div class="w-[500px] bg-black p-6 mt-5  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <h1 className="text-2xl font-bold text-center text-white">
                Login Here
              </h1>
              <form className="mt-10" onSubmit={handleSubmit1}>
                <div class="mb-6">
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-white dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    class="bg-gray-50 border rounded-2xl border-gray-300 text-black text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@flowbite.com"
                    required
                  />
                </div>
                <div class="mb-6">
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-white dark:text-white"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    class="bg-gray-50 border rounded-2xl border-gray-300 text-black text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                {/* <div class="mb-6">
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-white dark:text-white"
                  >
                    Retype Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    class="bg-gray-50 border rounded-2xl border-gray-300 text-white text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div> */}
                <div class="flex items-start mb-6">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      required
                    />
                  </div>

                  <label
                    for="remember"
                    class="ml-2 text-sm font-medium text-white dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
                <button
                  type="submit"
                  class="text-white text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div>
            {/* SIgn up */}
            <div class="grid grid-cols-4 gap-4">
              <div class="w-[500px] p-6 mt-5 bg-black placeholder:text-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h1 className="text-2xl font-bold text-red-600 text-center">
                  Sign Here
                </h1>
                <form onSubmit={handleSubmit}>
                  <div class="mb-6">
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-white dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      id="name"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      class="rounded-2xl bg-red-600 border  border-gray-300 text-white text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@flowbite.com"
                      required
                    />
                  </div>
                  <div class="mb-6">
                    <label
                      for="name"
                      class="block mb-2 text-sm font-medium text-white dark:text-white"
                    >
                      Uer Name
                    </label>
                    <input
                      type="name"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      class="rounded-2xl bg-red-600 border border-gray-300 text-white text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name of User"
                      required
                    />
                  </div>
                  <div class="mb-6">
                    <label
                      for="number"
                      class="block mb-2 text-sm font-medium text-white dark:text-white"
                    >
                      Phone Number
                    </label>
                    <input
                      type="number"
                      id="email"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                      class="rounded-2xl bg-red-600 border border-gray-300 text-white text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=" Enter User number"
                      required
                    />
                  </div>
                  <div class="mb-6">
                    <label
                      for="password"
                      class="block mb-2 text-sm font-medium text-white dark:text-white"
                    >
                      Your password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      class="rounded-2xl bg-red-600 border border-gray-300 text-white text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div class="flex items-center mr-4">
                    <div>
                      <h1>Data of Borth</h1>
                      <input
                        type="number"
                        id="password"
                        name="birth"
                        value={formData.birth}
                        onChange={handleChange}
                        class="rounded-2xl bg-red-600 border border-gray-300 text-white text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="dd/m/y"
                        required
                      />
                    </div>
                    <div className="relative left-16">
                      <h1>Gender</h1>
                      <input
                        type="password"
                        id="password"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        class="rounded-2xl bg-red-600 border border-gray-300 text-white text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>
                  <div class="flex items-start mb-6">
                    <div class="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        value=""
                        class=" rounded-2xl bg-red-600 w-4 h-4 border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <div class="flex items-center mr-4">
                      <label
                        for="remember"
                        class="ml-2 text-sm font-medium text-white dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
