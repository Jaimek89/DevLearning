import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import Home from '../Home'
import LogIn from '../LogIn'
import Register from '../Register'
import UserPage from '../UserPage'
import ListCourses from '../ListCourses'

export default class Main extends Component {
  render () {
    return (
      <div className='Main'>
        <div>
          <Route exact path='/' component={Home} />
          <Route path={'/courses/:language'} component={ListCourses} />
          <Route
            path='/login'
            render={() => (
              <LogIn
                setLogged={this.props.setLogged}
                logged={this.props.logged}
              />
            )}
          />
          <Route path='/register' component={Register} />
          <Route path='/user_page' component={UserPage} />
        </div>
      </div>
    )
  }
}

Main.propTypes = {
  setLogged: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired
}
