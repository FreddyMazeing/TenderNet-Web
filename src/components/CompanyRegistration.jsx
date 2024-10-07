import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import companyregistration from "../assets/companyregistration.jpg";
import { newCompanyRegistration } from "../constants";
import nelson from "../assets/nelson.png";
import { testimonals, youths } from "../constants";
import youth from "../assets/youth.jpg";
import { IoMdCall } from "react-icons/io";
import { Link } from "react-scroll";

const CompanyRegistration = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-full min-h-[500px] text-[#141414] bg-white font-sans ">
        <div className="relative max-w-full min-h-[500px] flex flex-col items-center justify-center ">
          {/* Bg Image */}
          <div className="absolute inset-0 ">
            <img
              src={companyregistration}
              alt="companyregistration"
              className="w-full h-full object-cover"
            />
          </div>
          {/* White Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-white to-white/80 z-10  "></div>

          <div className="z-20 flex flex-col items-center justify-center text-center">
            <p className="text-xs font-semibold">
              Your Business, Your Future, Launch Your Legacy
            </p>
            <h1 className="text-[#ff0000] w-[320px] md:w-full mb-12  text-4xl font-bold text-center">
              Company Registration
            </h1>
            <p className="text-xl font-semibold w-[320px] md:w-1/2 text-center">
              Do you need CIPC Company Registration in South Africa? Join
              thousands of happy Clients who register a Company successfully
              through us every <span className="text-[#ff0000]">month!</span>
            </p>
            <p className="md:text-xs w-[320px] md:w-1/2 my-4 mx-4 ">
              You can Register a Company at CIPC only for now and explore other
              start-up services later as your budget allows, OR get one of our
              Startup Packages with essential compliance services needed to
              apply for a Contract / Tender, VAT or Finance.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center w-[320px] md:w-full mx-auto max-w-full min-h-screen justify-center">
          {/*New Company Reg & lady Holding  A Paper */}
          <div className="flex flex-col md:flex-row mb-20 items-center justify-center md:gap-32 gap-20">
            {/* Company Registration */}
            <div className="flex flex-col items-start rounded-xl   shadow-lg shadow-black/10 p-4 space-y-6">
              <h1 className="font-semibold text-xl">
                New Company Registration
              </h1>
              {/* Company Registration loop */}
              <div className="flex flex-col space-y-3">
                {newCompanyRegistration.map((item, id) => (
                  <div key={id}>
                    <div className="flex items-center space-x-3 ">
                      <div className="text-[#ff0000]">{item.point}</div>
                      <p className="text-xs max-w-[300px]">{item.list}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/*  */}
              <h1 className="font-bold text-[#ff0000]">R880.00 Once-Off</h1>
              <Link
                to="getStarted"
                smooth={true}
                duration={100}
                className="hover:bg-[#ff0000] cursor-pointer hover:text-white border-2 border-[#ff0000] font-semibold w-[200px] text-center rounded-full py-2"
              >
                Register Now
              </Link>
            </div>
            {/* Lady Holding A Paper */}
            <div className="rounded-lg mx-2 md:w-[600px] md:h-[500px]">
              <img
                src={companyregistration}
                alt="companyregistration"
                className="h-full  w-full hover:shadow-sm shadow-black/30 rounded-lg hover:object-left-bottom duration-300 ease-in-out object-cover"
              />
            </div>
          </div>
          {/* Company registration in 1 Day */}
          <div className=" rounded-lg  md:p-10 shadow-sm shadow-black/10  mx-2 flex flex-col md:flex-row mb-20 items-center justify-center md:gap-40 gap-20">
            {/*  Company Registration in 1 Day*/}
            <div className="flex flex-col items-center space-y-6  md:space-y-12">
              <h1
                name="getStarted"
                className="text-3xl font-bold max-w-52 md:max-w-full text-center"
              >
                Company Registration in 1 Day
              </h1>
              <p className="text-xl text-[#ff0000] max-w-64 md:max-w-full text-center">
                Easy, Online Company Registration Package with Free Extras
                Included!
              </p>
              <h2 className="font-semibold text-xl text-center ">
                R880 Once-Off
              </h2>
              <div className="hover:bg-[#ff0000]  text-[#141414] border-2 border-[#ff0000]  hover:text-white text-xl font-bold rounded-xl flex items-center justify-center px-16 py-2">
                #entrepreneurship
              </div>
            </div>
            {/* Register Now */}
            <div className="flex rounded-lg p-6 md: my-20 text-white flex-col items-center justify-center space-y-6 bg-[#323431]">
              <h1 className="text-lg font-semibold">
                Register Now OR Get Free Consultation
              </h1>
              <form
                action="https://getform.io/f/aqonznga"
                method="POST"
                encType="multipart/form-data"
                className="flex flex-col  items-center space-y-6 text-xs"
              >
                {/* First Name Input */}
                <div className="flex flex-col gap">
                  <label htmlFor="" className="text-xs">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="rounded-lg px-8 py-2 text-start text-[#141414] font-semibold"
                  />
                </div>
                {/* Second Name Input */}
                <div className="flex flex-col gap">
                  <label htmlFor="" className="text-xs">
                    Second Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="rounded-lg px-8 py-2 text-start text-[#141414] font-semibold"
                  />
                </div>
                {/* Second Name Input */}
                <div className="flex flex-col gap">
                  <label htmlFor="" className="text-xs">
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    className="rounded-lg px-8 py-2 text-start text-[#141414] font-semibold"
                  />
                </div>
                {/* Second Name Input */}
                <div className="flex flex-col gap">
                  <label htmlFor="" className="text-xs">
                    Contact Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    className="rounded-lg px-8 py-2 text-start text-[#141414] font-semibold"
                  />
                </div>
                <button className="hover:bg-[#ff0000] border-2 border-[#ff0000] text-white px-4 py-1  text-lg font-semibold rounded-full text-center">
                  Sign Up Here
                </button>
              </form>
            </div>
          </div>
          {/* Nelson Mandela */}
          <div className="relative gap-4 items-center px-10 rounded-xl flex-col mx-2 py-8 md:flex-row justify-center   flex md:mt-10 mb-32 md:w-[1000px] md:min-h-[200px]">
            <img
              src={nelson}
              alt="Nelson Mandela Statue"
              className="absolute inset-0 w-full h-full rounded-xl object-cover md:object-left object-left brightness-50"
            />
            <div className=" z-10 py-2 px-1   border-b-8 border-t-8 border-[#ff0000] rounded-xl backdrop-blur bg-white/10">
              <h3 className=" text-xl md:text-sm uppercase font-semibold text-white ">
                Perseverance
              </h3>
            </div>

            <div className="z-10 bg-white/10 text-white md:text-xs rounded-lg p-2 py-4 flex items-center backdrop-blur-sm">
              <h3>
                "Do not judge me by my successes, judge me by how many times I
                fell down and got back up again."
              </h3>
            </div>
            <div className="z-10 bg-white/10 md:py-4 p-2 text-white md:px-2 px-8  text-center rounded-lg backdrop-blur-sm flex items-center">
              <h2 className="md:text-sm text-2xl">Persist</h2>
            </div>
          </div>
          {/* Testimonials */}
          {/* Testimonial Mapping */}
          <h1 className="text-2xl font-semibold mt-24">TESTIMONIALS</h1>
          <p className="text-lg text-center w-[320px] md:w-full">
            Check Out What Our Customers Are Saying
          </p>
          <div className="grid md:grid-cols-4 gap-4 my-10 max-w-7xl">
            {testimonals.map((item, id) => (
              <div key={id}>
                <div className="flex flex-col space-y-6">
                  <div className="text-center  shadow-md rounded-lg shadow-black/10 max-w-[200px]">
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

          {/* Youth Empowermwnt */}
          {/* Youth Lives Matters */}
          <div className=" mx-4 group relative space-y-6 rounded-lg my-20 flex  flex-col text-center text-white items-center justify-center w-[330px] md:w-[1000px] h-[600px] md:h-[400px]">
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
              to="register"
              smooth={true}
              duration={100}
              className="p-4 md:text-xl text-center rounded-lg border-2  hover:bg-white duration-300 ease-in-out cursor-pointer hover:text-[#ff0000]"
            >
              START YOUR JOURNEY TODAY
            </Link>
          </div>

          {/* Hurry Up & Get Started today */}
          <div className="flex flex-col items-center space-y-3 mb-20">
            <p className="md:text-xs text-center">
              {" "}
              Are You Prepared To Bring Your Dream To Earth?
            </p>
            <h2 className="md:text-2xl text-xl font-semibold ">
              Hurry Up And Start Today
            </h2>
            <Link
              to="footer"
              duration={100}
              smooth={true}
              className="flex cursor-pointer items-center py-2 text-xl md:text-sm px-4 hover:px-6 duration-200 gap-2 font-bold rounded-full hover:text-white border-2 hover:bg-[#ff0000] hover:border-[#ff0000] border-black"
            >
              <IoMdCall />
              <h3 name="register">Join The Crew</h3>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CompanyRegistration;
