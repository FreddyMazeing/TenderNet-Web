import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import tendernetlogo from "../assets/tendernetlogo.png";

const ContactForm = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-full min-h-screen text-[#141414] flex items-center justify-between  bg-[#141414] font-sans ">
        <div className="grid md:grid-cols-2 md:mx-auto mx-4 gap-28 my-10">
          {/* Text */}
          <div className="  flex flex-col  items-start justify-center text-start">
            <div className="flex flex-col ">
              <p className="text-xl text-white font-semibold max-w-xl ">
                For All Your Registration
              </p>
              <h1 className=" text-white   text-4xl font-bold text-start">
                Contact Ten<span className="text-white">d</span>erNet
              </h1>
              <p className="text-xs text-white font-semibold  mb-4">
                We'll get back to you as quickly as possible, Our lovely{" "}
                <span className="font-bold ">Customers</span>
              </p>
            </div>

            {/*  Contacts */}
            <div className="flex flex-col my-4  gap-6 items-start justify-center">
              {/* Contact */}
              <div className="flex items-center text-white gap-2 ">
                <IoIosCall className="text-[#ff0000]" />
                <a
                  href="tel:+27 78 135 1373"
                  className="hover:text-blue-800/50 duration-500 ease-in"
                >
                  +27 78 135 1373
                </a>
              </div>
              {/* Email */}
              <div className="flex items-center text-white gap-2 ">
                <MdEmail className="text-[#ff0000]" />
                <a
                  href="mailto:info@tendernet.co.za"
                  className="hover:text-blue-800/50 duration-500 ease-in"
                >
                  info@tendernet.co.za
                </a>
              </div>
              {/* Location */}
              <div className="flex items-center text-white gap-2 ">
                <CiLocationOn className="text-[#ff0000]" />
                <h1>119 Augusta Rd, Rewlatch, Johannesburg South, Gauteng </h1>
              </div>
              {/* LinkedIn */}
              <div className="flex items-center text-white gap-2 ">
                <FaLinkedin className="text-[#ff0000]" />
                <a
                  href="https://www.linkedin.com/company/tendernetpty/?viewAsMember=true"
                  target="_blank"
                  className="hover:text-blue-800/50 duration-500 ease-in"
                >
                  TenderNet (Pty) Ltd
                </a>
              </div>
              {/* Location */}
              <div className="flex items-center  text-white gap-2 ">
                <CiInstagram className="text-[#ff0000]" />
                <a
                  href="https://www.instagram.com/tendernet_official/"
                  target="_blank"
                  className="hover:text-blue-800/50 duration-500 ease-in"
                >
                  tendernet_official
                </a>
              </div>
              {/* Location */}
              <div className="flex items-center  text-white gap-2 ">
                <FaWhatsapp className="text-[#ff0000]" />
                <a
                  href="whatsapp://send?phone=+27781351373"
                  target="_blank"
                  className="hover:text-blue-800/50 duration-500 ease-in"
                >
                  +27 78 135 1373
                </a>
              </div>
              {/* Location */}
              <div className="flex items-center  text-white gap-2 ">
                <FaFacebookF className="text-[#ff0000]" />
                <a
                  href="https://www.facebook.com/tendernetsystems/"
                  target="_blank"
                  className="hover:text-blue-800/50 duration-500 ease-in"
                >
                  Tendernet - Pty LTD
                </a>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className=" text-white flex flex-col items-start  ">
            <form
              action="https://getform.io/f/aqonznga"
              method="POST"
              className="mx-2 space-y-"
            >
              {/*  Name Field*/}
              <div>
                <label for="name" className=" font-medium">
                  Full Name
                </label>
                {/* Input Div */}
                <div className=" mt-1  ">
                  <input
                    type="text"
                    name="Full_Name"
                    className="w-full px-10 text-[#141414] py-1 rounded-md border border-blue-800/50"
                  />
                </div>
              </div>
              {/*   E-Mail*/}
              <div>
                <label for="email" className=" font-medium">
                  E-Mail
                </label>
                {/* Input Div */}
                <div className=" mt-1  ">
                  <input
                    type="email"
                    name="Email"
                    className="w-full px-10 py-1 text-[#141414] rounded-md border border-blue-800/50"
                  />
                </div>
              </div>
              {/*  Phone No.*/}
              <div>
                <label for="phone_number" className=" font-medium">
                  Phone No.
                </label>
                {/* Input Div */}
                <div className=" mt-1  ">
                  <input
                    type="tel"
                    name="Phone_Number"
                    className="w-full px-10 py-1 text-[#141414] rounded-md border border-blue-800/50"
                  />
                </div>
              </div>
              {/*  Service*/}
              <div className="flex gap-2 items-center my-6">
                <label
                  for="Service"
                  className="text-gray-300 font-medium uppercase"
                >
                  Service
                </label>
                <select
                  name="Service"
                  type="select"
                  id="service"
                  className="text-[#ff0000] rounded-md w-full py-1"
                >
                  <option value="">Choose Service</option>
                  <option value="">Company Registration</option>
                  <option value="">Web Development</option>
                  <option value="">Business Compliance</option>
                  <option value="">Digital Marketing</option>
                  <option value="">Funding</option>
                </select>
              </div>
              <div>
                <label for="Short_Description" className=" font-medium">
                  Short Description
                </label>
                <div className="mt-1 ">
                  <textarea
                    name="Short_Description"
                    type="text"
                    id="text"
                    placeholder="Please describe the service you want from TenderNet here."
                    rows={5}
                    className="px-10 text-[#141414] rounded-md w-full border flex text-center items-center justify-center text-xs pt-10 border-blue-800/50"
                  ></textarea>
                </div>
              </div>
              {/* Submition Button */}
              <div className="flex items-center mt-4  justify-center">
                <button
                  type="submit"
                  className="bg-blue-800 px-10 w-full hover:bg-[#ff0000] font-semibold rounded-3xl py-1"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactForm;
