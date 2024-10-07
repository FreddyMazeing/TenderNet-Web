import React from "react";
import { servicesList } from "../constants";
import { IoMdCall } from "react-icons/io";
import { Link } from "react-router-dom";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import twiter from "../assets/twiter.png";
import whatsup from "../assets/whatsup.png";

const Footer = () => {
  return (
    <footer className="max-w-full  min-h-screen text-[#141414] bg-[#323431]">
      <div className=" min-h-screen w-[320px]  md:w-full mx-auto flex flex-col items-center  justify-between pt-20 pb-10 ">
        {/* Make a Lasting Impact */}
        <div className="grid md:grid-cols-2 gap-20  md:gap-72">
          <div className="flex flex-col text-center">
            <h1 className="text-white text-3xl font-semibold">
              Make a Lasting Impact
            </h1>
            <p className=" text-xl mt-4 text-slate-400">
              TenderNet We Are Here For You
            </p>
          </div>
          <div className="bg-[#ff0000] rounded-2xl text-white text-center flex flex-col items-center py-2 px-1 space-y-6 md:space-y-3 ">
            <h1 className="md:text-2xl font-semibold">
              Be The First To Know About Our Specials
            </h1>
            <form
              action="https://getform.io/f/aqonznga"
              method="POST"
              encType="multipart/form-data"
            >
              <div className="flex space-x-8 items-center ">
                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  className="rounded-xl w-[200px] text-center py-2 md:text-xs text-lg  italic"
                />
                <button className="border-2  py-1 px-4 rounded-xl ">
                  {" "}
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Sercvices, Lets Tak, quick Inquirey */}
        <div className="flex md:flex-row flex-col text-white items-center justify-between mt-20 gap-24 md:gap-40">
          {/* SERVICES  */}
          <div className="text-white gap-6 md:gap-4 flex flex-col items-center">
            <h3 className="text-2xl font-semibold">Services</h3>
            {/* Services Looping */}
            <div className="flex flex-col justify-center space-y-8">
              {servicesList.map((item, id) => (
                <div key={id}>
                  <div className="flex items-center  text-lg md:text-xs   space-x-3">
                    <h1> {item.point}</h1>
                    <h1>{item.list}</h1>
                  </div>
                </div>
              ))}
            </div>
            {/* Get a quote button */}
            <a
              href="whatsapp://send?phone=+27781351373"
              to="/contact"
              className="bg-white font-semibold text-xl md:text-lg hover:text-white duration-300 ease-in-out hover:bg-[#ff0000] text-[#ff0000] rounded-full px-4 py-1"
            >
              {" "}
              Get A Quote
            </a>
          </div>

          {/* let's Talk */}
          <div className="flex flex-col gap-6 text-xs  items-center">
            <div className="flex flex-col items-center">
              <p className="text-xs">
                Ready to take your business to the next level?
              </p>
              <h3 className="text-2xl font-semibold">Let's Talk</h3>
            </div>

            <a
              href="whatsapp://send?phone=+27781351373"
              className="flex gap-3 bg-white text-[#141414] duration-200 ease-in-out hover:text-white hover:bg-[#ff0000]  py-4 md:py-2 w-[300px] md:w-[200px] cursor-pointer md:text-xs text-lg font-semibold rounded-full  justify-center items-center"
            >
              <IoMdCall />
              <h4>+27 78 135 1373</h4>
            </a>
            <div className="flex gap-3 bg-white text-[#141414]  duration-200 ease-in-out hover:text-white hover:bg-[#ff0000] py-4 md:py-2 w-[300px] md:w-[200px] cursor-pointer md:text-xs text-lg font-semibold rounded-full  justify-center items-center">
              <h4>info@tendernet.co.za</h4>
            </div>
            <button className="flex gap-3 bg-white text-[#141414]  duration-200 ease-in-out hover:text-white hover:bg-[#ff0000] py-4 md:py-2 w-[300px] md:w-[200px]  cursor-pointer md:text-xs text-lg  font-semibold rounded-full justify-center  items-center">
              Get To Know Us
            </button>

            <div className="flex flex-col gap-3 items-center">
              <h3 className="text-2xl font-semibold">Connect With Us</h3>
              {/* Social Media Loop */}
              <div className="grid grid-cols-5 gap-4">
                <a href="https://www.instagram.com/tendernet_official/">
                  <img
                    src={instagram}
                    alt="instagram"
                    className="w-8 cursor-pointer"
                  />
                </a>
                <a href="https://www.linkedin.com/company/tendernetpty/?viewAsMember=true">
                  <img
                    src={linkedin}
                    alt="linkedin"
                    className="w-8 cursor-pointer"
                  />
                </a>
                <a href="https://x.com/JarmainMka75370">
                  <img
                    src={twiter}
                    alt="twiter"
                    className="w-8 cursor-pointer"
                  />
                </a>
                <a href="https://www.facebook.com/tendernetsystems/">
                  <img
                    src={facebook}
                    alt="facebook"
                    className="w-8 cursor-pointer"
                  />
                </a>
                <a href="whatsapp://send?phone=+27781351373">
                  <img
                    src={whatsup}
                    alt="whatsup"
                    className="w-8 cursor-pointer"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Inquirey */}
          <div name="footer" className="flex flex-col items-center space-y-3 ">
            <h3 className="text-2xl font-semibold">Quick Inquirey</h3>
            <form
              action="https://getform.io/f/aqonznga"
              method="POST"
              encType="multipart/form-data"
              className="items-center flex justify-center flex-col"
            >
              <div className="flex flex-col space-y-3 text-xl md:text-xs">
                <input
                  className="bg-white text-[#141414] px-4 py-1  rounded-lg text-center"
                  type="text"
                  name="name"
                  placeholder="Full Name"
                />
                <input
                  className="bg-white text-[#141414] px-4 py-1  rounded-lg text-center"
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                />
                <input
                  className="bg-white text-[#141414] px-4 py-1 rounded-lg text-center"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <textarea
                  placeholder="Describe the service you want from TenderNet(Pty)Ltd. We'll respond you in no time."
                  name="message"
                  rows="5"
                  className="text-xs p-2 rounded-lg text-[#141414]"
                ></textarea>
              </div>
              <button className=" bg-white text-[#ff0000] px-6 text-xl md:text-lg font-semibold rounded-full py-1 my-4 hover:text-white duration-200 ease-in-out  hover:bg-[#ff0000]">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="text-white/50 copyright text-xs text-center text-wrap mt-20 ">
          {" "}
          Copyright &copy; {new Date().getFullYear()} All rights reserved by
          TenderNet(Pty)Ltd Company
        </div>
      </div>
    </footer>
  );
};

export default Footer;
