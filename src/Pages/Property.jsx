import React from "react";

const Property = () => {
  return (
    <div
      id="Property"
      className="wrapper bg-lightBrown py-[50px] md:py-[120px]">
      <div className="contain flex flex-col xl:flex-row justify-between items-center gap-12 xl:gap-4">
        <div className="max-w-[800px] grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-7">
          <div className="flex gap-2 justify-start p-5 bg-brownGr mborder">
            <img src="/proper-1.png" className="h-[32px]" alt="" />
            <div className="flex flex-col w-full">
              <h1 className="text-lg font-semibold text-[#AF6B3C] md:text-[22px] md:leading-8">
                Best real-estate solutions
              </h1>
              <p className="text-[#AF6B3C] text-[15px] leading-7 font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
            </div>
          </div>
          <div className="flex gap-2 justify-start p-5 ">
            <img src="/proper-2.png" className="h-[32px]" alt="" />
            <div className="flex flex-col w-full">
              <h1 className="text-lg font-semibold md:text-[22px] md:leading-8">
                Best Homes
              </h1>
              <p className=" text-[15px] leading-7 font-normal opacity-70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
            </div>
          </div>
          <div className="flex gap-2 justify-start p-5 ">
            <img src="/proper-3.png" className="h-[32px]" alt="" />
            <div className="flex flex-col w-full">
              <h1 className="text-lg font-semibold  md:text-[22px] md:leading-8">
                Best Prices
              </h1>
              <p className="opacity-70 text-[15px] leading-7 font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
            </div>
          </div>
          <div className="flex gap-2 justify-start p-5">
            <img src="/proper-4.png" className="h-[32px]" alt="" />
            <div className="flex flex-col w-full">
              <h1 className="text-lg font-semibold  md:text-[22px] md:leading-8">
                Best Services
              </h1>
              <p className="opacity-70 text-[15px] leading-7 font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[520px] flex flex-col w-full">
          <div>
            <h1 className="text-[35px] font-bold leading-10 md:text-[42px] text-center md:text-left">
              Sell Your Property with us!
            </h1>
          </div>
          <div>
            <p className="my-2 md:my-3 opacity-70 text-lg text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur. Est dolor ut eu nec
              gravida adipiscing maecenas. Sed nullam sodales nunc posuere amet
              ut. Eu non egestas morbi velit eleifend commodo. Id eu etiam
              libero habitasse.
            </p>
          </div>
          <div className="flex w-full justify-center md:justify-start">
            <button className="bg-[#C58960] text-white w-[198px] h-[48px] rounded-[120px]">
              Get an offer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
