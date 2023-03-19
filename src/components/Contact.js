import React from "react";
import "../css/App.css";
import github from "../Images/github.png";
import linkedin from "../Images/linkedin.png";
import mail from "../Images/mail.png";
import cv from "../Images/cv.png";
// Use state imported to allow me to use the useState hook.
import { useState } from "react"

// contact function renders form and links for github repo, cv, linkedin, email etc.
function Contact() {
// setting the initial state as "Submit"
  const [value, setValue] = useState("Submit")
// function to change value from "Submit" to "Thank you. I'll be in touch soon" on button click.
  const handleBtn = () => {
    setValue("Thank you. I'll be in touch soon");
  };

  
  return (
    <div id="contact">
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <ul className="title"> Contact </ul>
            <li>
              <a href="https://github.com/rbcheung">
                <img
                  className="contact-icons"
                  src={github}
                  alt="Github Icon"
                ></img>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ryan-cheung-bab232159/">
                <img
                  className="contact-icons"
                  src={linkedin}
                  alt="LinkedIn Icon"
                ></img>
              </a>
            </li>
            <li>
              <a href="mailto:ryan_cheung@hotmail.co.uk">
                <img className="contact-icons" src={mail} alt="Mail Icon"></img>
              </a>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1zWR0VDPgkzG7Rtru1ql2Vk4BCeaD0MPq/view?usp=sharing">
                <img className="contact-icons" src={cv} alt="CV icon"></img>
              </a>
            </li>
          </div>
        </div>
      </div>
      <div id="contact-form" className="container mt-5">
        <div className="row g-3">
          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label"></label>
            <input
              type="text"
              className="form-control"
              placeholder="Your First Name"
              id="firstName"
              required
              />
          </div>
          <div className="col-md-6">
            <label htmlFor="lastName" className="form-label"></label>
            <input
              type="text"
              className="form-control"
              placeholder="Your Last Name"
              id="lastName"
              required
              />
          </div>
          <div className="col-md-8">
            <label htmlFor="email" className="form-label"></label>
            <input
              type="text"
              className="form-control"
              placeholder="Your Email address"
              id="email"
              required
              />
          </div>
          <div className="col-md-4">
            <label htmlFor="phone" className="form-label"></label>
            <input
              type="text"
              className="form-control"
              placeholder="Your Phone Number"
              id="phone"
              required />
          </div>
          <div className="col-md-12">
            <label htmlFor="comments" className="form-label"></label>
            <textarea
              placeholder="Your Message"
              className="form-control"
              id="comments"
              rows="3"
            ></textarea>
          </div>
          <div className="col-md-12">
            {/* on click method added to button to render the handlebtn function and change state */}
            <button type="submit" onClick= {handleBtn} className="btn btn=primary">
              {value}
            </button>
          </div>
        </div>
      </div>
      <div className="home-text container text-center">
        <div className="row">
          <div className="col">
            <p>
              {" "}
              Dont be shy! If you want to collaborate reach out to me by
              emailing{" "}
              <a href="mailto:ryan_cheung@hotmail.co.uk">
                ryan_cheung@hotmail.co.uk
              </a>{" "}
              or fill in the contact form and I'll get back to you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
