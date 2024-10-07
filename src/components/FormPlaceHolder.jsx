import React from "react";

const FormPlaceHolder = () => {
  return (
    <div>
      <div className="flex flex-col bg-[#ff0000]/10  shadow-md shadow-black/20 backdrop-blur-xl md:px-10 rounded-3xl   z-20 py-10 my-20">
        <div className="flex items-center justify-center mb-10">
          <img src={tendernetlogo} alt="TenderNet Logo" className="w-32 " />
        </div>
        <form
          action="https://getform.io/f/aqonznga"
          method="POST"
          encType="multipart/form-data"
          className="flex flex-col w-[400px]   items-center space-y-6 "
        >
          {/* Second Name  */}
          <div className="flex gap-2 px-8 flex-col items-start   rounded-xl text-[#141414]">
            <label htmlFor="" className="font-semibold">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              className="bg-white shadow-black/10  shadow-md rounded-lg py-2 px-8 text-center   font-bold"
            />
          </div>
          {/* Email */}
          <div className="flex gap-2 px-8 flex-col items-start   rounded-xl text-[#141414]">
            <label htmlFor="" className="font-semibold">
              Email
            </label>
            <input
              type="text"
              name="email"
              className="bg-white shadow-black/10  shadow-md rounded-lg px-8 py-2 text-center   font-bold"
            />
          </div>
          {/* Phone No */}
          <div className="flex gap-2 px-8 flex-col items-start    rounded-xl text-[#141414]">
            <label htmlFor="" className="font-semibold">
              Phone No.
            </label>
            <input
              type="number"
              name="phone "
              className="bg-white shadow-black/10  shadow-md rounded-lg px-8 py-2 text-center   font-bold"
            />
          </div>

          {/* Business Address */}
          <div className="flex gap-2 px-8 flex-col items-start    rounded-xl text-[#141414]">
            <label htmlFor="" className="font-semibold">
              Business Address
            </label>
            <input
              type="text"
              name="address"
              className="bg-white shadow-black/10  shadow-md rounded-lg px-8 py-2 text-center   font-bold"
            />
          </div>

          {/* Describe The Service  */}
          <div className="flex gap-2 px-8 flex-col items-center    rounded-xl text-[#141414]">
            <label htmlFor="" className="font-semibold">
              Description
            </label>
            <textarea
              name="message"
              className="bg-white shadow-black/10  shadow-md rounded-lg px-20   text-start py-4   "
            />
          </div>
          <div className="flex items-start justify-center px-6 mx-10  my-10 text-[#ff0000] text-lg hover:bg-[#ff0000] duration-200 ease-in-out    hover:text-white  font-semibold  shadow-black/30  shadow-md py-2 rounded-xl">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPlaceHolder;
