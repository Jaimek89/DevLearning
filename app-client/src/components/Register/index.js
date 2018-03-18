import React, { Component } from "react";

import { Route, HashRouter } from "react-router-dom";

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      surname: "",
      email: "",
      username: "",
      password: ""
    };
  }

  keepInputName(e) {
    this.setState({ name: e.target.value });
  }
  keepInputSurname(e) {
    this.setState({ surname: e.target.value });
  }
  keepInputEmail(e) {
    this.setState({ email: e.target.value });
  }
  keepInputUsername(e) {
    this.setState({ username: e.target.value });
  }
  keepInputPassword(e) {
    this.setState({ password: e.target.value });
  }

  search() {
    if (this.state.name && this.state.surname && this.state.email && this.state.username && this.state.password)
      api.login(name, surname, email, username, password);
  }

  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-sm-4" />
            <div className="col-sm-4 text-center">
              <form className="form-signin">
                <h1 className="h3 mb-3 font-weight-normal">Register</h1>
                <input
                  type="text"
                  id="inputNameReg"
                  className="form-control"
                  placeholder="Name"
                  required=""
                  autoFocus=""
                />
                <input
                  type="text"
                  id="inputSurname"
                  className="form-control"
                  placeholder="Surname"
                  required=""
                />
                <input
                  type="email"
                  id="inputEmail"
                  className="form-control"
                  placeholder="Email address"
                  required=""
                />
                <input
                  type="text"
                  id="inputUsernameReg"
                  className="form-control"
                  placeholder="Username"
                  required=""
                />
                <input
                  type="password"
                  id="inputPasswordReg"
                  className="form-control"
                  placeholder="Password"
                  required=""
                />
                <button
                  className="btn btn-lg btn-primary btn-block"
                  type="submit"
                >
                  Sign Up
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
