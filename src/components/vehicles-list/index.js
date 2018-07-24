import React, { Component } from 'react'
import { connect } from 'react-redux';

// Actions
import { fetchVehicles, createVehicle, updateVehicle } from 'src/store/vehicles-list/actions'

// Presentational
import VehiclesList from './VehiclesList'

// Container
class VehicleListContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchVehicles());
  }

  render () {
    return <VehiclesList vehicles={this.props.data} />
  }
}

export default connect(state => ({ data: state.vehiclesList }))(VehicleListContainer)
