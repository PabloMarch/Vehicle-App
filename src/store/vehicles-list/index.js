import { handleActions } from 'redux-actions'

// Actions
import { setVehicles } from './actions'

export default handleActions({
  [setVehicles] (state, { payload }) {
    return { ...state, ...payload }
  }
}, {})
