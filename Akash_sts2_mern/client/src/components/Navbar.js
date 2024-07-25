import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-dark py-4 ">
    <div className="container-fluid">
      <Link className="navbar-brand text-light" to="/">
        BlogApp
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link text-light" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/new">
              New Blog
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
