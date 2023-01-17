import React from "react";

const Service = () => {
  return (
    <div
      id="service"
      className="wrapper bg-lightBrown mt-[120px] lg:mt-[168px]  py-[60px] md:py-[120px] xl:py-[130px]">
      <div className="contain flex-col">
        <div className="flex w-full flex-col justify-center items-center ">
          <h1 className="headings text-center">Our Services</h1>
          <p className="subtitle 2xl:mt-4 text-center max-w-[800px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
            consectetur adipiscing elit
          </p>
        </div>
        {/* _____________________Card____________________________ */}
        <div className="flex justify-between items-stretch gap-8 xl:gap-0 flex-col lg:flex-row mt-5 lg:mt-20 transition-all duration-700">
          <div className="px-5 py-[44px]  flex flex-col justify-start items-center cursor-pointer  transition-all duration-700  gap-5">
            <img src="/home-1.png" className="h-[85px] object-contain" alt="" />
            <h1 className="text-center text-lg lg:text-[22px] my-2 lg:my-3 font-bold">
              Sell your property
            </h1>
            <p className="text-[16px] font-normal text-center leading-[28px] opacity-70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore{" "}
            </p>
          </div>
          <div className="px-5 py-[44px] myborder  flex flex-col justify-start items-center cursor-pointer bord bg-brownGr transition-all duration-700 gap-5">
            <img src="/home-2.png" className="h-[85px] object-contain" alt="" />
            <h1 className="text-center text-lg lg:text-[22px] my-2 lg:my-3 font-bold text-[#AF6B3C]">
              Refinance your property
            </h1>
            <p className="text-[16px] font-normal text-center text-[#AF6B3C] leading-[28px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
            <button className="rounded-[60px] mt-3 text-white bg-[#C58960]  w-[217px] h-[50px]">
              Get an offer
            </button>
          </div>
          <div className="px-5 py-[44px] flex flex-col justify-start items-center cursor-pointer transition-all duration-700 gap-5">
            <img src="/home-3.png" className="h-[85px] object-contain" alt="" />
            <h1 className="text-center text-lg lg:text-[22px] my-2 lg:my-3 font-bold">
              Fund a project (Basically a loan)
            </h1>
            <p className="text-[16px] font-normal text-center leading-[28px]  opacity-70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
