import '../css/App.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
<nav className="navbar navbar-expand-lg">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <h5 className = "nav-name">Portfolio.</h5>
    <div className="navbar-nav">
      <Link className="nav-item nav-link" to="/">Home</Link>
      <Link className="nav-item nav-link" to="/work">Work</Link>
      <Link className="nav-item nav-link" to="/contact">Contact</Link>
    </div>
  </div>
</nav>
  );
}

export default NavBar;