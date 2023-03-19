import "../css/App.css";
//JSON file imported that includes information to be dynamically generated when referenced in projects component.
import gallery from "../gallery.json";
import Projects from "../components/projects";


function ProjectsPage() {
  return (
    <div id="work">
      <h1 className = "text-center title">Work Gallery</h1>
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-2 col-md-2 col-lg-2"></div>
              <div className="cardstyle col-sm-12 col-md-12 col-lg-8">
                {/* Json file mapped over to so props can be passed to projects component. Key added so react can keep track of each current object. */}
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
