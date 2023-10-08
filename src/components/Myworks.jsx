import React from "react";
import "./style-mywork.css";

const url = [
  {
    id: 1,
    title: "CourseFlow",
    url: "https://courseflow-bc8ion4is-piyabud.vercel.app/",
    img: "/img/courseflow.png",
  },
  {
    id: 2,
    title: "Food delivery",
    url: "https://food-delivery-app-sage.vercel.app/",
    img: "/img/pizza.png",
  },
  {
    id: 3,
    title: "To Do List",
    url: "https://to-do-app-list-beryl.vercel.app/",
    img: "/img/todo.png",
  },

  {
    id: 4,
    title: "Resume Landing Page",
    url: "https://resume-landindpage.vercel.app/",
    img: "/img/landing.png",
  },
];

function Myworks() {
  return (
    <div id="port">
      <div className="experiences--info">
        <div className="jobs-detail md:flex md:justify-center md:flex-col md:items-center">
          <h1>My Portfolio</h1>
          <ul className=" md:w-[600px]">
            {url.map((item) => (
              <div className="a shadow-lg" key={item.id}>
                <a className="" href={item.url} target="_blank">
                  <div className="company">{item.title}</div>
                  <div className="w-30">
                    <img src={item.img} alt="" />
                  </div>
                </a>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Myworks;
