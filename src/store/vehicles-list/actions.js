import { createAction } from 'redux-actions'

// Data
import vehiclesData from 'src/data/vehiclesData'

// TEMP
const delay = ms => new Promise(resolve => setTimeout(() => resolve(vehiclesData), ms));

// Actions
export const setVehicles = createAction('SET_VEHICLES')

// Fetch vehicles
export const fetchVehicles = () => async dispatch => {
  try {
    const response = await delay(2000) // dispatch(Api.get('api/vehicles')) // <= Once API is connected
    dispatch(setVehicles(response.data))
  } catch (err) {
    dispatch(setVehicles(err))
  }
}

// Create vehicle
export const createVehicle = data => async dispatch => {
  // await dispatch(Api.post('api/vehicles', data))
  // await dispatch(fetchVehicles())
  console.log('createVehicle::', data)
}

// Update vehicle
export const updateVehicle = data => async (dispatch, getState) => {
  const { vehiclesList } = getState()
  data.brand = 'EDITED TEST'
  dispatch(setVehicles({ [data.id]: data }))
}

// Delete vehicle
export const deleteVehicle = data => async (dispatch, getState) => {
  dispatch(setVehicles({ [data.id]: data }))
  // const { vehiclesList } = getState()
  // const filteredVehicles = Object.keys(vehiclesList).reduce( (accumulator, key) => (
  //    vehiclesList[key].id === data.id ? accumulator : {
  //        ...accumulator,
  //        [key]: vehiclesList[key]
  //    }
  // ), {})
  // console.log('deleteVehicle::', filteredVehicles)
  // dispatch(setVehicles(filteredVehicles))
}
