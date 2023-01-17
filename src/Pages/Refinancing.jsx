import React from "react";

const Refinancing = () => {
  return (
    <div id="refinance" className="wrapper my-[80px] xl:my-[112px]">
      <div className="contain flex-col lg:flex-row gap-[20px] xl:gap-[100px] justify-center items-center">
        <div className="flex flex-col w-full xl:max-w-[640px]">
          <h1 className="headings text-center leading-10 sm:text-left">
            Need Refinancing or a loan?
          </h1>
          <div>
            <p className="mt-1 subtitles opacity-70  text-center sm:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore{" "}
            </p>
            <div className="my-3">
              <h1 className="text-lg font-semibold  text-center sm:text-left">
                What you get from us!
              </h1>
            </div>
            <div className="my-3">
              <p className="text-lg font-semibold text-center sm:text-left">
                Quick quote
                <br />
                Local service technicians <br /> Residential and commercial
                projects
              </p>
            </div>
            <div className="mt-2">
              <p className="subtitle opacity-70  text-center sm:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore
              </p>
            </div>
            <div className="flex w-full justify-center md:justify-start mt-2">
              <button className="w-[211px] h-[50px] font-semibold text-lg text-white bg-[#C58960] rounded-[130px]">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div>
          <img src="/raf-img.png" className="lg:max-w-[540px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Refinancing;
