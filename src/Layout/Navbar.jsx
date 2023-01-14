import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { GrMenu } from "react-icons/gr";
const Navbar = () => {
  const [show, setshow] = useState(false);
  return (
    <>
      {/* Overlay */}
      {/* <div
        className={`${
          show ? "block" : "hidden"
        }  md:hidden absolute h-screen top left-0 w-full bg-black bg-opacity-70 z-[98]`}>
        {" "}
      </div> */}
      <main className="wrapper fixed top-0 z-[98] bg-white shadow-lg">
        <div className="contain h-28 items-center justify-between">
          <div>
            <img
              src="/logo.png"
              alt="logo"
              className="h-[77px] lg:h-auto max-w-[110px]"
            />
          </div>
          {/* Nav Items */}

          <ul
            className={`flex flex-col md:items-center md:flex-row md:gap-5 absolute md:static ${
              show ? "left-0" : "left-[-480px]"
            } bg-black h-screen top-0 md:bg-inherit text-white md:text-black w-full md:w-auto left-0 transition-all ease-out duration-[900ms]`}>
            <li className="md:my-auto cursor-pointer ">Home</li>
            <li className="md:my-auto cursor-pointer">Education</li>
            <li className="md:my-auto cursor-pointer">About</li>
            <li className="md:my-auto cursor-pointer">Contact</li>
          </ul>

          <div>
            <button className="btn-nav">Get an Offer</button>
          </div>
          <div onClick={() => setshow(true)} className={`md:hidden text-3xl`}>
            <GrMenu />
          </div>
        </div>
      </main>
      <div className="absolute top-2 z-[100] right-3 md:hidden">
        <span onClick={() => setshow(false)} className="text-4xl text-white ">
          <RxCross2 />
        </span>
      </div>
    </>
  );
};

export default Navbar;
