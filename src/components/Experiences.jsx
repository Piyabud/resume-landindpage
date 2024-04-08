import React from "react";
import "./style-Experiences.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const jobExpList = [
  {
    id: 5,
    company: "Creden Asia Company Limited",
    position: "Software Developer (Full Stack)",
    years: "2023 - 2024",
  },
  {
    id: 1,
    company: "Apex One Agency",
    position: "Game Animator",
    years: "2022 - 2023",
  },
  {
    id: 2,
    company: "Motion X Studio",
    position: "Game Animator",
    years: "2020 - 2022",
  },
  {
    id: 3,
    company: "YGGdrazil Group Co.,LTD",
    position: "Character Animator",
    years: "2018 - 2020",
  },
  {
    id: 4,
    company: "RiFF Studio",
    position: "Character Animator",
    years: "2017",
  },
];

const EduList = [
  {
    id: 1,
    school: "TechUp Boot Camp Full-Stack developer",
    position: "develop in-Training",
    years: "2022 - 2023",
  },
  {
    id: 2,
    school: "Chiang Mai University",
    position:
      "Bachelor of Science – Animation, College of Arts, Media and Technology",
    years: "2020 - 2022",
  },
];

function Experiences() {
  return (
    <div
      id="experiences-id"
      className="experiences-page lg:px-[60px] lg:py-[20px]"
    >
      <div className="experiences-canvas">
        <div className="experiences--header flex justify-center">
          <h3></h3>
          <h1 className="mt-10">Experiences</h1>
        </div>
        <div className="experiences--info">
          <div id="education-id" className="jobs-detail">
            <h1>Education</h1>
            <ul className="">
              {EduList.map((item) => (
                <li className="" key={item.id}>
                  <div className="company">{item.school}</div>
                  <div className="position">{item.position}</div>
                  <div className="years">
                    <div className="icon-year">
                      <FontAwesomeIcon icon={faCalendarDays} />
                    </div>
                    {item.years}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="experiences--info">
          <div className="jobs-detail ">
            <h1>Jobs Experiences</h1>
            <ul>
              {jobExpList.map((item) => (
                <li key={item.id}>
                  <div className="company">{item.company}</div>
                  <div className="position">{item.position}</div>
                  <div className="years">
                    <div className="icon-year">
                      <FontAwesomeIcon icon={faCalendarDays} />
                    </div>
                    {item.years}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
