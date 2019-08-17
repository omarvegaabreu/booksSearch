import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  // Depending on the current path, this component sets the "active" class on the appropriate navigation link item
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link className="navbar-brand" to="/">
        {/* <span className="blue">G</span>
        <span className="red">o</span>
        <span className="yellow">o</span>
        <span className="blue">g</span>
        <span className="green">l</span>
        <span className="red">e</span> */}
        <button type="button" class=" mx-2 btn btn-outline-danger">
          Search
        </button>
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/saved" className={window.location.pathname === "/saved"}>
            <button type="button" class="btn btn-outline-danger">
              Save your search
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
