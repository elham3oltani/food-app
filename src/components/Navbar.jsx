import React, { useState, useContext } from "react";
import { FiMenu, FiSearch } from "react-icons/fi";
import { BsCart3, BsSaveFill, BsSuitHeartFill } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { GiWallet } from "react-icons/gi";
import { FaUserFriends } from "react-icons/fa";
import { AiFillTags } from "react-icons/ai";
import { CartContext } from "../context/FoodContext";
import { Link } from "react-router-dom";
const Navbar = () => {
  let { state } = useContext(CartContext);

  const [nav, setNav] = useState(false);
  console.log(state);
  return (
    <div className="max-w-[1640px] flex items-center justify-between mx-auto p-4">
      <div className="flex items-center justify-between">
        <div
          className="cursor-pointer"
          onClick={() => {
            setNav(!nav);
          }}
        >
          <FiMenu size={30} />
        </div>
        <h1 className="text-2xl hidden sm:text-3xl lg:flex lg:text-4xl px-2">
          Best
          <span className="font-bold">Food</span>
        </h1>
        <div className="text-[14px] hidden xl:flex items-center bg-gray-200 rounded-full p-1">
          <p className=" bg-black text-white p-2 rounded-full">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>
      <div className="lg:w-[500px] rounded-full w-[200px] hidden sm:w-[400px] lg:flex items-center justify-center px-2 bg-gray-200">
        <FiSearch size={25} />
        <input
          type="text"
          placeholder="Search Foods"
          className="w-full outline-none bg-transparent p-2.5"
        />
      </div>
      <div className="flex items-center">
        <Link to="/cart">
          <div className="cursor-pointer">
            <button className="py-2 bg-black rounded-3xl p-4 text-white justify-between item-center flex">
              <BsCart3 size={25} className="lg:mr-[5px]" />
              Cart
              <span className="px-1.5 text-orange-500">
                {state.itemsCounter}
              </span>
            </button>
          </div>
        </Link>
      </div>

      {nav ? (
        <div
          className="bg-black/80 w-full h-screen  fixed top-0 left-0 z-10"
          onClick={() => {
            setNav(!nav);
          }}
        ></div>
      ) : (
        ""
      )}

      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-400"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-400"
        }
      >
        <CgClose
          onClick={() => {
            setNav(!nav);
          }}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Best<span className="font-bold">Food</span>
        </h2>
        <nav className="h-screen">
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl cursor-pointer py-4 flex">
              <TbTruckDelivery size={25} className="mr-4" />
              Orders
            </li>

            <li className="text-xl cursor-pointer py-4 flex">
              <MdFavorite size={25} className="mr-4" />
              Favorite
            </li>

            <li className="text-xl cursor-pointer py-4 flex">
              <GiWallet size={25} className="mr-4" />
              Wallet
            </li>

            <li className="text-xl cursor-pointer py-4 flex">
              <MdHelp size={25} className="mr-4" />
              Help
            </li>

            <li className="text-xl cursor-pointer py-4 flex">
              <AiFillTags size={25} className="mr-4" />
              Promotions
            </li>

            <li className="text-xl cursor-pointer py-4 flex">
              <BsSaveFill size={22} className="mr-4" />
              Best Ones
            </li>

            <li className="text-xl cursor-pointer py-4 flex">
              <FaUserFriends size={25} className="mr-4" />
              Invite Freindes
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
