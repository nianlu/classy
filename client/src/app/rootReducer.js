import { combineReducers } from 'redux'
import userReducer from '../feature/user/userSlice'
// import visibilityFilterReducer from '../features/filters/filtersSlice'

export default combineReducers({
  user: userReducer,
//   visibilityFilter: visibilityFilterReducer
})
