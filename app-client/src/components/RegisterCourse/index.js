import React, { Component } from "react";

import { Route, HashRouter } from "react-router-dom";

export default class RegisterCourse extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      language: "",
      price: "",
    };
  }

  keepInputTitle(e) {
    this.setState({ title: e.target.value });
  }
  keepInputLanguage(e) {
    this.setState({ language: e.target.value });
  }
  keepInputPrice(e) {
    this.setState({ price: e.target.value });
  }

  // search() {
  //   if (this.state.title && this.state.language && this.state.price)
  //     api.login(name, surname, email, username, password);
  // }

  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-sm-4" />
            <div className="col-sm-4 text-center">
              <form className="form-signin">
                <h1 className="h3 mb-3 font-weight-normal">Course Register</h1>
                <input
                  type="text"
                  id="inputTitle"
                  className="form-control"
                  placeholder="Title"
                  required=""
                  autoFocus=""
                />
                <input
                  type="text"
                  id="inputLanguage"
                  className="form-control"
                  placeholder="Language"
                  required=""
                />
                <input
                  type="text"
                  id="inputPrice"
                  className="form-control"
                  placeholder="Price"
                  required=""
                />
                <button
                  className="btn btn-lg btn-primary btn-block"
                  type="submit"
                >
                  Regist the course
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
