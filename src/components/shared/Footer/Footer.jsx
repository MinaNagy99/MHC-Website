import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import SocialMedia from "./SocialMedia/SocialMedia";

function Footer() {
  return (
    <>
      <div className="grid md:grid-cols-10 grid-cols-1 p-5 gap-y-5 bg-mainGold text-white">
        <div className="md:col-span-2 col-span-1 flex justify-center ">
          <img className="px-20" src="/images/logo.png" alt="" />
        </div>
        <div className="md:col-span-5 col-span-1 flex md:items-start items-center flex-col justify-center  ">
          <p className="text-sm">
            © 2024 Mosaic Holding Corporation , All rights reserved
          </p>
          <p className="text-lg md:text-start text-center font-semibold space-x-2">
            <Link to="/contact-us">Contact Us |</Link>
            <Link to="/privacy-policy">Privacy Policy |</Link>
            <Link to="/tearms-conditions">Terms & Conditions |</Link>
          </p>
        </div>
        <div className="md:col-span-3 col-span-1  justify-evenly  flex items-center">
          <SocialMedia />
        </div>
      </div>
    </>
  );
}

export default Footer;
