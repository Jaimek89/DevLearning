import React, { Component } from 'react'
import './App.scss'

import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Main from './components/Main'

import { HashRouter } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <HashRouter>
        <div className='App'>
          <NavBar />
          <Main />
          <Footer />
        </div>
      </HashRouter>
    )
  }
}

export default App
