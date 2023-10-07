import React, { useState } from "react";
import BergerMenu from "./BergerMenu";
// import "./stylePage/style-topNav.css";

function TopNav() {
  return (
    <div className="h-24 flex justify-between items-center px-4 py-2 ">
      {/* LOGO */}
      <div className="">
        <img src="../../public/img/logo.png" alt="logo" className=" h-[50px]" />
      </div>

      {/* RIGHT Nav */}
      <div className="md:hidden">
        {/* BERGER */}
        <BergerMenu />
      </div>
      {/* BTN GRP */}
      <div className="hidden">sss</div>
    </div>
  );
}

export default TopNav;
