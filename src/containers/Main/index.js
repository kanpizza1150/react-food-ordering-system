import React from 'react'
import {Switch, Route} from 'react-router-dom'
import HomeConnector from './HomePage/HomeConnector'
class Main extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={HomeConnector} />
      </Switch>
    )
  }
}

export default Main
