import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Aboutus from "./pages/Aboutus";
import LandingPage from "./pages/LandingPage";
import ContactUs from "./pages/ContactUs";
import Privacy from "./pages/Privacy";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Productsdis from "./pages/Productsdis";
import CalculatorPg from "./pages/CalculatorPg";
import ProductDiscrpt from "./components/ProductDiscrpt";
import MoreDiscription from "./components/MoreDiscription";
import Register from "./components/Register";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ToastContainer/>
    <BrowserRouter>
    <Routes>
      {/* <Route path="navbar" element={}/> */}
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/about" element={  <Aboutus/>}/>
      <Route path="/contactus" element={<ContactUs/>}></Route>
      <Route path="/privacy" element={<Privacy/>}></Route>
      {/* <Route path="/login" element={<Login/>}></Route> */}
      {/* <Route path="/signup" element={<SignUp/>}></Route> */}
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/productdisp" element={<Productsdis/>}></Route>
      <Route path="/calculator" element={<CalculatorPg/>}></Route>
      <Route path="/productdiscription/:id" element={<ProductDiscrpt/>}></Route>
      <Route path="/productmoredispcription" element={<MoreDiscription/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
    </Routes>
    </BrowserRouter>
     
     
   
    </>
  );
}

export default App;
