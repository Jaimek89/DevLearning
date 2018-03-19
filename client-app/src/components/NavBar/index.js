import React, { Component } from "react";
import "./index.scss";

import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark justify-content-between">
          <Link to="/">
          <a className="navbar-brand">DevLearning</a>
          </Link>
          <form className="form-inline">
            <Link to="/login">
              <button className="btn btn-outline-success" type="submit">
                Log In
              </button>
            </Link>
            <Link to="/register">
            <button className="btn btn-outline-success" type="submit">
              Sign Up
            </button>
            </Link>
          </form>
        </nav>
      </div>
    );
  }
}
