import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import compliance from "../assets/compliance.jpg";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { behindYou, requirements, typesOfGrands } from "../constants";
import nerson from "../assets/nerson.jpg";
import { IoMdCall } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-scroll";

const BusinessCompliance = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpens, setIsOpens] = useState(false);
  const [isOpenss, setIsOpenss] = useState(false);
  const [isOpensss, setIsOpensss] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const [isUp, setIsUp] = useState(false);
  const [isUps, setIsUps] = useState(false);
  const [isUpss, setIsUpss] = useState(false);
  const [isUpsss, setIsUpsss] = useState(false);

  return (
    <>
      <Navbar />
      <div className="max-w-full min-h-[500px] text-[#141414] bg-white font-sans ">
        <div className="relative max-w-full min-h-[500px] flex flex-col items-center justify-center ">
          {/* Bg Image */}
          <div className="absolute inset-0 ">
            <img
              src={compliance}
              alt="compliance"
              className="w-full h-full object-cover"
            />
          </div>
          {/* White Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-white to-white/80 z-10  "></div>

          <div className="z-20 flex flex-col items-center justify-center text-center">
            <p className="md:text-xs font-semibold">
              Following all applicable regulations and standards.
            </p>
            <h1 className="text-[#ff0000] mb-12  text-4xl font-bold text-center">
              Business Compliance
            </h1>
            <p className="md:text-xs text-[#ff0000] font-semibold max-w-xl text-center">
              TenderNet empowers South African entrepreneurs by helping them
              establish, grow, and sustain their businesses.
            </p>

            <Link
              to="funding"
              smooth={true}
              duration={100}
              className=" flex items-center space-x-4 text-lg font-semibold border-2 px-6 rounded-full border-[#ff0000] hover:text-white duration-200 ease-in-out cursor-pointer hover:tracking-wider  hover:bg-[#ff0000]   mt-10"
            >
              <h1 className="text-sm">Funding</h1>
              <FaArrowRightLong className="hover:rotate-90 duration-200 ease-in-out " />
            </Link>
          </div>
        </div>

        {/* SECOND */}
        <div className="flex flex-col items-center max-w-full min-h-screen justify-center">
          <div className="grid md:grid-cols-2 gap-4">
            {/* KEY ASPECTS OF COMPLIANCE */}
            <div className="flex flex-col items-center">
              <h1 className="md:text-xl text-2xl  text-center font-bold">
                Key Aspects of Compliance
              </h1>

              {/* Looping Key Aspects Of Compliance */}
              <div className="flex   flex-col md:space-y-1 space-y-6">
                {/*Risk Assessment: Open & Close */}
                <div className="relative flex items-center justify-center flex-col h-[80px] md:w-[800px] ">
                  <button
                    onClick={() => setIsOpens((prev) => !prev)}
                    className="text-[#ff0000] font-bold md:text-sm text-xl flex items-center gap-6 "
                  >
                    Risk Assessment
                    {!isOpen ? (
                      <AiOutlinePlusCircle className="h-4 text-[#ff0000]" />
                    ) : (
                      <AiOutlinePlusCircle className="h-4 text-[#ff0000]" />
                    )}
                  </button>
                  {isOpens && (
                    <div className="absolute top-16">
                      <p className="md:text-sm text-center max-w-[300px]">
                        Identifying potential compliance risks and developing
                        strategies to mitigate them.
                      </p>
                    </div>
                  )}
                </div>
                {/*Policies and Procedures: Open & Close */}
                <div className="relative flex items-center justify-center flex-col h-[80px] md:w-[800px]">
                  <button
                    onClick={() => setIsOpenss((prev) => !prev)}
                    className="text-[#ff0000] font-bold md:text-sm text-xl flex items-center gap-6 "
                  >
                    Policies and Procedures
                    {!isOpenss ? (
                      <AiOutlinePlusCircle className="h-4 text-[#ff0000]" />
                    ) : (
                      <AiOutlinePlusCircle className="h-4 text-[#ff0000]" />
                    )}
                  </button>
                  {isOpenss && (
                    <div className="absolute top-16">
                      <p className="md:text-sm max-w-[300px] text-center">
                        Creating clear guidelines and procedures to ensure
                        compliance.
                      </p>
                    </div>
                  )}
                </div>
                {/*Training and Education: Open & Close */}
                <div className="relative flex items-center justify-center flex-col h-[80px] md:w-[800px]">
                  <button
                    onClick={() => setIsOpensss((prev) => !prev)}
                    className="text-[#ff0000] font-bold md:text-sm text-xl flex items-center gap-6 "
                  >
                    Training and Education
                    {!isOpensss ? (
                      <AiOutlinePlusCircle className="h-4 text-[#ff0000]" />
                    ) : (
                      <AiOutlinePlusCircle className="h-4 text-[#ff0000]" />
                    )}
                  </button>
                  {isOpensss && (
                    <div className="absolute top-16">
                      <p className="md:text-sm max-w-[400px] text-center">
                        Providing employees with the necessary training to
                        understand and comply with regulations.
                      </p>
                    </div>
                  )}
                </div>
                {/*Understanding Regulations: Open & Close */}
                <div className="relative flex items-center justify-center flex-col h-[80px] md:w-[800px]">
                  <button
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="text-[#ff0000] font-bold md:text-sm text-xl flex items-center gap-6 "
                  >
                    Understanding Regulations
                    {!isOpen ? (
                      <AiOutlinePlusCircle className="h-4 text-[#ff0000]" />
                    ) : (
                      <AiOutlinePlusCircle className="h-4 text-[#ff0000]" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="absolute top-16">
                      <p className="md:text-sm max-w-[300px]  text-center">
                        Businesses must stay informed about the laws and
                        regulations that apply to their industry and operations.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              {" "}
              <h1 className="md:text-xl text-2xl mt-20 md:my-0  text-center font-bold">
                Why is Compliance Important?
              </h1>
              {/* Looping Why is Compliance Important? */}
              <div className="flex flex-col md:space-y-1 mb-10 space-y-6">
                {/*Legal Consequences: Open & Close */}
                <div className="relative flex items-center justify-center flex-col h-[80px] md:w-[800px]">
                  <button
                    onClick={() => setIsUp((prev) => !prev)}
                    className="text-[#ff0000] font-bold md:text-sm text-xl flex items-center gap-6 "
                  >
                    Legal Consequences
                    {!isUp ? (
                      <AiOutlinePlusCircle className="h-4 text-[#ff0000]" />
                    ) : (
                      <AiOutlinePlusCircle className="h-4 text-[#ff0000]" />
                    )}
                  </button>
                  {isUp && (
                    <div className="absolute top-16">
                      <p className="md:text-sm max-w-[300px] text-center">
                        Non-compliance can lead to fines, penalties, and even
                        legal action.
                      </p>
                    </div>
                  )}
                </div>
                {/*Reputation Damage: Open & Close */}
                <div className="relative flex items-center justify-center flex-col h-[80px] md:w-[800px]">
                  <button
                    onClick={() => setIsUps((prev) => !prev)}
                    className="text-[#ff0000] font-bold md:text-sm text-xl flex items-center gap-6 "
                  >
                    Reputation Damage
                    {!isUps ? (
                      <AiOutlinePlusCircle className="h-4 text-[#ff0000]" />
                    ) : (
                      <AiOutlinePlusCircle className="h-4 text-[#ff0000]" />
                    )}
                  </button>
                  {isUps && (
                    <div className="absolute top-16">
                      <p className="md:text-sm max-w-[400px] text-center">
                        Violations of regulations can tarnish a company's
                        reputation and damage customer trust.
                      </p>
                    </div>
                  )}
                </div>
                {/*Financial Loss: Open & Close */}
                <div className="relative flex items-center justify-center flex-col h-[80px] md:w-[800px]">
                  <button
                    onClick={() => setIsUpss((prev) => !prev)}
                    className="text-[#ff0000] font-bold md:text-sm text-xl flex items-center gap-6 "
                  >
                    Financial Loss
                    {!isUpss ? (
                      <AiOutlinePlusCircle className="h-4 text-[#ff0000]" />
                    ) : (
                      <AiOutlinePlusCircle className="h-4 text-[#ff0000]" />
                    )}
                  </button>
                  {isUpss && (
                    <div className="absolute top-16">
                      <p className="md:text-sm max-w-[400px] text-center">
                        Compliance failures can result in lost revenue,
                        increased costs, and potential business disruptions.
                      </p>
                    </div>
                  )}
                </div>
                {/*Understanding Regulations: Open & Close */}
                <div className="relative flex items-center justify-center flex-col h-[80px] md:w-[800px]">
                  <button
                    onClick={() => setIsUpsss((prev) => !prev)}
                    className="text-[#ff0000] font-bold md:text-sm  text-xl flex items-center  gap-6 "
                  >
                    Operational Efficiency
                    {!isUpsss ? (
                      <AiOutlinePlusCircle className="h-4 text-[#ff0000]" />
                    ) : (
                      <AiOutlinePlusCircle className="h-4 text-[#ff0000]" />
                    )}
                  </button>
                  {isUpsss && (
                    <div className="absolute top-16">
                      <p className="md:text-sm max-w-[400px] text-center">
                        Strong compliance practices can improve operational
                        efficiency and reduce risks.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* We're Behind You 100% */}
          <h1
            name="funding"
            className="text-center md:text-xl text-2xl font-bold mb-10 mt-20"
          >
            We're Behind You 100%
          </h1>
          <div className="flex md:flex-row flex-col gap-4 bg-[#323431]/10 p-4  rounded-lg mb-20 mx-4 text-center md:mx-10">
            {behindYou.map((item, id) => (
              <div key={id}>
                <div className="flex flex-col items-center space-y-3 justify-center">
                  <h1 className="font-bold text-xl  md:text-sm ">
                    {item.tittle}
                  </h1>
                  <p className="md:text-xs md:max-w-60">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Funding */}
          <h1 className="text-[#ff0000] mb-5  text-4xl font-bold text-center">
            Funding
          </h1>
          <p className="text-xl  text-center mb-5">
            These grants aim to promote economic growth, job creation, and
            entrepreneurship.
          </p>
          <div className="flex md:flex-row items-center justify-between flex-col gap-24 max-w-full mb-10 ">
            <div className="flex items-center justify-center flex-col shadow-md p-4 rounded-lg ">
              <h2 className="font-semibold text-xl text-[#ff0000] my-4">
                Types of Grands
              </h2>
              {/* Looping Types of Grands */}
              <div className="flex flex-col space-y-8 ">
                {typesOfGrands.map((item, id) => (
                  <div key={id}>
                    <div className="flex items-center text-sm md:text-xs py-2 font-semibold md:space-x-3 ">
                      <div>{item.point}</div>
                      <h2>{item.text}</h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center flex-col shadow-md p-4 rounded-lg">
              <h2 className="font-semibold  text-[#ff0000] text-xl my-4">
                Requirements
              </h2>
              {/* Looping Types of Grands */}
              <div className="flex flex-col space-y-8  ">
                {requirements.map((item, id) => (
                  <div key={id}>
                    <div className="flex items-center md:text-xs  py-2 font-semibold md:space-x-3 ">
                      <div>{item.point}</div>
                      <h2>{item.text}</h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Link
            to="apply"
            smooth={true}
            duration={100}
            className="flex items-center cursor-pointer justify-center px-16 duration-200 ease-in-out hover:text-white hover:bg-[#ff0000] py-2 text-2xl font-semibold rounded-full border-2 border-[#ff0000] mb-10"
          >
            Apply
          </Link>
        </div>

        {/* Neson Mandela */}
        {/*Nelson Mandela */}
        <div className="flex justify-center items-center my-10">
          <div className="relative gap-4 items-center px-10 rounded-xl flex-col mx-2 py-8 md:flex-row justify-center   flex md:mt-10 mb-32 md:w-[1000px] md:min-h-[200px]">
            <img
              src={nerson}
              alt="Nelson Mandela Statue"
              className="absolute inset-0 w-full h-full rounded-xl object-cover md:object-center object-right-bottom brightness-50"
            />
            <div className=" z-10 py-2 px-1   border-b-8 border-t-8 border-[#ff0000] rounded-xl backdrop-blur bg-white/10">
              <h3 className=" text-xl md:text-sm uppercase font-semibold text-white ">
                Leadership
              </h3>
            </div>

            <div className="z-10 bg-white/10 text-white md:text-xs rounded-lg p-2 py-4 flex items-center backdrop-blur-sm">
              <h3>
                "Lead from the back — and let others believe they are in front."
              </h3>
            </div>
            <div className="z-10 bg-white/10 md:py-4 p-2 text-white md:px-2 px-8  text-center rounded-lg backdrop-blur-sm flex items-center">
              <h2 className="md:text-sm text-2xl">Lead</h2>
            </div>
          </div>
        </div>

        {/* Hurry Up & Get Started today */}
        <div
          name="apply"
          className="flex flex-col items-center justify-center space-y-3 mb-20"
        >
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
            className="cursor-pointer  flex items-center justify-center py-2 text-xl md:text-sm px-4 hover:px-6 duration-200 gap-2 font-bold rounded-full hover:text-white border-2 hover:bg-[#ff0000] hover:border-[#ff0000] border-black"
          >
            <IoMdCall />
            <h3>Join The Crew</h3>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BusinessCompliance;
