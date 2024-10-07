import React from "react";
import { featured, testimonals, youths } from "../constants";
import youth from "../assets/youth.jpg";
import { IoMdCall } from "react-icons/io";
import { Link } from "react-scroll";

const Featured = () => {
  return (
    <div className="max-w-full min-h-screen text-[#141414] bg-white">
      <div className="flex flex-col items-center justify-center">
        <h2 className="bg-[#ff0000] px-4 py-1 my-6 rounded-full uppercase text-white font-light ">
          Features
        </h2>
        <h1 className="text-2xl font-semibold">Web Design Projects</h1>
        <p className="text-lg">Check Out Some of Our Latest Projects</p>
        {/* Mapping Web Projects */}
        <div className="grid md:grid-cols-4 gap-4 my-10">
          {featured.map((item, id) => (
            <div key={id}>
              <div className="relative  flex items-end justify-center rounded-lg md:hover:scale-125 hover:z-10 duration-300 ease-in-out w-[320px] md:w-[300px] md:h-[200px] h-[300px]">
                <img
                  src={item.backgroundImage}
                  alt="background image"
                  className="hover:object-right duration-300 ease-in-out  shadow-sm shadow-black/50 object-cover w-full h-full absolute inset-0 rounded-lg"
                />
                <a
                  href={item.link}
                  name="packages"
                  className="bg-white/10 text-center  hover:bg-[#ff0000] duration-300 ease-in-out backdrop-blur-md w-[120px] md:text-xs rounded-full mb-6 text-white border border-[#ff0000]  py-1"
                >
                  {item.tittle}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Mapping */}
        <h1 className="text-2xl font-semibold mt-24">TESTIMONIALS</h1>
        <p className="text-lg">Check Out What Our Customers Are Saying</p>
        <div className="grid md:grid-cols-4 gap-4 my-10 max-w-7xl">
          {testimonals.map((item, id) => (
            <div key={id}>
              <div className="flex flex-col space-y-6">
                <div className="text-center shadow-md rounded-lg shadow-black/10 max-w-[200px]">
                  <p className="text-xs p-4">{item.testimonal}</p>
                </div>
                <div className="flex space-x-4 items-center">
                  <img
                    src={item.profilePic}
                    alt="profile picture"
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <h2 className="text-sm font-semibold">{item.name}</h2>
                    <h3 className="text-xs font-light">{item.position}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Youth Lives Matters */}
        <div className=" mx-4 group relative space-y-6 rounded-lg my-20 flex  flex-col text-center text-white items-center justify-center w-[320px] md:w-[1000px] h-[600px] md:h-[400px]">
          <img
            src={youth}
            alt="youth"
            className="absolute brightness-50 inset-0 rounded-lg w-full duration-300 ease-in-out h-full group:hover:object-top object-cover"
          />
          <h3 className="z-10 font-semibold text-2xl">Youth Empowerment</h3>
          <h4 className="z-10 md:text-sm text-xl mx-1">
            Igniting entrepreneurial potential and fueling business growth.
          </h4>
          <p className="z-10 md:text-xs text-lg max-w-2xl text-slate-400 mx-2">
            Empowering YOUTHS to transform their dreams into reality. We provide
            the essential tools, guidance, and support to nurture side hustles
            into thriving businesses and elevate SMMEs to lasting legacies.
          </p>
          <div className="grid grid-cols-5 z-10 uppercase gap-8 md:gap-32">
            {youths.map((item, id) => (
              <div key={id}>
                <div className="bg-white/10 backdrop-blur-sm text-2xl rounded-lg px-2 md:px-10">
                  <h1>{item.latter}</h1>
                </div>
              </div>
            ))}
          </div>
          <h1 className="z-10 uppercase text-2xl md:text-xl tracking-widest">
            Lives Matters
          </h1>
        </div>

        {/* #becomeanentrepreneurtoday */}
        <div className="flex items-center  text-white flex-col md:flex-row bg-[#ff0000] mb-20 md:space-x-20 py-4 md:px-20 px-8 space-y-8 md:space-y-0 rounded-lg  justify-around">
          <h3 className="md:text-2xl text-center font-semibold">
            #becomeanentrepreneurtoday
          </h3>
          <Link
            to="footer"
            duration={1000}
            smooth={true}
            className="p-4 md:text-xl text-center rounded-lg border-2  hover:bg-white duration-300 ease-in-out cursor-pointer hover:text-[#ff0000]"
          >
            START YOUR JOURNEY TODAY
          </Link>
        </div>

        {/* Hurry Up & Get Started today */}
        <div className="flex flex-col items-center space-y-3 mb-20">
          <p className="md:text-xs">
            {" "}
            Are You Prepared To Bring Your Dream To Earth?
          </p>
          <h2 className="md:text-2xl text-xl font-semibold ">
            Hurry Up And Start Today
          </h2>
          <Link
            to="footer"
            duration={1000}
            smooth={true}
            className="flex items-center py-2 cursor-pointer text-xl md:text-sm px-4 hover:px-6 duration-200 gap-2 font-bold rounded-full hover:text-white border-2 hover:bg-[#ff0000] hover:border-[#ff0000] border-black"
          >
            <IoMdCall />
            <h3>Join The Crew</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Featured;
