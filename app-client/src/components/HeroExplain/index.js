import React, { Component } from "react"

export default class HeroExplain extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-sm-4" />
            <div className="col-sm-4">
              <h2>How does it work?</h2>
            </div>
            <div className="col-sm-4" />
          </div>
          <div className="row">
            <div className="col-md-4">
              <p>Insert an image????</p>
              <h5 className="display-5">1. Choose a subject!</h5>
              <p>Choose the subject where you need to improve.</p>
            </div>
            <div className="col-md-4">
              <p>Insert an image????</p>
              <h5 className="display-5">2. Choose a teacher!</h5>
              <p>Choose the best teacher based on their valuations.</p>
            </div>
            <div className="col-md-4">
              <p>Insert an image????</p>
              <h5 className="display-5">3. Connect!</h5>
              <p>Take your lesson on Skype or other video chat software.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
