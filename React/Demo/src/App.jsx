import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./components/Footer";
import Header from "./components/header";
import { motion } from "motion/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import { FaHome } from "react-icons/fa";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "lottie-react";
import Kuchchi from "./assets/L.json";

import LoginPage from "./pages/loginPage";
import { Toaster } from "bootstrap/dist/js/bootstrap.min.js";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation speed
      easing: "ease-in-out",
      once: false, // animation only once
    });
  }, []);
  return (
    <>
      <Header />

      {/* <lottie /> */}

      <Routes>
        <Toaster />

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/LoginPage" element={<LoginPage />} />
      </Routes>
      {/* <Footer /> */}

      {/* <motion.button
        drag
        whileHover={{ scale: 2 }}
        className="text-black bg-amber-500 w-10 h-7 flex items-center gap-1 rounded-2xl border-1  "
      >
        <FaHome className="text-blue-50" />
        hiI
      </motion.button> */}
      {/* <Footer/> */}
    </>
  );
}

export default App;
