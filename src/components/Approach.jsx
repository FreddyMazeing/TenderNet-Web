import React from "react";
import { approach, skilledPersonnels } from "../constants";
import nelsonmandela from "../assets/nelsonmandela.jpg";
import { Link } from "react-scroll";

const Approach = () => {
  return (
    <div className="md:max-w-full  min-h-screen bg-white text-[#141414] ">
      <div className="max-w-full min-h-screen flex flex-col items-center justify-center">
        <h2 className=" my-6 md:text-4xl w-[320px] md:w-5/6 text-2xl text-center">
          Why You Should Choose TenderNet(Pty)Ltd?
        </h2>
        <p className="text-lg mb-10 md:w-2/5 w-[320px] text-center">
          Ten<span className="text-[#ff0000]">d</span>erNet consists of
          experienced individuals who are eager to carry you until you're listed
          in <span className="text-[#ff0000]">Africa Forbes</span>.
        </p>

        <h3 className="text-2xl text-[#ff0000] my-4">Our Approach</h3>
        {/* Mapping Approach Section*/}
        <div
          className=" grid md:grid-cols-5 gap-6
        mx-6 "
        >
          {approach.map((item, id) => (
            <div key={id}>
              <div className=" flex flex-col space-y-4 font-sans font-semibold text-sm">
                {/* Heading */}
                <div className="flex  items-center justify-around mt-6">
                  <h2 className="md:text-sm text-2xl ">{item.heading}</h2>
                </div>
                {/* Div Containng bgImage, Tittles, Descriptions & Button */}
                <div className="flex flex-col rounded-xl   shadow-lg shadow-black/10 ">
                  <img
                    src={item.backgroundImage}
                    alt="background image"
                    className="opacity-80  hover:contrast-150 hover:brightness-110 rounded-t-lg h-20 object-cover duration-300 ease-in-out hover:object-left-bottom  "
                  />

                  <div className="flex flex-col items-center md:mx-4 mx-8 my-10">
                    {/* First Tittle & description */}
                    <div className="flex flex-col items-center ">
                      <h1 className="md:text-xs text-center text-xl">
                        {item.fistTittle}
                      </h1>
                      <h2 className="md:text-xs text-center  font-light">
                        {item.firstDescription}
                      </h2>
                    </div>
                    {/* Second Tittle & description */}
                    <div className="flex flex-col items-center my-6">
                      <h1 className="md:text-xs text-center text-xl">
                        {item.secondTittle}
                      </h1>
                      <h2 className="md:text-xs text-lg text-center font-light">
                        {item.secondDescription}
                      </h2>
                    </div>

                    {/* Second Tittle & description */}
                    <div className="flex flex-col items-center my-6">
                      <h1 className="md:text-xs text-center text-xl">
                        {item.thirdTittle}
                      </h1>
                      <h2 className="md:text-xs text-lg text-center font-light">
                        {item.thirdDescription}
                      </h2>
                    </div>

                    {/* Button */}
                    <Link
                      to="footer"
                      duration={100}
                      smooth={true}
                      className="text-lg text-center cursor-pointer   md:text-sm text-[#ff0000] hover:bg-[#ff0000] hover:text-white duration-300 ease-in-out shadow-md shadow-red-600/10 py-2 w-[200px] rounded-full"
                    >
                      {item.button}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Skilled Personel At Tendernet Ltd */}
        <div className="flex flex-col items-center py-10 space-y-4">
          <h1 className="font-semibold text-2xl text-center w-[320px] md:w-1/2">
            Skilled Personnels At Ten<span className="text-[#ff0000]">d</span>
            erNet(Pty)Ltd
          </h1>
          <p className="md:text-xs w-[320px] md:w-3/5 text-center text-lg mx-2 font-semibold">
            Our skilled team specializes in{" "}
            <span className="text-[#ff0000]">
              Company Registration,Web development,Business Compliance, Digital
              Marketing,
            </span>{" "}
            and <span className="text-[#ff0000]">Funding</span>. We deliver
            results for your business.
          </p>
          {/* Mapping of Skilled Guys At TenderNet */}
          <div className="grid md:grid-cols-3 gap-6">
            {skilledPersonnels.map((item, id) => (
              <div key={id}>
                <div className="flex   gap-4">
                  <img src={item.icon} alt="icon" className="w-10 h-10" />
                  <div className="flex flex-col">
                    <h1 className="text-[#ff0000] text-2xl">{item.tittle}</h1>
                    <ul className="md:text-xs mt-1  font-semibold ">
                      <div className="flex space-x-2 my-4 items-center">
                        {item.icon2}
                        <li>{item.l1}</li>
                      </div>
                      <div className="flex space-x-2 my-4  items-center">
                        {item.icon2}
                        <li>{item.l2}</li>
                      </div>
                      <div className="flex space-x-2 my-4  items-center">
                        {item.icon2}
                        <li>{item.l3}</li>
                      </div>
                      <div className="flex space-x-2 my-4  items-center">
                        {item.icon2}
                        <li>{item.l4}</li>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/*Nelson Mandela */}
        <div className="relative  gap-4 items-center px-10 rounded-xl flex-col mx-2 py-8 md:flex-row justify-center   flex md:mt-10 mb-32 w-[320px] md:w-[1000px] md:min-h-[200px]">
          <img
            src={nelsonmandela}
            alt="Nelson Mandela Statue"
            className="absolute inset-0 w-full h-full rounded-xl object-cover md:object-center object-left-top brightness-50"
          />
          <div className=" z-10 py-2 px-1   border-b-8 border-t-8 border-[#ff0000] rounded-xl backdrop-blur bg-white/10">
            <h3 className=" text-xl md:text-sm uppercase font-semibold text-white ">
              Visionary
            </h3>
          </div>

          <div className="z-10 bg-white/10 text-white md:text-xs rounded-lg p-2 py-4 flex items-center backdrop-blur-sm">
            <h3>
              "Vision without action is just a dream, action without vision just
              passes the time, and vision with action can change the world."
            </h3>
          </div>
          <div className="z-10 bg-white/10 md:py-4 p-2 text-white md:px-2 px-8  text-center rounded-lg backdrop-blur-sm flex items-center">
            <h2 className="md:text-sm text-2xl">Act</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;
