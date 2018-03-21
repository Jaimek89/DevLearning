import React, { Component } from 'react'

import api from '../../services/api'

import RegisterCourse from '../RegisterCourse'

export default class Register extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      surname: '',
      email: '',
      username: '',
      password: ''
    }
  }

  keepInputName = e => {
    this.setState({ name: e.target.value })
  }
  keepInputSurname = e => {
    this.setState({ surname: e.target.value })
  }
  keepInputEmail = e => {
    this.setState({ email: e.target.value })
  }
  keepInputUsername = e => {
    this.setState({ username: e.target.value })
  }
  keepInputPassword = e => {
    this.setState({ password: e.target.value })
  }

  createUser = e => {
    e.preventDefault()
    api.createUser(
      this.state.name,
      this.state.surname,
      this.state.email,
      this.state.username,
      this.state.password
    )
    this.setState({ name: '' })
    this.setState({ surname: '' })
    this.setState({ email: '' })
    this.setState({ username: '' })
    this.setState({ password: '' })
  }

  render () {
    return (
      <div>
        <div className='jumbotron'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-4' />
              <div className='col-sm-4 text-center'>
                <form className='form-signin' onSubmit={this.createUser}>
                  <h1 className='h3 mb-3 font-weight-normal'>Register</h1>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Name'
                    required=''
                    autoFocus=''
                    onChange={this.keepInputName}
                    value={this.state.name}
                  />
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Surname'
                    required=''
                    onChange={this.keepInputSurname}
                    value={this.state.surname}
                  />
                  <input
                    type='email'
                    className='form-control'
                    placeholder='Email address'
                    required=''
                    onChange={this.keepInputEmail}
                    value={this.state.email}
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
                  <button className='btn btn-lg btn-primary btn-block'>
                    Sign Up
                  </button>
                </form>
              </div>
              <div className='col-sm-4' />
            </div>
          </div>
        </div>
        <RegisterCourse />
      </div>
    )
  }
}
