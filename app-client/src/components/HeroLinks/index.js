import React, { Component } from "react"

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
                    <a href={`#${language.path}`}>
                      <img src={language.imageUrl} className="img-fluid" alt="Responsive image"/>
                    </a>
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