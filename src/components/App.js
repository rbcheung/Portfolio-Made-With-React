import "../css/App.css";
import NavBar from "./NavBar";
import Home from "./Home";
import ProjectsPage from "./ProjectsPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/work">
            <ProjectsPage />
          </Route>
          <Route path="/contact">
            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
