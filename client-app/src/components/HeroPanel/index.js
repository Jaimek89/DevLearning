import React, { Component } from 'react'
import './index.scss'

export default class HeroPanel extends Component {
  render () {
    return (
      <div className='jumbotron etiquetaa'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-4' />
            <div className='col-sm-4 text-center'>
              <h3 className='display-5'>Improve your developer skills</h3>
              <p>Get 1-on-1 lessons from a master's developer</p>
            </div>
            <div className='col-sm-4' />
          </div>
        </div>
      </div>
    )
  }
}
