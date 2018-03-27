import React, { Component } from 'react'
import PropTypes from 'prop-types'

import api from '../../services/api'
import { LANGUAGES } from '../../../config'

import './index.scss'

export default class ListCourses extends Component {
  constructor () {
    super()
    this.state = {
      language: '',
      courses: []
    }
  }

  componentDidMount () {
    const { language } = this.props.match.params
    api.list(language).then(data => {
      this.setState({
        language: language,
        courses: data.data
      })
    })
  }

  render () {
    const { language } = this.state
    const imageUrl = language ? LANGUAGES[language].imageUrl : ''
    return (
      <div className='jumbotron'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-2' />
            <div className='col-sm-8'>
              <div className='p-3 ListCourses-imageContainer'>
                <div
                  className='img-thumbnail ListCourses-image'
                  style={{ backgroundImage: `url(${imageUrl})` }}
                />
              </div>
              <table className='table'>
                <thead className='thead-dark'>
                  <tr>
                    <th scope='col'>Course Title</th>
                    <th scope='col'>Price ($)</th>
                    <th scope='col'>Score (%)</th>
                    <th scope='col'>Teacher</th>
                    <th scope='col'>Contact</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.courses.map(course => {
                    return (
                      <tr>
                        <td>{course.title}</td>
                        <td>{course.price}</td>
                        <td>{course.score}</td>
                        <td />
                        <td>
                          <a href='#'>
                            <button className='btn btn-outline-warning'>
                              Contact
                            </button>
                          </a>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <div className='col-sm-2' />
          </div>
        </div>
      </div>
    )
  }
}

ListCourses.propTypes = {
  match: PropTypes.object.isRequired
}
