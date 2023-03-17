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
    <div id="contact-form" className="container mt-5">
        <div className= "row g-3">
            <div className="col-md-6">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input type="text" className="form-control" id="firstName"></input>
            </div>
            <div className="col-md-6">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="lastName"></input>
            </div>
            <div className="col-md-8">
                <label htmlFor="email" className="form-label">E-mail</label>
                <input type="text" className="form-control" id="email"></input>
            </div>
            <div className="col-md-4">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input type="text" className="form-control" id="phone"></input>
            </div>
            <div className="col-md-12">
            <label htmlFor="comments" className="form-label">Comments</label>
            <textarea className="form-control" id="comments" rows="3"></textarea>
            </div>
            <div className="col-md-12">
                <button type="submit" className="btn btn=primary"> Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
