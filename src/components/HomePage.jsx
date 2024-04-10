import React, { useState } from "react";
import "./style-homePage.css";

function downloadFileAtURL(url) {
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.target = "_blank";
  anchor.download = "piyabud_fullstack_resume.pdf";
  anchor.click();
}

function Homepage() {
  const [openMenu, setOpenMenu] = useState(false);
  const PDF_FILE_URL =
    "https://drive.google.com/file/d/1a-UYK-Q6EnQjowGlUL-hfHjzLgpJlVKb/view?usp=sharing";
  return (
    <div>
      <div className="bg-[--gray-color]  flex justify-center">
        <div className="profile ">
          <div className="info">
            <div className="greeting text-[30px] font-[500] text-[--orange-color] mb-4">
              Hi, I am
            </div>
            <div className=" fullName text-4xl font-extrabold text-[--blue1-color] font-[font-akira] mb-2 ">
              Piyabud Tapang
            </div>
            <div className="role text-2xl text-[--blue2-color] font-extrabold font-rubik mb-4 ">
              Full Stack Developer
            </div>
            <div className="description text-4.5xl font-normal text-[--font-color] ">
              based in Bangkok, thailand I’am coding with a clean and beautiful
              problem solving in mind.
            </div>
            <button
              className="hidden md:block "
              onClick={() => {
                downloadFileAtURL(PDF_FILE_URL);
              }}
            >
              Download CV
            </button>
          </div>
          <div className="display-profile flex justify-center object-contain ">
            <img
              src="/img/profileDisplay.png"
              alt=""
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
