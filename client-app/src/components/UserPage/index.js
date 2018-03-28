import React, { Component } from 'react'

import api from '../../services/api'

import swal from 'sweetalert2/dist/sweetalert2.all.min.js'

export default class UserPage extends Component {
  constructor () {
    super()
    this.state = {
      title: '',
      language: '',
      price: '',
      teacher: '',
      email: '',
      newEmail: '',
      username: '',
      password: '',
      name: '',
      courses: [],
      _id: ''
    }
  }

  componentDidMount () {
    api
      .retrieveUser()
      .then(data => {
        this.setState({
          name: data.data.name,
          teacher: data.data._id
        })
      })
      .then(() => {
        api.listCoursesByTeacher(this.state.teacher).then(data => {
          this.setState({
            courses: data.data
          })
        })
      })
  }

  removeCourse = idOfCourse => {
    api.removeCourse(this.state.teacher, idOfCourse).then(result => {
      if (result.status === 'OK') {
        swal({
          type: 'success',
          title: 'Success!',
          text: 'Course deleted!'
        }).then(() => {
          api.listCoursesByTeacher(this.state.teacher).then(data => {
            this.setState({
              courses: data.data
            })
          })
        })
      } else {
        swal({
          type: 'error',
          title: 'Oops...',
          text: result.error
        })
      }
    })
  }

  keepInputTitle = e => {
    this.setState({ title: e.target.value })
  }
  keepInputLanguage = e => {
    this.setState({ language: e.target.value })
  }
  keepInputPrice = e => {
    this.setState({ price: e.target.value })
  }
  keepInputTeacher = e => {
    this.setState({ teacher: e.target.value })
  }

  createCourse = e => {
    e.preventDefault()
    api
      .createCourse(
        this.state.title,
        this.state.language,
        this.state.price,
        this.state.teacher,
        this.state.idOfCourse
      )
      .then(result => {
        if (result.status === 'OK') {
          swal({
            type: 'success',
            title: 'Success!',
            text: 'Course created!'
          })
          const courses = this.state.courses
          courses.push({
            title: this.state.title,
            language: this.state.language,
            price: this.state.price,
            teacher: this.state.teacher,
            _id: result.data._id
          })
          this.setState({ courses })
          this.setState({ title: '', language: '', price: '', _id: '' })
        } else {
          swal({
            type: 'error',
            title: 'Oops...',
            text: result.error
          })
        }
      })
  }

  keepInputEmail = e => {
    this.setState({ email: e.target.value })
  }
  keepInputNewEmail = e => {
    this.setState({ newEmail: e.target.value })
  }
  keepInputUsername = e => {
    this.setState({ username: e.target.value })
  }
  keepInputPassword = e => {
    this.setState({ password: e.target.value })
  }

  updateEmail = e => {
    e.preventDefault()
    api
      .updateUser(
        this.state.teacher,
        this.state.email,
        this.state.newEmail,
        this.state.username,
        this.state.password
      )
      .then(result => {
        if (result.status === 'OK') {
          swal({
            type: 'success',
            title: 'Success!',
            text: 'Updated!'
          })
        } else {
          swal({
            type: 'error',
            title: 'Oops...',
            text: result.error
          })
        }
      })
    this.setState({ email: '', newEmail: '', username: '', password: '' })
  }

  showCourses = e => {
    e.preventDefault()
    api.listCoursesByTeacher()
  }

  render () {
    return (
      <div className='jumbotron'>
        <div className='container text-center'>
          <h1 className='h1 mb-3 font-weight-normal'>
            Welcome {this.state.name} !
          </h1>
          <hr />
          <div className='row'>
            <div className='col-md-4'>
              <h1 className='h3 mb-3 font-weight-normal'>Your courses</h1>
              {this.state.courses.map(course => {
                return (
                  <div className='input-group' key={course._id}>
                    <div className='col mb-2 text-left'>{course.title}</div>
                    <div className='col-sm-4 mb-2'>
                      {' '}
                      <button
                        className='btn btn-warning btn-block'
                        onClick={() => {
                          this.removeCourse(course._id)
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className='col-sm-4 text-center'>
              <form className='form-signin'>
                <h1 className='h3 mb-3 font-weight-normal'>Regist a course</h1>
                <input
                  type='text'
                  id='inputTitle'
                  className='form-control'
                  placeholder='Title'
                  required=''
                  autoFocus=''
                  onChange={this.keepInputTitle}
                  value={this.state.title}
                />
                <select
                  className='form-control'
                  id='inputLanguage'
                  required=''
                  onChange={this.keepInputLanguage}
                  value={this.state.language}
                >
                  <option defaultValue>Language</option>
                  <option value='javascript'>JavaScript</option>
                  <option value='react'>React.js</option>
                  <option value='node'>Node.js</option>
                </select>
                <input
                  type='text'
                  id='inputPrice'
                  className='form-control'
                  placeholder='Price'
                  required=''
                  onChange={this.keepInputPrice}
                  value={this.state.price}
                />
                <button
                  className='btn btn-lg btn-warning btn-block'
                  onClick={this.createCourse}
                >
                  Regist a course
                </button>
              </form>
            </div>
            <div className='col-sm-4'>
              <form className='form-signin' onSubmit={this.updateEmail}>
                <h1 className='h3 mb-3 font-weight-normal'>Update Email</h1>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Current Email'
                  required=''
                  onChange={this.keepInputEmail}
                  value={this.state.email}
                />
                <input
                  type='text'
                  className='form-control'
                  placeholder='New Email'
                  required=''
                  onChange={this.keepInputNewEmail}
                  value={this.state.newEmail}
                />
                <input
                  type='text'
                  className='form-control'
                  placeholder='Username'
                  required=''
                  onChange={this.keepInputUsername}
                  value={this.state.username}
                />
                <input
                  type='password'
                  className='form-control'
                  placeholder='Password'
                  required=''
                  onChange={this.keepInputPassword}
                  value={this.state.password}
                />
                <button
                  className='btn btn-lg btn-warning btn-block'
                  onClick={this.updateEmail}
                >
                  Update Email
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
