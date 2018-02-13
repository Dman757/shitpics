import React, { Component } from 'react'
import '../App.css'

class App extends Component {
  componentWillMount () {
    document.body.classList.toggle('colorShit')
  }
  componentWillUnmount () {
    document.body.classList.toggle('colorShit')
  }
  render () {
    return (
      <div className='App'>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1 className='App-title'>SHIT PICS</h1>
        {/* <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    )
  }
}

export default App
