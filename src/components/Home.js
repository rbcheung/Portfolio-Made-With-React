import "../css/App.css";
import profilepic from "../Images/profilepic.jpg";

function Home() {
  return (
    <div id="home">
      <div className="container align-items-center justify-content-center">
        <div className="row">
          <div className="col-sm-2 col-md-2 col-lg-2"></div>

          <div className="col-sm-8 col-md-8 col-lg-8">
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-6">
                <h2 id="home-title"> Hi! My Name is Ryan 👋 </h2>
                <p class="home-text">
                  I am an aspiring Front-End Web Developer who is currently participating in the edX skills bootcamp in order to gain the skills needed to
                  transition myself into my first Web Developement Role. If you like what you see please get in contact!
                </p>
                <ul>Tech Stack</ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Node</li>
                <li>React</li>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6">
                <img
                  className="img-fluid hero-img"
                  src={profilepic}
                  alt="profilepic"
                ></img>
              </div>
            </div>
          </div>

          <div className="col-sm-2 col-md-2 col-lg-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
