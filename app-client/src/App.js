import React, { Component } from "react"
import "./App.scss"
import NavBar from './components/NavBar'
import HeroPanel from './components/HeroPanel'
import HeroLinks from './components/HeroLinks'
import HeroExplain from './components/HeroExplain'
import HeroWhy from './components/HeroWhy'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <HeroPanel/>
        <HeroLinks/>
        <HeroExplain/>
        <HeroWhy/>
        <Footer/>
      </div>
    )
  }
}

export default App
