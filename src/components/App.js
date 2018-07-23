import React, { Component, Fragment } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'

// Components
import VehiclesList from './vehicles-list';

class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <VehiclesList />
      </Fragment>
    )
  }
}

export default App;
