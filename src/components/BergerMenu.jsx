import React, { useState } from "react";
// import "./stylePage/bergerMunu.css";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "About", url: "#about-me" },
  { id: 3, title: "Educations", url: "#education-id" },
  { id: 4, title: "Experiences", url: "#experiences-id" },
  { id: 5, title: "Portfolio", url: "#port" },
];

function downloadFileAtURL(url) {
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.target = "_blank";
  anchor.download = "piyabud_fullstack_resume.pdf";
  anchor.click();
}

function BergerMenu() {
  const [openMenu, setOpenMenu] = useState(false);
  const PDF_FILE_URL =
    "https://drive.google.com/file/d/1oWwyXYWBvFGF1CTtW1F8g60qx8hcAIWO/view?usp=sharing";
  return (
    <div>
      <img
        src={openMenu ? "/img/close.svg" : "/img/burger-menu.svg"}
        alt=""
        width={20}
        height={20}
        onClick={() => setOpenMenu(!openMenu)}
        className="cursor-pointer w-[30px] h-[30px]"
      />
      {openMenu && (
        <div
          className=" bg-[--orange-color] text-white 
        absolute top-[6rem] left-0  
        h-full w-full 
        flex flex-col gap-14 items-center justify-center 
        text-3xl z-10"
        >
          {links.map((item) => (
            <a href={item.url} key={item.id} onClick={() => setOpenMenu(false)}>
              {item.title}
            </a>
          ))}
          <button
            className="border-b-2"
            onClick={() => {
              downloadFileAtURL(PDF_FILE_URL);
            }}
          >
            Download Resume
          </button>
        </div>
      )}
    </div>
  );
}

export default BergerMenu;
