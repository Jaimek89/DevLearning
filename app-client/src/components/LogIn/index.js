import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import api from "api-client";

export default class LogIn extends Component {

  state = {
    username: "",
    password: ""
  }

  keepInput(e) {
    this.setState({ username: e.target.value });
  }
  keepInputPass(e) {
    this.setState({ password: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault()
    this.search()
  }

  search() {
    if (this.state.username && this.state.password){
      api.login(username, password)
    }
  }

  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-sm-4" />
            <div className="col-sm-4 text-center">
              <form onSubmit={this.handleSubmit}>
                <h1 className="h3 mb-3 font-weight-normal">Log In</h1>
                <input
                  type="text"
                  id="inputUsername"
                  className="form-control"
                  placeholder="Username"
                  required
                  onChange={this.keepInput}
                  value={this.state.username}
                />
                <input
                  type="password"
                  id="inputPassword"
                  className="form-control"
                  placeholder="Password"
                  required
                  onChange={this.keepInputPass}
                  value={this.state.password}
                />
                <button
                  className="btn btn-lg btn-primary btn-block"
                  type="submit"
                >
                  Log In
                </button>
              </form>
            </div>
            <div className="col-sm-4" />
          </div>
        </div>
      </div>
    );
  }
}
