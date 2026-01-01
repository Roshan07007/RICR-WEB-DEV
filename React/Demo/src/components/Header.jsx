import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { motion } from "motion/react";

const Header = () => {
  return (
    <>
      <div className="container-flud bg-primary  d-flex  ">
        <h2 className="d-flex mt-2 ms-5 text-white">MakeUp</h2>
        <Link
          to={"/"}
          className="text-decoration-none  text-white d-flex justify-content-end me-4 mt-4 flex-grow-1 "
        >
          Home
        </Link>
            
        <Link
          to={"/about"}
          className="text-decoration-none text-white d-flex  justify-between  me-4 mt-4 felx"
        >
          About
        </Link>
        
        <Link
          to={"/LoginPage"}
          className="text-decoration-none text-white d-flex  justify-between  me-4 mt-4 felx"
        >
          Login
        </Link>
        <Link
          to={"/products"}
          className="text-decoration-none text-white  me-2    mt-4 flex  justify-center  flex-grow-0 "
          data-aos="zoom-out-down"
        >
          Products
        </Link>
        <Link
          to={"/Contact"}
          className="text-decoration-none text-white  me-3 ms-3  mt-4 d-flex  justify-center  flex-grow-0"
        >
          Contact
        </Link>
      </div>
    </>
  );
};
export default Header;
