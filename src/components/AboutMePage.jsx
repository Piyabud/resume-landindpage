import React from "react";
import "./style-aboutme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPhoneFlip,
  faEnvelope,
  faHeadphonesSimple,
  faBriefcase,
  faFileVideo,
  faChessKnight,
} from "@fortawesome/free-solid-svg-icons";
// import aboutImage from "./img/profileaboutme.svg";

function AboutMePage() {
  return (
    <div id="about-me" className="about-me-page p-[80px]">
      <div className="about-me-canvas ">
        <div className="user-img hidden lg:block">
          <img src="/img/profileaboutme.svg" alt="" loading="lazy" />
        </div>
        <div className="user-info">
          <p className="mb-4">My Intro</p>
          <p className="uppercase mb-4">About Me</p>
          <p className=" indent-9">
            My name is Piyabud Tapang (M), I have 6 months of experience as software develop (Full Stack) at Creden Asia Company Limited.
            I am proficient in HTML, CSS, JavaScript, Lua, Node.js, Express.js,
            MongoDB, PostgreSQL, Supabase, Git, and Cypress for testing
            programs. With a proven ability to perform under pressure, I excel
            at delivering results within tight deadlines.
          </p>
          <div className="contact">
            <table className="contact-table">
              <tbody>
                <tr>
                  <td>
                    <FontAwesomeIcon icon={faUser} />
                  </td>
                  <td>Name</td>
                  <td>:</td>
                  <td>Piyabud Tapang</td>
                </tr>
                <tr>
                  <td>
                    <FontAwesomeIcon icon={faPhoneFlip} />
                  </td>
                  <td>Phone</td>
                  <td>:</td>
                  <td>(+66)934-925-445</td>
                </tr>
                <tr>
                  <td>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </td>
                  <td>Email</td>
                  <td>:</td>
                  <td>t.piyabud@gmail.com</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMePage;
