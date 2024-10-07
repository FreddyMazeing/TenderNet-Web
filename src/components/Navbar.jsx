import React, { useState } from "react";
import tendernetlogo from "../assets/tendernetlogo.png";
import { ImMenu } from "react-icons/im";
import { AiOutlineClose } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavBar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="bg-white/10 text-[#141414]  sticky top-0 z-50 py-4 backdrop-blur-sm  shadow-gray-800/10 shadow-md ">
      <div className="flex justify-between items-center mx-8 md:mx-16">
        {/* TenderNet Logo */}
        <Link to="/">
          <img
            src={tendernetlogo}
            alt="tendernetlogo"
            className="h-8 md:h-10 cursor-pointer hover:scale-110 duration-200 ease-in-out"
          />
        </Link>

        {/* Big Screen List-Items */}
        <ul className="hidden md:flex items-center space-x-10 font-sans font-semibold text-sm">
          <li className="hover:text-[#FF0000] mx-12 duration-300 ease-in-out cursor-pointer">
            About Us
          </li>
          <Link
            to="/contact"
            className="hover:text-[#FF0000]  duration-300 ease-in-out cursor-pointer"
          >
            Contact
          </Link>
          <li className="hover:text-[#FF0000]  duration-300 ease-in-out cursor-pointer">
            FAQ
          </li>
          <li className="hover:text-[#FF0000] duration-300 ease-in-out cursor-pointer">
            <DropDown />
          </li>
        </ul>

        {/* Hire Us Button */}
        <Link
          to="/contact"
          className="hidden md:flex space-x-3 py-1 font-sans font-semibold text-sm bg-[#FF0000]  items-center justify-center text-white px-4 rounded-md"
        >
          <h1 className="hover:tracking-widest duration-300 ease-in-out cursor-pointer">
            Hire Us
          </h1>
          <FaArrowRightLong className="active:translate-x-2 duration-300 ease-in-out" />
        </Link>

        {/* Mobile Drawer */}
        <div className="md:hidden sm:flex flex-col justify-end z-50">
          <button onClick={toggleNavBar}>
            {mobileDrawerOpen ? <AiOutlineClose /> : <ImMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Screen List-Items */}
      {mobileDrawerOpen && (
        <div
          className="sticky right-0 z-10 w-full   flex flex-col
          justify-center items-center md:hidden"
        >
          <ul className=" flex flex-col justify-center items-center py-6 space-y-8 font-sans font-semibold text-sm">
            <li className="hover:text-[#FF0000] duration-300 ease-in-out cursor-pointer">
              About Us
            </li>
            <Link
              to="/contact"
              className="hover:text-[#FF0000]  duration-300 ease-in-out cursor-pointer"
            >
              Contact
            </Link>
            <li className="hover:text-[#FF0000] duration-300 ease-in-out cursor-pointer">
              FAQ
            </li>
            <li className="hover:text-[#FF0000] duration-300 ease-in-out cursor-pointer">
              <DropDown />
            </li>
          </ul>

          {/* Hire Us Button */}
          <Link
            to="/contact"
            className=" flex  space-x-3 py-1 font-sans font-semibold text-sm bg-[#FF0000]  items-center justify-center text-white px-4 rounded-md"
          >
            <h1 className="hover:tracking-widest duration-300 ease-in-out cursor-pointer">
              Hire Us
            </h1>
            <FaArrowRightLong className="active:translate-x-2 duration-300 ease-in-out" />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
