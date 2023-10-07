import React from "react";

function Homepage() {
  return (
    <div>
      <div className="bg-[--gray-color]  flex justify-center">
        <div className="profile h-full flex flex-col md:flex-row ">
          <div className="info p-8">
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
          </div>
          <div className="display-profile flex justify-center object-contain ">
            <img
              src="/img/profileDisplay.png"
              alt=""
              className="object-contain h-[500px] rounded-full  p-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
