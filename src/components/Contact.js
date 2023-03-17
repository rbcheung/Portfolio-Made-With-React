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
              <img
                className="contact-icons"
                src={github}
                alt="Github Icon"
              ></img>
            </li>
            <li>
              <img
                className="contact-icons"
                src={linkedin}
                alt="LinkedIn Icon"
              ></img>
            </li>
            <li>
              <img className="contact-icons" src={mail} alt="Mail Icon"></img>
            </li>
            <li>
              <img className="contact-icons" src={cv} alt="CV icon"></img>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
