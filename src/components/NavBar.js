import '../css/App.css';
// link imported so that that navigation works with react router.
import { Link } from 'react-router-dom';


// This NavBar/Header component renders the JSX for the navbar.
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