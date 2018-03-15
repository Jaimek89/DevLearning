import React, { Component } from "react"
import Home from '../Home'
import ListJS from '../ListJS'
import ListReact from '../ListReact'
import ListNode from '../ListNode'

export default class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Home />
        <ListJS/>
        <ListReact/>
        <ListNode/>
      </div>
    )
  }
}
