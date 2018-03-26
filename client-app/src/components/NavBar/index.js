import React, { Component } from 'react'
import './index.scss'

import { Link } from 'react-router-dom'

export default class NavBar extends Component {
  render () {
    return (
      <div>
        <nav className='navbar navbar-dark bg-dark justify-content-between'>
          <Link to='/'>
            <a className='navbar-brand'>DevLearning</a>
          </Link>
          {this.props.logged ? (
            <div>
              <Link to='/user_page'>
                <button className='btn btn-outline-success'>User Page</button>
              </Link>
              <Link to='/'>
                <button
                  className='btn btn-outline-success'
                  onClick={() => this.props.setLogged(false)}
                >
                  Log Out
                </button>
              </Link>
            </div>
          ) : (
            <form className='form-inline'>
              <Link to='/login'>
                <button className='btn btn-outline-success'>Log In</button>
              </Link>
              <Link to='/register'>
                <button className='btn btn-outline-success'>Sign Up</button>
              </Link>
            </form>
          )}
        </nav>
      </div>
    )
  }
}
