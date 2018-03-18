import React, { Component } from "react"
import Home from '../Home'
import ListJS from '../ListJS'
import ListReact from '../ListReact'
import ListNode from '../ListNode'
import LogIn from '../LogIn'
import Register from '../Register'
import RegisterCourse from "../RegisterCourse";

import { Route, HashRouter } from 'react-router-dom'

// import { LANGUAGES } from "../../../config";

export default class Main extends Component {
  render() {
    return (
      <div className="Main">
        <HashRouter>
          <div>
            <Route exact path='/' component={Home}/>
            {/* {
              LANGUAGES.map(aaa => {
                <Route path={`/courses/${id}`} component={ListCourses}/>
              })
            } */}
            <Route path='/list_js' component={ListJS}/>
            <Route path='/list_react' component={ListReact}/>
            <Route path='/list_node' component={ListNode}/>
            <Route path='/login' component={LogIn}/>
            <Route path='/register' component={Register}/>
            <Route path='/course_register' component={RegisterCourse}/>
          </div>
        </HashRouter>
      </div>
    )
  }
}