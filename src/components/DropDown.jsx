import React, { useState } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <div className="relative flex items-center justify-center flex-col h-[50px] w-[200px]">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-[#141414] flex items-center font-semibold gap-2  p-2 px-4"
        >
          Services
          {!isOpen ? (
            <AiOutlineCaretDown className="h-4" />
          ) : (
            <AiOutlineCaretUp className="h-4 text-[#ff0000]" />
          )}
        </button>
        {isOpen && (
          <div className="absolute top-10   rounded-lg">
            <ul className="text-xs flex bg-white px-4 py-4 rounded-b-xl  flex-col items-center gap-4 my-6 text-[#141414]  ">
              <Link
                to="/companyRegistration"
                className=" hover:text-[#ff0000] duration-200 ease-in-out cursor-pointer"
              >
                Company Registration
              </Link>
              <Link
                to="/webdev"
                className=" hover:text-[#ff0000] duration-200 ease-in-out cursor-pointer"
              >
                Web Development
              </Link>
              <Link
                to="/businessCompliance"
                className=" hover:text-[#ff0000] duration-200 ease-in-out cursor-pointer"
              >
                Business Compliance
              </Link>
              <Link
                to="/digitalMarketing"
                className=" hover:text-[#ff0000] duration-200 ease-in-out cursor-pointer"
              >
                Digital Marketing
              </Link>
              <Link
                to="/businessCompliance"
                className=" hover:text-[#ff0000] duration-200 ease-in-out cursor-pointer"
              >
                Funding
              </Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDown;
