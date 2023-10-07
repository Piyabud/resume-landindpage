import React, { useState, useEffect } from "react";
import "./style-footer.css";
import githubImage from "../../public/img/icons/github.svg";
import linkedImage from "../../public/img/icons/linked.svg";
import discordImage from "../../public/img/icons/discord.svg";
import mailImage from "../../public/img/icons/mail.svg";
import phoneImage from "../../public/img/icons/phone.svg";
import SnackBar from "./SnackBar.jsx";

function Footer() {
  const phoneNumber = "0934925445";
  const emailAddress = "t.piyabud@gmail.com";
  const textToCopy = "mpiyubz"; // Replace this with the actual text you want to copy

  const copyToClipboard = () => {
    const el = document.createElement("textarea");
    el.value = textToCopy;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    displaySnackbar("Copy discord username  🎉 ", "success");
  };

  function displaySnackbar(message, status) {
    setOpenSnackBar(false);
    setSnackbarMes(message);
    setSnackbarStatus(status);
    setOpenSnackBar(true);
  }
  const [openSnackbar, setOpenSnackBar] = useState(false);
  const [snackBarMes, setSnackbarMes] = useState("");
  const [snackbarStatus, setSnackbarStatus] = useState("");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackBar(false);
  };
  return (
    <>
      {" "}
      <SnackBar
        open={openSnackbar}
        onClose={handleClose}
        severity={snackbarStatus}
        message={snackBarMes}
      />
      <div id="footer-id" className="footer-container">
        <div className="footer-canvas">
          <div className="github">
            <a
              href="https://github.com/Piyabud"
              target="_blank"
              className="icon"
            >
              <img src={githubImage} alt="" loading="lazy" />
            </a>
            <div className="title-icon">GitHub</div>
          </div>
          <div className="linkedln">
            <a
              href="https://www.linkedin.com/in/piyabud-tapang-820287151/"
              target="_blank"
              className="icon"
            >
              <img src={linkedImage} alt="" loading="lazy" />
            </a>
            <div className="title-icon">Linkedln</div>
          </div>
          <div className="mail">
            <a className="icon">
              <img
                src={discordImage}
                alt=""
                onClick={copyToClipboard}
                loading="lazy"
              />
            </a>
            <div className="title-icon">Discord</div>
          </div>
          <div className="discord">
            <a href={`mailto:${emailAddress}`} target="_blank" className="icon">
              <img src={mailImage} alt="" loading="lazy" />
            </a>
            <div className="title-icon">Mail</div>
          </div>
          <div className="Phone">
            <a href={`tel:${phoneNumber}`} className="icon">
              <img src={phoneImage} alt="" loading="lazy" />
            </a>
            <div className="title-icon">Phone</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
