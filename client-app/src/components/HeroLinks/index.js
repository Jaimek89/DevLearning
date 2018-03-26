import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { LANGUAGES } from '../../../config'

import './index.scss'

export default class HeroLinks extends Component {
  render () {
    return (
      <div className='container'>
        <div className='row'>
          {Object.keys(LANGUAGES).map(languageId => {
            return (
              <div className='col-md-4 HeroLinks-imageContainer'>
                <Link to={`/courses/${languageId}`}>
                  <div
                    className='HeroLinks-image'
                    style={{
                      backgroundImage: `url(${LANGUAGES[languageId].imageUrl})`
                    }}
                  />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
