import React, { Component } from "react"
import './index.scss'

export default class HeroWhy extends Component {
  render() {
    return (
      <div class="container why-colorText">
        <div class="row">
          <div class="col-sm-3" />
          <div class="col-sm-6 text-center">
            <h2>Why DevLearning?</h2>
          </div>
          <div class="col-sm-3" />
        </div>
        <div class="row">
          <div class="col-md-3" />
          <div class="col-md-6 text-center">
            <p>
              With 'DevLearning' you can choose which subject you want to
              improve. You will get personalised lessons, just one teacher and
              one pupil. In our application, you will find the best master's en
              each subject. Also, you only pay for the lesson that you get.
              Wherever you are, you can get in touch and get your master class
              or get some help with your projects.
            </p>
          </div>
          <div class="col-md-3" />
        </div>
      </div>
    )
  }
}
