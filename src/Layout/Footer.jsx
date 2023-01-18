import React from "react";

const Footer = () => {
  return (
    <>
      <div className="wrapper pt-[60px] pb-5 mt-[50px] bg-black">
        <div className="contain flex-col justify-start items-center gap-5">
          <div className="flex xl:flex-row flex-col justify-between items-start w-full">
            <div className="flex justify-start items-start flex-col gap-5">
              <img
                src="/logo-footer.png"
                className="w-[150px] object-contain"
                alt=""
              />
              <p className="text-lg max-w-[360px] text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex justify-start items-center gap-4 mt-2">
                <img src="/fb.png" className="w-[30px] h-[30px]" alt="" />

                <img src="/insta.png" className="w-[30px] h-[30px]" alt="" />

                <img src="/twitter.png" className="w-[30px] h-[30px]" alt="" />

                <img src="/linkedin.png" className="w-[30px] h-[30px]" alt="" />
              </div>
            </div>
            <div className="flex pt-[30px] justify-start items-start flex-col gap-5">
              <h3 className="text-white font-bold text-xl">Business</h3>
              <a href="#" className="text-white text-base no-underline">
                Features
              </a>
              <a href="#" className="text-white text-base no-underline">
                Software Center
              </a>
              <a href="#" className="text-white text-base no-underline">
                Certified Consultant
              </a>
              <a href="#" className="text-white text-base no-underline">
                Customer Stories
              </a>
            </div>
            <div className="flex pt-[30px] justify-start items-start flex-col gap-5">
              <h3 className="text-white font-bold text-xl">Plans</h3>
              <a href="#" className="text-white text-base no-underline">
                Enterprise
              </a>
              <a href="#" className="text-white text-base no-underline">
                Personal
              </a>
              <a href="#" className="text-white text-base no-underline">
                Getting Started
              </a>
              <a href="#" className="text-white text-base no-underline">
                Business
              </a>
            </div>
            <div className="flex pt-[30px] justify-start items-start flex-col gap-5">
              <h3 className="text-white font-bold text-xl">Support</h3>
              <a href="#" className="text-white text-base no-underline">
                Help & uses
              </a>
              <a href="#" className="text-white text-base no-underline">
                Support
              </a>
              <a href="#" className="text-white text-base no-underline">
                Forum
              </a>
              <a href="#" className="text-white text-base no-underline">
                Developers
              </a>
            </div>
            <div className="flex pt-[30px] justify-start items-start flex-col gap-5">
              <h3 className="text-white font-bold text-xl">Company</h3>
              <a href="#" className="text-white text-base no-underline">
                Payment Method
              </a>
              <a href="#" className="text-white text-base no-underline">
                Cookie Policy
              </a>
              <a href="#" className="text-white text-base no-underline">
                Terms and conditions
              </a>
              <a href="#" className="text-white text-base no-underline">
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:gap-0 gap-2 justify-between lg:px-[40px] pt-[20px] mt-[40px] w-full items-center border-t-[1px] border-solid border-white">
            <p className="text-sm sm:text-lg text-white">
              © 2022 LIONSDEN REALTY All rights reserved.
            </p>
            <div className="flex  justify-start items-center">
              <p className="flex text-white text-lg justify-start items-center gap-2">
                {" "}
                Language: <span>English(US)</span>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 cursor-pointer">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
