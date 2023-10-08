import React, { useState } from "react";
import BergerMenu from "./BergerMenu";
import "./style-topNav.css";

function TopNav() {
  return (
    <div
      className="topnav-con"
    >
      <div className="canvas-topnav">
        {/* LOGO */}
        <div className="logo-box">
          <img
            src="/img/logo.png"
            alt="logo"
            className="h-[70px] md:h-[80px]"
          />
        </div>

        {/* RIGHT Nav */}
        <div className="md:hidden">
          {/* BERGER */}
          <BergerMenu />
        </div>
        {/* BTN GRP */}
        <div className="btn-box hidden md:block ">
          <a href="">Home</a>
          <a href="#about-me">About</a>
          <a href="#experiences-id">Experiences</a>
          <a href="#footer-id" className="contact-me ">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
