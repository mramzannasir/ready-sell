import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { GrMenu } from "react-icons/gr";
import { Link } from "react-scroll";
const Navbar = () => {
  const [show, setshow] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
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
          <nav
            className={`flex navbar  flex-col md:items-center md:p-0 items-center pt-[10rem] gap-[50px] md:gap-5 lg:gap-[50px]  md:flex-row absolute md:static ${
              show ? "left-0" : "left-[-880px]"
            } bg-black h-screen top-0 md:bg-inherit  text-white md:text-black w-full text-lg font-normal md:w-auto left-0 transition-all  duration-1000`}>
            <Link
              className="relative cursor-pointer"
              activeClass="activeLink"
              to="home"
              spy={true}
              offset={-200}
              smooth={true}
              duration={1000}
              // onSetInactive={() => setActiveLink("")}
              onSetActive={() => setActiveLink("home")}
              onSetInactive={() => setActiveLink("")}
              onClick={() => setshow(false)}>
              {activeLink === "home" && (
                <span className="absolute hidden md:block left-0 top-[130%] bg-darkBrown rounded-xl h-[3px] w-full"></span>
              )}
              Home
            </Link>
            <Link
              activeClass="activeLink"
              className="relative cursor-pointer"
              to="Property"
              spy={true}
              offset={-200}
              smooth={true}
              duration={1000}
              onSetInactive={() => setActiveLink("")}
              onClick={() => setshow(false)}
              onSetActive={() => setActiveLink("service")}>
              {activeLink === "service" && (
                <span className="absolute hidden md:block left-0 top-[130%] bg-darkBrown rounded-xl h-[3px] w-full"></span>
              )}
              Property
            </Link>
            <Link
              activeClass="activeLink"
              className="relative cursor-pointer"
              to="refinance"
              spy={true}
              offset={-200}
              smooth={true}
              duration={1000}
              onSetInactive={() => setActiveLink("")}
              onClick={() => setshow(false)}
              onSetActive={() => setActiveLink("refinance")}>
              {activeLink === "refinance" && (
                <span className="absolute hidden md:block left-0 top-[130%] bg-darkBrown rounded-xl h-[3px] w-full"></span>
              )}
              Refinance
            </Link>
            <li
              className="md:my-auto cursor-pointer list-none text-white
             md:text-black text-lg font-medium ">
              Loan
            </li>
          </nav>
          <div>
            <button className="btn-nav">Get an Offer</button>
          </div>
          <div onClick={() => setshow(true)} className={`md:hidden text-3xl`}>
            <GrMenu />
          </div>
        </div>
        <div className="absolute top-2 z-[100] right-3 md:hidden">
          <span onClick={() => setshow(false)} className="text-4xl text-white ">
            <RxCross2 />
          </span>
        </div>
      </main>
    </>
  );
};

export default Navbar;
