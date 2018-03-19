import React, { Component } from "react";
import api from "api-client";


export default class ListCourses extends Component {
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
    const languageId = this.props.language.id
    api.list(languageId).then(data => {
      // Averiguar como pasar esta id (que nos viene en el path de la ruta) probar: this.props.match.params.id
      this.setState({ courses: data.data })
    })
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
                    src={this.props.language.imageUrl}
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
