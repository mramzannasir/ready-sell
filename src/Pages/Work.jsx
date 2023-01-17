import React from "react";

const Work = () => {
  return (
    <>
      <main className="wrapper my-[90px] lg:my-[150px] xl:my-[170px]">
        <div className="contain flex-col gap-[20px] xl:gap-[100px] xl:flex-row justify-center items-center">
          <div>
            <img
              src="/works.png"
              className="w-full object-contain xl:max-w-[638px]"
              alt=""
            />
          </div>
          <div className="flex  flex-col w-full xl:max-w-[638px]">
            <div>
              <h1 className="headings text-center sm:text-left">
                How it works
              </h1>
            </div>
            <div>
              <p className="subtitle opacity-70  text-center sm:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore{" "}
              </p>
            </div>
            <div className="mt-2">
              <p className="text-lg font-semibold text-center sm:text-left">
                What you get from us!
              </p>
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
      </main>
    </>
  );
};

export default Work;
