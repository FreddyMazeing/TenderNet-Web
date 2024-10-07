import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import webdev from "../assets/webdev.jpg";
import baloi from "../assets/baloi.jpeg";
import { IoMdCall } from "react-icons/io";
import {
  theProcess,
  featured,
  webPackages,
  testimonals,
  youths,
} from "../constants";
import { Link } from "react-scroll";

const WebDevelopment = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-full min-h-screen text-[#141414] bg-white font-sans">
        <div className="relative max-w-full min-h-[500px] flex flex-col items-center justify-center ">
          {/* Bg Image */}
          <div className="absolute inset-0 ">
            <img
              src={webdev}
              alt="webdev"
              className="w-full h-full object-cover"
            />
          </div>
          {/* White Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-white to-white/80 z-10  "></div>

          <div className="z-20 flex flex-col items-center justify-center text-center">
            <p className="md:text-xs font-semibold">
              Bringing Your <span className="text-[#ff0000]">Vision</span> to{" "}
              <span className="text-[#ff0000]">Life</span>
            </p>
            <h1 className="text-[#ff0000] mb-12  text-4xl font-bold text-center">
              Web Development
            </h1>

            <p className="text-xl font-semibold max-w-xl text-center">
              Google Patnership
            </p>
            <p className="md:text-xs md:w-full w-[320px] mb-4 mx-4  font-semibold text-[#ff0000]">
              Elevate Your Brand with Targeted Social Media Marketing and Google
              Ads
            </p>
            <p className="md:text-xs md:w-1/2 w-[320px] my-4 mx-4  ">
              Web Development is a way to promote your brand or products using
              cusom displayo .We create websites that connect to your{" "}
              <span className="text-[#ff0000]">
                Facebook, Instagram, Twitter, LinkedIn
              </span>
              , and <span className="text-[#ff0000]">TikTok</span>. We
              incorporate engaging content, that customers interact with when
              they visit your site. A user friendy website can{" "}
              <span className="text-[#ff0000]">
                increase brand awareness, build relationships with customers
              </span>
              , and{" "}
              <span className="text-[#ff0000]">drive website traffic.</span>
            </p>
            <div className="rounded-full border-2 border-[#ff0000] mx-1  my-10 flex items-center justify-center md:gap-6">
              <h1 className="md:text-lg p-2 text-xs font-semibold text-[#ff0000]">
                Improved customer trust
              </h1>
              <Link
                to="packages"
                smooth={true}
                duration={500}
                className="md:text-lg cursor-pointer text-xs  font-semibold duration-300 ease-in-out  hover:tracking-widest text-white md:p-2 px-4 py-4  bg-[#f00000] rounded-full text-center"
              >
                Start Today
              </Link>
            </div>
          </div>
        </div>
        <div className="max-w-full min-h-screen flex flex-col items-center justify-center ">
          <h2 className="text-2xl font-bold text-center my-10"> The Process</h2>
          {/* the process Loop */}
          <div className="grid md:grid-cols-3 gap-6 mx-6">
            {theProcess.map((item, id) => (
              <div key={id}>
                <div className="shadow-black/10 shadow-md flex flex-col items-start space-y-6 justify-center p-4  ">
                  <h1 className="text-xl font-semibold">{item.tittle}</h1>
                  <div className="flex flex-col items-start justify-center">
                    <h2 className="md:text-sm font-semibold">
                      {item.heading1}
                    </h2>
                    <p className="md:text-xs">{item.description1}</p>
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <h2 className="md:text-sm font-semibold">
                      {item.heading2}
                    </h2>
                    <p className="md:text-xs">{item.description2}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Web Projects */}
          <h1 className="text-2xl font-semibold mt-40">Web Design Projects</h1>
          <p className="text-lg">Check Out Some of Our Latest Projects</p>
          {/* Mapping Web Projects */}
          <div className="grid md:grid-cols-4 gap-4 my-10 mb-20">
            {featured.map((item, id) => (
              <div key={id}>
                <div className="relative  flex items-end justify-center rounded-lg md:hover:scale-125 hover:z-10 duration-300 ease-in-out w-[350px] md:w-[300px] md:h-[200px] h-[300px]">
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

          {/* Web Development Packages */}
          <h1 className="text-2xl font-semibold mt-40">Web Packages</h1>
          <p className="md:text-lg text-center text-base">
            It's now time for you to have your own website
          </p>
          {/* Looping Packages */}
          <div className="grid md:grid-cols-3 my-10 gap-10 mx-6">
            {webPackages.map((item, id) => (
              <div key={id}>
                <div className="relative rounded-lg flex flex-col space-y-6 items-center md:w-[300px] w-[350px]   justify-center rounded-xl   shadow-lg shadow-black/10 p-4">
                  <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-xl rounded-t-lg bg-[#ff0000] h-16 w-full">
                    <h1>{item.package}</h1>
                  </div>
                  <h2 className="text-[#ff0000] font-bold pt-10 ">
                    {item.payment}
                  </h2>
                  <hr className="border-1 w-full border-[#ff0000] " />
                  <p className="md:text-sm font-semibold text-lg">{item.l1}</p>
                  <p className="md:text-sm font-semibold text-lg">{item.l2}</p>
                  <p className="md:text-sm font-semibold text-lg">{item.l3}</p>
                  <p className="md:text-sm font-semibold text-lg">{item.l4}</p>
                  <p className="md:text-sm font-semibold text-lg">{item.l5}</p>
                  <p className="md:text-sm font-semibold text-lg">{item.l6}</p>
                  <Link
                    to="footer"
                    smooth={true}
                    duration={100}
                    className="text-[#ff0000] rounded-full  px-4 py-2 font-semibold md:text-lg text-xl duration-200 ease-in-out cursor-pointer  hover:text-white hover:bg-[#ff0000] shadow-md  "
                  >
                    {item.buttonText}
                  </Link>
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
          <div className=" mx-4 group   relative space-y-6 rounded-lg my-20 flex  flex-col text-center text-white items-center justify-center w-[320px] md:w-[1000px] h-[600px] md:h-[400px]">
            <img
              src={baloi}
              alt="youth"
              className="absolute brightness-50 inset-0 rounded-lg w-full duration-300 ease-in-out h-full object-top object-cover"
            />
            <h3 className="z-10 font-semibold text-2xl">Youth Empowerment</h3>
            <h4 className="z-10 md:text-sm text-xl mx-1">
              Igniting entrepreneurial potential and fueling business growth.
            </h4>
            <p className="z-10 md:text-xs text-lg max-w-2xl text-slate-400 mx-2">
              Empowering YOUTHS to transform their dreams into reality. We
              provide the essential tools, guidance, and support to nurture side
              hustles into thriving businesses and elevate SMMEs to lasting
              legacies.
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
              smooth={true}
              duration={100}
              className="p-4 md:text-xl text-center rounded-lg border-2  hover:bg-white duration-300 ease-in-out cursor-pointer hover:text-[#ff0000]"
            >
              START YOUR JOURNEY TODAY
            </Link>
          </div>

          {/* Hurry Up & Get Started today */}
          <div className="flex flex-col items-center space-y-3 mb-20">
            <p className="md:text-xs w-[320px] text-center">
              {" "}
              Are You Prepared To Bring Your Dream To Earth?
            </p>
            <h2 className="md:text-2xl text-xl font-semibold ">
              Hurry Up And Start Today
            </h2>
            <Link
              to="footer"
              smooth={true}
              duration={100}
              className="cursor-pointer  flex items-center py-2 text-xl md:text-sm px-4 hover:px-6 duration-200 gap-2 font-bold rounded-full hover:text-white border-2 hover:bg-[#ff0000] hover:border-[#ff0000] border-black"
            >
              <IoMdCall />
              <h3>Join The Crew</h3>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WebDevelopment;
