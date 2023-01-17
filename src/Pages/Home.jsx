import React from "react";
const Home = () => {
  return (
    <>
      <div id="home" className="wrapper mt-40 lg:mt-48">
        <div className="contain  ">
          <div className="flex w-full flex-col lg:flex-row items-center gap-[40px] md:gap-6">
            {/*_______________________________________________________Text_Section_______________________________________________________________*/}
            <div className="flex flex-col  max-w-[630px]">
              <div>
                {" "}
                <h1
                  className="text-center lg:text-left text-[35px] font-extrabold
                 md:text-[55px] 2xl:text-[67px]">
                  Ready, set, sold.
                </h1>
              </div>
              <div className="my-4 md:my-6">
                <p className="subtitle text-center lg:text-left">
                  It’s never been easier than with Hubster. Get a cash offer
                  today. No Fees. No Commissions. No Repairs.
                </p>
              </div>
              {/* Search  */}
              <div className="w-full flex flex-col ">
                <div className="mb-2">
                  <h1 className="text-black text-lg sm:text-[24px] font-semibold">
                    Enter your Home Address
                  </h1>
                </div>
                <div className="flex justify-start items-center gap-3 bg-white border-[1px] border-solid border-[#C58960] rounded-full w-full max-w-[532px] h-[70px] px-3">
                  <img
                    src="location.png"
                    className="w-[32px] object-contain"
                    alt=""
                  />
                  <input
                    type="text"
                    className="border-0 h-full w-full outline-0 text-black text-lg"
                    placeholder="Search by address"
                  />
                  <button className="rounded-full min-w-[120px] sm:min-w-[150px] xl:min-w-[200px] h-[40px] sm:h-[50px] bg-[#C58960] text-white border-[1px] border-solid border-[#C58960] hover:bg-inherit cursor-pointer transition-all duration-300 text-sm sm:text-lg font-bold hover:text-[#C58960] ">
                    Get an Offer
                  </button>
                </div>
              </div>
            </div>
            {/* Image Sections */}
            <div>
              <img src="/banner-img.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
