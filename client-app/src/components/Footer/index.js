import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          className="navbar-togglers"
          type="button"
          data-toggle="#navbarNav"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Javascript
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                React
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Node
              </a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
