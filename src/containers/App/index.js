import React, {Component} from 'react'
import MainPage from '../Main/.'
import LoginPage from '../Login/LoginConnector'
import {BrowserRouter as Router} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>{this.props.isLogedIn ? <MainPage /> : <LoginPage />}</Router>
    )
  }
}
export default App
