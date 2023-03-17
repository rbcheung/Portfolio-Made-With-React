import "../css/App.css";
import gallery from "../gallery.json";
import Projects from "../components/projects";

function ProjectsPage() {
  return (
    <div id="work">
      <h1 className = "text-center title">Work Gallery</h1>
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-2 col-md-2 col-lg-2"></div>
              <div className="cardstyle col-sm-8 col-md-8 col-lg-8">
                {gallery.map((CurrentObject) => (
                  <Projects props={CurrentObject} key={CurrentObject.id}></Projects>
                ))}
              </div>
          <div className="col-sm-2 col-md-2 col-lg-2"></div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
