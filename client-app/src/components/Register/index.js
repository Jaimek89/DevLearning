import React, { Component } from 'react'

import api from '../../services/api'

import swal from 'sweetalert2/dist/sweetalert2.all.min.js'

import { Redirect } from 'react-router'
import storage from '../../services/storage'
import PropTypes from 'prop-types'

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
    api
      .createUser(
        this.state.name,
        this.state.surname,
        this.state.email,
        this.state.username,
        this.state.password
      )
      .then(result => {
        if (result.status === 'OK') {
          swal({
            type: 'success',
            title: 'Success!',
            text: 'Registered!'
          }).then(() => {
            api
              .login(this.state.username, this.state.password)
              .then(resultLogin => {
                if (resultLogin.status === 'OK') {
                  storage.setToken(resultLogin.data.token)
                  this.props.setLogged(true)
                }
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
                    className='form-control mb-1'
                    placeholder='Name'
                    required=''
                    autoFocus=''
                    onChange={this.keepInputName}
                    value={this.state.name}
                  />
                  <input
                    type='text'
                    className='form-control mb-1'
                    placeholder='Surname'
                    required=''
                    onChange={this.keepInputSurname}
                    value={this.state.surname}
                  />
                  <input
                    type='email'
                    className='form-control mb-1'
                    placeholder='Email address'
                    required=''
                    onChange={this.keepInputEmail}
                    value={this.state.email}
                  />
                  <input
                    type='text'
                    className='form-control mb-1'
                    placeholder='Username'
                    required=''
                    onChange={this.keepInputUsername}
                    value={this.state.username}
                  />
                  <input
                    type='password'
                    className='form-control mb-1'
                    placeholder='Password'
                    required=''
                    onChange={this.keepInputPassword}
                    value={this.state.password}
                  />
                  <button className='btn btn-lg btn-warning btn-block'>
                    Sign Up
                  </button>
                </form>
              </div>
              <div className='col-sm-4' />
            </div>
          </div>
        </div>
        {this.props.logged ? <Redirect to='/' /> : undefined}
      </div>
    )
  }
}

Register.propTypes = {
  setLogged: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired
}
