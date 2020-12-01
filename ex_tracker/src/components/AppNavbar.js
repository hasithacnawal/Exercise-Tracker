import React, { Component } from "react";
import { Link } from "react-router-dom";

class AppNavbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container">
          <Link to="/" className="navbar-brand">
            ExerTracker
          </Link>
          <div className="collapse navbar-collapse">
            <ul className=" navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link ">
                  Exercise
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">
                  Create Exercise Log
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/user" className="nav-link">
                  Create User
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default AppNavbar;
