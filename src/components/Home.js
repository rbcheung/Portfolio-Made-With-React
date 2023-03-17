import "../css/App.css";
import profilepic from "../Images/newPP.png";
import html from "../Images/html.png"
import css from "../Images/css.png"
import js from "../Images/javascript.png"
import node from "../Images/node.png";
import react from "../Images/react.png"


function Home() {
  return (
    <div id="home">
      <div className="container justify-content-center">
        <div className="row">
          <div className="col">
            <h1 id="home-name"> Ryan Cheung</h1>
            <p className="home-text">
              Hello my name is Ryan Cheung. I am an <span></span>
              <span className="highlight">
                aspiring Front-End Web Developer
              </span><span> </span>
              who is currently participating in the edX skills bootcamp in order
              to gain the skills necessary to transition myself into my first
              Web Development Role. If you like what you see, <span></span>
              <span className="highlight">please get in contact!</span>
            </p>
            <div className="list1">
            <ul></ul>
            <li>
              <img className="icons" src={html} alt="HTML Icon"></img>
            </li>
            <li>
              <img className="icons" src={css} alt="CSS Icon"></img>
            </li>
            <li>
              <img className="icons" src={js} alt="Javascript Icon"></img>
            </li>
            <li>
              <img className="icons" src={node} alt="Node JS icon"></img>
            </li>
            <li>
              <img className="icons" src={react} alt="React Icon"></img>
            </li>
            </div>
            <ul className="list2"></ul>
            <li className="list2">HTML</li>
            <li className="list2">CSS</li>
            <li className="list2">Javascript</li>
            <li className="list2">Node</li>
            <li className="list2">React</li>
          </div>

          <div className="col text-center">
            <img
              className="img-fluid hero-img btn-format"
              src={profilepic}
              alt="profilepic"
            ></img>
            <button className ="btn btn-danger"> Download </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
