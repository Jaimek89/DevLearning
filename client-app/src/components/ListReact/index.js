import React, { Component } from "react";
import photoREACT from "../../images/imageREACT.png";
import api from "api-client";

export default class ListReact extends Component {
  constructor() {
    super();
    this.state = {
      courses: []
    };
  }

  componentWillMount() {
    api.protocol = "http";
    api.host = "localhost";
    api.port = "5000";
    api.list("2").then(data => {
      this.setState({ courses: data.data });
    });
  }

  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-sm-2" />
            <div className="col-sm-8">
              <div className="p-3">
                <a href="#">
                  <img
                    src={photoREACT}
                    className="img-fluid"
                    alt="Responsive image"
                  />
                </a>
              </div>
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Surname</th>
                    <th scope="col">Ratio (%)</th>
                    <th scope="col">Price ($)</th>
                    <th scope="col">Contact</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.courses.map(course => {
                    return (
                      <tr>
                        <td>{course.title}</td>
                        <td>{course.price}</td>
                        <td>{course.score}</td>
                        <td>
                          <a href="#">+ Info</a>
                        </td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>67</td>
                    <td>15</td>
                    <td>
                      <a href="#">+ Info</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Larry</td>
                    <td>Bird</td>
                    <td>99</td>
                    <td>22</td>
                    <td>
                      <a href="#">+ Info</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-sm-2" />
          </div>
        </div>
      </div>
    );
  }
}
