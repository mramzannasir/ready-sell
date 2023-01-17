import React from "react";

const Contact = () => {
  return (
    <div className="wrapper">
      <div className="contain flex-col xl:flex-row justify-center  gap-[20px] xl:gap-[100px] items-center">
        <div>
          <img
            src="contact-img.png"
            className="w-[500px] hidden xl:block"
            alt=""
          />
        </div>
        <div className="">
          <form action="submit" className="box p-5  sm:p-[42px] flex flex-col">
            <h1 className="headings text-center xl:text-left">
              Send us a message
            </h1>
            <div className="w-full mt-6">
              <input
                type="text"
                placeholder="Enter your name"
                className="text-base outline-none w-full pl-4 h-[50px] xl:h-[60px] F-border"
              />
            </div>
            <div className="w-full my-4">
              <input
                type="text"
                placeholder="Enter your email address"
                className="text-base outline-none w-full pl-4 h-[50px] xl:h-[60px] F-border"
              />
            </div>
            <div className="w-full">
              <textarea
                rows={6}
                type="text"
                placeholder="Enter your email address"
                className="text-base outline-none w-full pl-4 pt-4 F-border"
              />
            </div>
            <button className="text-lg rounded-[110px] font-bold text-white bg-[#C58960] h-[60px]">
              Learn More
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
