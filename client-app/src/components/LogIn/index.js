import React, { Component } from 'react'

import api from '../../services/api'
import storage from '../../services/storage'

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
        console.log('logeado!!')

        storage.setToken(result.data.token)
      } else {
        console.log('wrong')
      }
    })
    this.setState({ username: '' })
    this.setState({ password: '' })
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
                  className='form-control'
                  placeholder='Username'
                  required
                  onChange={this.keepInputUsername}
                  value={this.state.username}
                />
                <input
                  type='password'
                  id='inputPassword'
                  className='form-control'
                  placeholder='Password'
                  required
                  onChange={this.keepInputPassword}
                  value={this.state.password}
                />
                <button className='btn btn-lg btn-primary btn-block'>
                  Log In
                </button>
              </form>
            </div>
            <div className='col-sm-4' />
          </div>
        </div>
      </div>
    )
  }
}
