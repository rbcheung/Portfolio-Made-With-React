import React from "react";
import "../css/App.css";
import github from "../Images/github.png";
import linkedin from "../Images/linkedin.png";
import mail from "../Images/mail.png";
import cv from "../Images/cv.png";

function Contact() {
  return (
    <div id="contact">
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <ul className="title"> Contact </ul>
            <li>
              <a href="https://github.com/rbcheung"><img
                className="contact-icons"
                src={github}
                alt="Github Icon"
              ></img></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ryan-cheung-bab232159/"><img
                className="contact-icons"
                src={linkedin}
                alt="LinkedIn Icon"
              ></img></a>
            </li>
            <li>
              <a href="mailto:ryan_cheung@hotmail.co.uk"><img className="contact-icons" src={mail} alt="Mail Icon"></img></a>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1qeOvHQQ-ZDfuw8MIUKox95NkU_qGsd-X/view?usp=sharing"><img className="contact-icons" src={cv} alt="CV icon"></img></a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
