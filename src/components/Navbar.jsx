import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Content<span>Doc</span>
      </Link>

      <div className="nav-links">
        <a href="#how-it-works">How it works</a>
      </div>
    </nav>
  );
}

export default Navbar;