import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import digitalmarketing from "../assets/digitalmarketing.jpg";
import like1 from "../assets/like1.jpg";
import like2 from "../assets/like2.jpg";
import like3 from "../assets/like3.jpg";
import { IoMdCall } from "react-icons/io";
import { socialMediaIcons, socialMediaPackages } from "../constants";
import { Link } from "react-scroll";

const DigitalMarketing = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-full min-h-screen text-[#141414] bg-white font-sans ">
        <div className="relative max-w-full min-h-[500px] flex flex-col items-center justify-center ">
          {/* Bg Image */}
          <div className="absolute inset-0 ">
            <img
              src={digitalmarketing}
              alt="companyregistration"
              className="w-full h-full object-cover"
            />
          </div>
          {/* White Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-white to-white/80 z-10 "></div>

          <div className="z-20 flex flex-col items-center justify-center text-center md:pt-28 pt-10 ">
            <p className="text-xs font-semibold">
              Bringing Your <span className="text-[#ff0000]">Vision</span> to{" "}
              <span className="text-[#ff0000]">Life</span>
            </p>
            <h1 className="text-[#ff0000] mb-12  text-4xl font-bold text-center">
              Digital Marketing
            </h1>
            <p className="text-xl font-semibold max-w-xl text-center">
              Google Patnership
            </p>
            <p className="md:text-xs md:w-full w-[320px] mb-4 mx-4  font-semibold text-[#ff0000]">
              Elevate Your Brand with Targeted Social Media Marketing and Google
              Ads
            </p>
            <p className="md:text-xs w-[320px] md:w-1/2 my-4 mx-4  ">
              Social Media Marketing involves promoting a brand or product on
              social media platforms like{" "}
              <span className="text-[#ff0000]">
                Facebook, Instagram, Twitter, LinkedIn
              </span>
              , and <span className="text-[#ff0000]">TikTok</span>. By creating
              engaging content, interacting with followers, and running targeted
              advertising campaigns, businesses can{" "}
              <span className="text-[#ff0000]">
                increase brand awareness, build relationships with customers
              </span>
              , and{" "}
              <span className="text-[#ff0000]">drive website traffic.</span>
            </p>

            <div className="rounded-full border-2 border-[#ff0000] mx-1  w-[320px] md:w-1/4 py-2  my-10 flex items-center justify-center md:gap-6">
              <h1 className=" p-2  text-xs font-semibold text-[#ff0000]">
                Improved customer engagement
              </h1>
              <Link
                to="packages"
                smooth={true}
                duration={100}
                className=" font-semibold text-sm cursor-pointer duration-300 ease-in-out  hover:tracking-widest text-white md:py-2 px-4 py-4  bg-[#f00000] rounded-full text-center"
              >
                Start Today
              </Link>
            </div>
          </div>
        </div>
        <div className=" max-w-full min-h-screen flex flex-col items-center justify-center">
          <h1
            name="packages"
            className="text-xl my-6 font-semibold w-[320px] md:max-w-xl text-center"
          >
            Social Media Management Packages
          </h1>
          <p className="md:text-xs  mx-4   text-center w-[320px] md:w-2/5">
            Every firm requires a digital marketing strategy, TenderNet Social
            Media Management Packages are designed to speed up the recognition
            of your brand.Start today, cancel any time.
          </p>
          <div className="grid my-10 grid-cols-5 gap-6 shadow-md  shadow-black/10 py-2 px-6 rounded-xl">
            {socialMediaIcons.map((item, id) => (
              <div key={id}>
                <img
                  src={item.icon}
                  className="w-4 hover:scale-110 duration-200 ease-in-out cursor-pointer "
                  alt="social media icons"
                />
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 my-10 gap-10 mx-6">
            {socialMediaPackages.map((item, id) => (
              <div key={id}>
                <div className="relative  flex flex-col space-y-6 items-center md:w-[300px] w-[320px]    justify-center rounded-xl   shadow-lg shadow-black/20 p-4">
                  <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-xl rounded-t-lg bg-[#ff0000] h-16 w-full">
                    <h1>{item.package}</h1>
                  </div>
                  <h2 className="text-[#ff0000] font-bold  pt-10">
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
                    className="text-[#ff0000]   rounded-full  px-4 py-2 font-semibold md:text-lg text-xl duration-200 ease-in-out cursor-pointer  hover:text-white hover:bg-[#ff0000] shadow-md  "
                  >
                    {item.buttonText}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <h1 className="text-xl font-semibold max-w-xl text-center">
            Our Happy Achiervements
          </h1>
          <p className="md:text-xs w-[320px] md:w-full mb-4 mx-4  font-semibold text-[#ff0000] text-center">
            "Ready to elevate your social media presece? Let's dig in together"
          </p>
          <div className="grid relative w-[320px] md:w-3/4  gap-6 my-10 md:grid-cols-3">
            <img
              src={like1}
              className="md:w-72 duration-300 ease-in-out  h-96 rounded-3xl object-cover hover:object-left-top shadow-black/20 shadow-md"
              alt="social media testimonial results"
            />
            <img
              src={like2}
              className="md:w-72 duration-300 ease-in-out  h-96 rounded-3xl object-cover hover:object-left-bottom shadow-black/20 shadow-md"
              alt="social media testimonial results"
            />
            <img
              src={like3}
              className="md:w-72 duration-300 ease-in-out  h-96 rounded-3xl object-cover hover:object-right-top shadow-black/20 shadow-md"
              alt="social media testimonial results"
            />
          </div>

          {/* Hurry Up & Get Started today */}
          <div className="flex flex-col items-center space-y-3 mt-20 mb-20">
            <p className="md:text-xs">
              {" "}
              Are You Prepared To Bring Your Dream To Earth?
            </p>
            <h2 className="md:text-2xl text-3xl font-semibold ">
              Hurry Up And Start Today
            </h2>
            <Link
              to="footer"
              smooth={true}
              duration={100}
              className=" cursor-pointer flex items-center py-2 text-xl md:text-sm px-4 hover:px-6 duration-200 gap-2 font-bold rounded-full hover:text-white border-2 hover:bg-[#ff0000] hover:border-[#ff0000] border-black"
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

export default DigitalMarketing;
