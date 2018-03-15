import React, { Component } from "react"
import photoJS from "../../images/imageJS.png"
import photoREACT from "../../images/imageREACT.png"
import photoNODE from "../../images/imageNODE.png"

export default class HeroLinks extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="p-3">
              <a href="#">
                <img src={photoJS} className="img-fluid" alt="Responsive image"/>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3">
              <a href="#">
                <img src={photoREACT} className="img-fluid" alt="Responsive image"/>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3">
              <a href="#">
                <img src={photoNODE} className="img-fluid" alt="Responsive image"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
