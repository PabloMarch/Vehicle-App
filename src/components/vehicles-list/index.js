import React, { Component } from 'react'
import { connect } from 'react-redux';

// Actions
import { fetchVehicles, createVehicle, updateVehicle, deleteVehicle } from 'src/store/vehicles-list/actions'

// Presentational
import VehiclesList from './VehiclesList'

// Container
class VehicleListContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isFetching: true
    }
  }

  componentDidMount() {
    this.props.fetchVehicles()
      .then(() => this.setState({ isFetching: false }))
  }

  render () {
    return <VehiclesList {...this.props} isFetching={this.state.isFetching} />
  }
}

export default connect(
  ({ vehiclesList }) => ({ vehiclesList }),
  { fetchVehicles, createVehicle, updateVehicle, deleteVehicle }
)(VehicleListContainer)
