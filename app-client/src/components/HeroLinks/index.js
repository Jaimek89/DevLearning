import React, { Component } from "react"
import { Link } from "react-router-dom"

import { LANGUAGES } from "../../../config"

export default class HeroLinks extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {
            LANGUAGES.map(language => {
              return (
                <div className="col-md-4">
                  <div className="p-3">
                    <Link to ={`/courses/${language.id}`}>
                      <img src={language.imageUrl} className="img-fluid" alt="Responsive image"/>
                    </Link>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}