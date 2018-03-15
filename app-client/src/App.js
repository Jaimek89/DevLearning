import React, { Component } from "react"
import "./App.scss"
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Main from './components/Main'


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}

export default App

        
