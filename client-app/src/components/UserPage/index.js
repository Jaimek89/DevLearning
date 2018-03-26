import React, { Component } from 'react'

import api from '../../services/api'

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
      name: ''
    }
  }

  componentDidMount () {
    api.retrieveUser().then(data => {
      this.setState({
        name: data.data.name,
        teacher: data.data._id
      })
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
    api.createCourse(
      this.state.title,
      this.state.language,
      this.state.price,
      this.state.teacher
    )
    this.setState({ title: '', language: '', price: '', teacher: '' })
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
    api.updateUser(
      this.state.email,
      this.state.newEmail,
      this.state.username,
      this.state.password
    )
    this.setState({ email: '', newEmail: '', username: '', password: '' })
  }

  showCourses = e => {
    e.preventDefault()
    api.listCoursesByTeacher()
  }

  render () {
    return (
      <div className='jumbotron'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-4' />
            <div className='col-sm-4 text-center'>
              <h1 className='h3 mb-3 font-weight-normal'>
                Welcome {this.state.name}
              </h1>
              <form className='form-signin'>
                <h1 className='h3 mb-3 font-weight-normal'>Course Register</h1>
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
                <input
                  type='text'
                  id='inputLanguage'
                  className='form-control'
                  placeholder='Language'
                  required=''
                  onChange={this.keepInputLanguage}
                  value={this.state.language}
                />
                <input
                  type='text'
                  id='inputPrice'
                  className='form-control'
                  placeholder='Price'
                  required=''
                  onChange={this.keepInputPrice}
                  value={this.state.price}
                />
                <input
                  type='text'
                  id='inputTeacher'
                  className='form-control'
                  placeholder='Teacher'
                  required=''
                  onChange={this.keepInputTeacher}
                  value={this.state.teacher}
                />
                <button
                  className='btn btn-lg btn-primary btn-block'
                  onClick={this.createCourse}
                >
                  Regist a course
                </button>
              </form>
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
                  className='btn btn-lg btn-primary btn-block'
                  onClick={this.updateEmail}
                >
                  Update Email
                </button>
              </form>
              <button
                className='btn btn-lg btn-primary btn-block'
                onClick={this.showCourses}
              >
                Show Courses
              </button>
            </div>
            <div className='col-sm-4' />
          </div>
        </div>
      </div>
    )
  }
}
