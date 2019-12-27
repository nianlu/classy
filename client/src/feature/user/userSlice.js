import { createSlice } from '@reduxjs/toolkit'

import jwtDecode from 'jwt-decode'
import * as api from '../../api/login'

const token = sessionStorage.getItem('token')
const initial = {
  login: token && token.length > 0,
  username: token && jwtDecode(token).user,
}

const userSlice = createSlice({
  name: 'user',
  initialState: initial,
  reducers: {
    loginStart(state, action) {
      console.log('accountreducer loginstart')
      state.login = null
    },
    loginSuccess(state, action) {
      console.log('accountreducer', action.payload)
      state.username = action.payload.username
      state.login = true
    },
    loginFailure(state, action) {
      console.log('accountreducer loginfail', action.payload)
      sessionStorage.removeItem('token')
      state.login = false
    }
  }
})

export const {
  loginStart, loginSuccess, loginFailure
} = userSlice.actions

export default userSlice.reducer

export const login = (email, password) => dispatch => {
  console.log('accountreducer login')
  dispatch(loginStart)
  api.login(
  // api.loginFake(
    email, 
    password, 
    data => {
      if (data && data.length > 0) {
        // localStorage.setItem('token', data)
        sessionStorage.setItem('token', data)
        const user = jwtDecode(data).user
        if (user && user.length > 0) {
          dispatch(loginSuccess({username: user}))
        } else {
          dispatch(loginFailure())
        }
        // dispatch(loginSuccess({username: 'testuser'}))
      } else {
        dispatch(loginFailure())
      }
    },
    // dispatch(loginSuccess(data)),
    error => dispatch(loginFailure(error.message))
  )
}

// export const register = (email, password) => dispatch => {
//   console.log('accountreducer register')
//   dispatch(loginStart)
//   api.register(
//     email, 
//     password, 
//     response => dispatch(loginSuccess(response)),
//     error => dispatch(loginFailure(error.message))
//   )
// }
