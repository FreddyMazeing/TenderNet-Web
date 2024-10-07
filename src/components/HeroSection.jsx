import React from "react";
import forbes from "../assets/forbes.jpg";
import { IoArrowUndoSharp } from "react-icons/io5";

import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="max-w-full min-h-screen text-[#141414] bg-white font-sans ">
      <div className="relative max-w-full min-h-screen flex flex-col items-center justify-center">
        {/* Bg Image */}
        <div className="absolute inset-0">
          <img
            src={forbes}
            alt="forbes"
            className=" w-full h-full object-cover object-left-bottom md:object-center"
          />
        </div>
        {/* White Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-white to-white/60 md:to-white/80  "></div>

        {/* Main Text */}
        <div className="flex flex-col z-10 items-center justify-center ">
          <h1 className="text-[#ff0000] my-6 w-[320px] md:w-8/12 text-4xl font-bold text-center">
            Are you ready to shoot into Entrepreneurship stardom and join the
            Forbes list?
          </h1>
          <p className="mb-12 px-4 text-center font-bold w-[320px] md:w-1/3">
            We are all about turning{" "}
            <span className="text-[#ff0000]">side hustles</span> into{" "}
            <span className="text-[#ff0000]">registered businesses</span>, and
            <span className="text-[#ff0000]">{""} SMMEs</span> into
            <span className="text-[#ff0000]">{""} legacies</span> !!
          </p>
          <div className="grid md:grid-cols-2 gap-10 md:gap-20">
            {/* Unlocking Potential */}
            <div className="flex items-center justify-center  text-2xl">
              <h1>
                #<span className="text-[#ff0000]">Unlocking</span>
                Pontential
              </h1>
              <IoArrowUndoSharp className="text-[#ff0000] rotate-45 scale-150" />
            </div>
            {/* Start Today */}
            <div className="flex bg-[#ff0000] py-1 text-xl cursor-pointer  rounded-3xl px-2 items-center  justify-center">
              <Link
                to="/contact"
                className="text-white hover:tracking-wide duration-300 ease-in-out "
              >
                Start Today
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="flex items-center mt-20 justify-center max-w-full">
            <div className="grid grid-cols-2 font-sans font-semibold text-sm   md:grid-cols-5 md:text-center  gap-10 ">
              <Link
                to="/companyRegistration"
                className="text-[#ff0000] hover:text-blue-600 duration-300 ease-in-out hover:tracking-wide cursor-pointer"
              >
                Company Registration
              </Link>
              <Link
                to="/webdev"
                className="text-[#ff0000] hover:text-blue-600 duration-300 ease-in-out hover:tracking-wide cursor-pointer"
              >
                Web development
              </Link>
              <Link
                to="/digitalMarketing"
                className="text-[#ff0000] hover:text-blue-600 duration-300 ease-in-out hover:tracking-wide cursor-pointer"
              >
                Digital Marketing
              </Link>
              <Link
                to="/businessCompliance"
                className="text-[#ff0000] hover:text-blue-600 duration-300 ease-in-out hover:tracking-wide cursor-pointer"
              >
                Funding
              </Link>
              <Link
                to="/businessCompliance"
                className="text-[#ff0000] hover:text-blue-600  duration-300 ease-in-out hover:tracking-wide cursor-pointer"
              >
                {" "}
                Business Compliance
              </Link>
              <div className=" w-[130px] hidden  h-[20px] rounded-lg bg-[#ff0000] "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
