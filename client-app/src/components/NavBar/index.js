import React, { Component } from 'react'
import './index.scss'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import storage from '../../services/storage'
export default class NavBar extends Component {
  render () {
    return (
      <div>
        <nav className='navbar navbar-dark bg-dark justify-content-between'>
          <Link to='/'>
            <span className='navbar-brand'>DevLearning</span>
          </Link>
          {this.props.logged ? (
            <div>
              <Link to='/user_page'>
                <button className='btn btn-outline-warning'>User Page</button>
              </Link>
              <Link to='/'>
                <button
                  className='btn btn-outline-warning'
                  onClick={() => {
                    storage.removeToken()
                    this.props.setLogged(false)
                  }}
                >
                  Log Out
                </button>
              </Link>
            </div>
          ) : (
            <form className='form-inline'>
              <Link to='/login'>
                <button className='btn btn-outline-warning'>Log In</button>
              </Link>
              <Link to='/register'>
                <button className='btn btn-outline-warning'>Sign Up</button>
              </Link>
            </form>
          )}
        </nav>
      </div>
    )
  }
}

NavBar.propTypes = {
  setLogged: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired
}
