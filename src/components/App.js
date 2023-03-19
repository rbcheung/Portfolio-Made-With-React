import "../css/App.css";
import NavBar from "./NavBar";
import Home from "./Home";
import ProjectsPage from "./ProjectsPage";
//imported to use React Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./Contact";

// App function renders components
// NavBar component placed outside switch as we want Navbar to always be showing.
// Route used and specific path used to navigate through app.
function App() {
  return (
    <div id="content">
      <Router basename= "/Portfolio-Made-With-React">
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
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
