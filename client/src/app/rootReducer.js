import { combineReducers } from 'redux'
import userReducer from '../feature/user/userSlice'
import scoreReducer from '../feature/score/scoreSlice'
// import visibilityFilterReducer from '../features/filters/filtersSlice'

export default combineReducers({
  user: userReducer,
  score: scoreReducer,
//   visibilityFilter: visibilityFilterReducer
})
