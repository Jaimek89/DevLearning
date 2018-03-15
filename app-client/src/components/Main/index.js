import React, { Component } from "react"
import Home from '../Home'
import ListJS from '../ListJS'
import ListReact from '../ListReact'
import ListNode from '../ListNode'

import { Route, HashRouter } from 'react-router-dom'

export default class Main extends Component {
  render() {
    return (
      <div className="Main">
        <HashRouter>
          <div>
            <Route exact path='/' component={Home}/>
            <Route path='/list_js' component={ListJS}/>
            <Route path='/list_react' component={ListReact}/>
            <Route path='/list_node' component={ListNode}/>
          </div>
        </HashRouter>
      </div>
    )
  }
}
