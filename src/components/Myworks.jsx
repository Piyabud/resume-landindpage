import React from "react";
import "./style-mywork.css";

const url = [
  {
    id: 1,
    title: "CourseFlow",
    url: "https://courseflow-bc8ion4is-piyabud.vercel.app/",
    img: "../../public/img/courseflow.png",
  },

  {
    id: 2,
    title: "To Do List",
    url: "https://to-do-app-list-beryl.vercel.app/",
    img: "../../public/img/todo.png",
  },
  {
    id: 3,
    title: "Food delivery",
    url: "https://food-delivery-app-sage.vercel.app/",
    img: "../../public/img/pizza.png",
  },
  {
    id: 4,
    title: "Resume Landing Page",
    url: "https://resume-landing-page-6jdrpa0wj-piyabud.vercel.app/",
    img: "../../public/img/landing.png",
  },
];

function Myworks() {
  return (
    <div>
      <div className="experiences--info">
        <div className="jobs-detail">
          <h1>My Portfolio</h1>
          <ul className="">
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
