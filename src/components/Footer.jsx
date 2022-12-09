import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FiFacebook, FiTwitter } from "react-icons/fi";
const Footer = () => {
  return (
    <>
    <div className="flex-1 items-center my-auto mt-20 justify-center w-full border-2 border-orange-500 border-l-0 border-r-0 h-auto">
      <div className="flex justify-center items-center mt-2">
        <Link to="" className="m-4 p-2 bg-white rounded-full shadow-xl ">
          <AiOutlineInstagram className="text-2xl" />
        </Link>
        <Link to="" className="m-4 p-2 bg-white rounded-full shadow-xl">
          <FiFacebook className="text-2xl" />
        </Link>
        <Link to="" className="m-4 p-2 bg-white rounded-full shadow-xl">
          <FiTwitter className="text-2xl" />
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <Link to="" className="mx-2">
          About Us
        </Link>
        <Link to="" className="mx-2">
          Info
        </Link>
        <Link to="" className="mx-2">
        Support
        </Link>
      
      </div>
      <div className="flex justify-center items-center my-2">
      <Link to="" className="mx-2">
        Services
        </Link>
        <Link to="" className="mx-2">
          Contact Us
        </Link>
      </div>
      <div className="flex justify-center items-center mb-5">
        <h1>Made by Elham Soltani</h1>
      </div>
    </div>
    </>
  );
};

export default Footer;
