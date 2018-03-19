import React, { Component } from "react"
import Home from '../Home'

import LogIn from '../LogIn'
import Register from '../Register'
import RegisterCourse from "../RegisterCourse"

import { Route, HashRouter } from 'react-router-dom'

// import ListJS from '../ListJS'
// import ListReact from '../ListReact'
// import ListNode from '../ListNode'
import ListCourses from '../ListCourses'
import { LANGUAGES } from "../../../config"

export default class Main extends Component {
  render() {
    return (
      <div className="Main">
          <div>
            <Route exact path='/' component={Home}/>
            {
              LANGUAGES.map(language => (
                <Route path={`/courses/${language.id}`} render={()=><ListCourses language={language}/>}/>
              ))
            }
            {/* <Route path='/list_js' component={ListJS}/>
            <Route path='/list_react' component={ListReact}/>
            <Route path='/list_node' component={ListNode}/> */}
            <Route path='/login' component={LogIn}/>
            <Route path='/register' component={Register}/>
            <Route path='/course_register' component={RegisterCourse}/>
          </div>
      </div>
    )
  }
}