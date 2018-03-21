import React, { Component } from 'react'
import api from '../../services/api'
import { LANGUAGES } from '../../../config'
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
              <div className='p-3'>
                <a href='#'>
                  <img
                    src={imageUrl}
                    className='img-fluid'
                    alt='Responsive image'
                  />
                </a>
              </div>
              <table className='table'>
                <thead className='thead-dark'>
                  <tr>
                    <th scope='col'>Name</th>
                    <th scope='col'>Surname</th>
                    <th scope='col'>Ratio (%)</th>
                    <th scope='col'>Price ($)</th>
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
                        <td>
                          <a href='#'>+ Info</a>
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
