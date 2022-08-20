import React from 'react'
import { NavLink } from 'react-router-dom';

function Menu() {
  const navStyle = ({isActive}) => {
return {
  borderBottom: isActive && "4px solid violet"
}
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Docs</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" style={navStyle}to="/tutorial">Tutorial</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={(navInfo) => navInfo.isActive ? "nav-link active" : "nav-link"} to="/community">Community</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu