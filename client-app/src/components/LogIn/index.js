import React, { Component } from 'react'
import swal from 'sweetalert2/dist/sweetalert2.all.min.js'

import { Redirect } from 'react-router'

import api from '../../services/api'
import storage from '../../services/storage'

import PropTypes from 'prop-types'

export default class LogIn extends Component {
  state = {
    username: '',
    password: ''
  }

  keepInputUsername = e => {
    this.setState({ username: e.target.value })
  }
  keepInputPassword = e => {
    this.setState({ password: e.target.value })
  }

  login = e => {
    e.preventDefault()
    api.login(this.state.username, this.state.password).then(result => {
      if (result.status === 'OK') {
        swal({
          type: 'success',
          title: 'Success!',
          text: 'Logged In!'
        })
        storage.setToken(result.data.token)
        this.props.setLogged(true)
      } else {
        swal({
          type: 'error',
          title: 'Oops...',
          text: result.error
        })
      }
    })
    this.setState({
      username: '',
      password: ''
    })
  }

  render () {
    return (
      <div className='jumbotron'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-4' />
            <div className='col-sm-4 text-center'>
              <form onSubmit={this.login}>
                <h1 className='h3 mb-3 font-weight-normal'>Log In</h1>
                <input
                  type='text'
                  id='inputUsername'
                  className='form-control mb-1'
                  placeholder='Username'
                  required
                  onChange={this.keepInputUsername}
                  value={this.state.username}
                />
                <input
                  type='password'
                  id='inputPassword'
                  className='form-control mb-1'
                  placeholder='Password'
                  required
                  onChange={this.keepInputPassword}
                  value={this.state.password}
                />
                <button className='btn btn-lg btn-warning btn-block'>
                  Log In
                </button>
              </form>
            </div>
            <div className='col-sm-4' />
          </div>
        </div>
        {this.props.logged ? <Redirect to='/' /> : undefined}
      </div>
    )
  }
}

LogIn.propTypes = {
  setLogged: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired
}
