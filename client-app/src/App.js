import React, { Component } from 'react'
import './App.scss'

import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Main from './components/Main'

import { HashRouter } from 'react-router-dom'

class App extends Component {
  state = {
    logged: false
  }

  setLogged = logged => {
    this.setState({ logged })
  }

  render () {
    return (
      <HashRouter>
        <div className='App'>
          <NavBar logged={this.state.logged} setLogged={this.setLogged} />
          <Main logged={this.state.logged} setLogged={this.setLogged} />
          <Footer />
        </div>
      </HashRouter>
    )
  }
}

export default App
