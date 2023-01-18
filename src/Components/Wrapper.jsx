import React from "react";
import Client from "../Pages/Client";
import Contact from "../Pages/Contact";
import Faq from "../Pages/Faq";
import Home from "../Pages/Home";
import Property from "../Pages/Property";
import Refinancing from "../Pages/Refinancing";
import Service from "../Pages/Service";
import Work from "../Pages/Work";
import { Data } from "../assets/Data";

const Wrapper = () => {
  return (
    <>
      <div>
        <Home />
        <Service />
        <Work />
        <Property />
        <Refinancing />
        <Client />
        <Faq />
        <Contact />
      </div>
    </>
  );
};

export default Wrapper;
