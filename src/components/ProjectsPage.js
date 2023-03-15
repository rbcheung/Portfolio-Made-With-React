import "../css/App.css";
import gallery from "../gallery.json";
import Projects from "../components/projects";
import { Component } from "react";

function ProjectsPage() {
  return (
    <div className="container" id="work">
      <h2 className = "text-center">Work Gallery</h2>
      <div class="container text-center">
        <div class="row">
          <div class="col-sm-2 col-md-2 col-lg-2"></div>
          <div class="col-sm-8 col-md-8 col-lg-8">
            <div className="row">
              <div className="col-12">
                {gallery.map((CurrentObject) => (
                  <Projects props={CurrentObject}></Projects>
                ))}
              </div>
            </div>
          </div>
          <div class="col-sm-2 col-md-2 col-lg-2"></div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
