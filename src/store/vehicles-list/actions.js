import { createAction } from 'redux-actions'

// Data
import vehiclesData from 'src/data/vehiclesData'

// TEMP
const delay = ms => new Promise(resolve => setTimeout(() => resolve(vehiclesData), ms));

// Actions
export const setVehicles = createAction('SET_VEHICLES')

// Fetch vehicles
export const fetchVehicles = () => async dispatch => {
  const response = await delay(2000) // dispatch(Api.get('api/vehicles')) // <= Once API is connected
  dispatch(setVehicles(vehiclesData.data))
}

// Create vehicles
export const createVehicle = data => async (dispatch) => {
  // await dispatch(Api.post('api/vehicles', data))
  await dispatch(fetchVehicles())
}

// Update vehicles
export const updateVehicle = data => async (dispatch) => {
  // const response = await dispatch(Api.put(`api/vehicles/${data.id}`, data))
  dispatch(setVehicles(response.data))
}
