import React, { Component } from "react"
import HeroPanel from "../HeroPanel"
import HeroLinks from "../HeroLinks"
import HeroExplain from "../HeroExplain"
import HeroWhy from "../HeroWhy"

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <HeroPanel />
        <HeroLinks />
        <HeroExplain />
        <HeroWhy />
      </div>
    )
  }
}
