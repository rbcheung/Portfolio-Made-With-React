import '../css/App.css';
import weatherDash from '../Images/WeatherDash.png'
import superHero from '../Images/SuperH.png'
import PassGen from '../Images/Password-Generator.png'
import PlannerApp from '../Images/Planner-App.png'
import TeamGen from '../Images/TeamGen.png'
import CodingQuiz from '../Images/Coding-Quiz.png'


function ProjectsPage() {
  return (
    <div className="container" id="work">
      <h2>Work Gallery</h2>
      <div className="row">
        <div className="col-10 col-sm-6 col-md-6 col-lg-6">
          <div className="card">
            <img src={superHero} className="card-img-top" alt="screenshot of LED Wall App website"></img>
            <div className="card-body">
              <h5 className="card-title">SuperHero API</h5>
              <p className="card-text">This app allows you to search for your favourite superheros and save them into a list! </p>
              <a href="#" className="btn btn-primary">Go to project</a>
            </div>
          </div>
        </div>
        <div className="col-10 col-sm-6 col-md-6 col-lg-6">
          <div className="card">
            <img src={weatherDash} className="card-img-top projimg" alt="screenshot of calculator app website"></img>
            <div className="card-body">
              <h5 className="card-title">Weather Dashboard API</h5>
              <p className="card-text">This app allows you to search a weather in specific areas and also get a 5 day weather forecast to plan around!</p>
              <a href="#" className="btn btn-primary">Go to project</a>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-10 col-sm-6 col-md-6 col-lg-6">
          <div className="card">
            <img src={TeamGen} className="card-img-top projimg" alt="screenshot of LED Wall App website"></img>
            <div className="card-body">
              <h5 className="card-title">Team-Profile-Generator</h5>
              <p className="card-text">This command-line app generates a team based on user input using node js! </p>
              <a href="#" className="btn btn-primary">Go to project</a>
            </div>
          </div>
        </div>
        <div className="col-10 col-sm-6 col-md-6 col-lg-6">
          <div className="card">
            <img src={PlannerApp} className="card-img-top projimg" alt="screenshot of calculator app website"></img>
            <div className="card-body">
              <h5 className="card-title">Planner App</h5>
              <p className="card-text">This app alows you to schedule appointments using local storage and moment js!</p>
              <a href="#" className="btn btn-primary">Go to project</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10 col-sm-6 col-md-6 col-lg-6">
          <div className="card">
            <img src={PassGen} className="card-img-top projimg" alt="screenshot of LED Wall App website"></img>
            <div className="card-body">
              <h5 className="card-title">Password Generator </h5>
              <p className="card-text">This app allows you to create a strong password to use for all your internet activity!</p>
              <a href="#" className="btn btn-primary">Go to project</a>
            </div>
          </div>
        </div>
        <div className="col-10 col-sm-6 col-md-6 col-lg-6">
          <div className="card">
            <img src={CodingQuiz} className="card-img-top projimg" alt="screenshot of calculator app website"></img>
            <div className="card-body">
              <h5 className="card-title">Calculator App</h5>
              <p className="card-text">This is a quiz to test your coding knowledge! highscores can be saved!</p>
              <a href="#" className="btn btn-primary">Go to project</a>
            </div>
          </div>
        </div>
      </div>


    </div>
              
  );
}

export default ProjectsPage;