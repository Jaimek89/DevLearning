import React, { Component } from "react"
import "./App.scss"

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark justify-content-between">
          <a className="navbar-brand">DevLearning</a>
          <form className="form-inline">
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Log In
            </button>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Sign Up
            </button>
          </form>
        </nav>
      </div>
    )
  }
}

export default App;
