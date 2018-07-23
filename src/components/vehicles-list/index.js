import React, { Component } from 'react';

import vehiclesData from 'src/data/vehiclesData.json';
import VehiclesList from './VehiclesList';

class VehicleListContainer extends Component {
  constructor () {
    super();
    this.state = { vehicles: [] }
  }

  componentDidMount() {
    this.setState({ vehicles: vehiclesData.data });
  }

  render () {
    const { vehicles } = this.state;
    return <VehiclesList vehicles={vehicles} />
  }
}

export default VehicleListContainer;
