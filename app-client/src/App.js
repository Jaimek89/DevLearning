import React, { Component } from "react"
import "./App.scss"
import NavBar from './components/NavBar'
import HeroPanel from './components/HeroPanel'

class App extends Component {
  render() {
    console.log(NavBar)
    return (
      <div className="App">
        <NavBar/>
        <HeroPanel/>
      </div>
    )
  }
}

export default App
