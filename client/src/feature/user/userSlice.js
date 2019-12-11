import { createSlice } from '@reduxjs/toolkit'
import * as api from '../../api/login'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    login: false
  },
  reducers: {
    loginStart(state, action) {
      console.log('accountreducer loginstart')
      state.login = null
    },
    loginSuccess(state, action) {
      console.log('accountreducer', action.payload)
      if (action.payload) {
        sessionStorage.setItem('token', action.payload)
        state.login = true
        console.log('success')
      } else {
        sessionStorage.removeItem('token')
        state.login = false
        console.log('failed')
      }
      // state.login = true
    },
    loginFail(state, action) {
      console.log('accountreducer loginfail', action.payload)
      sessionStorage.removeItem('token')
      state.login = false
    }
  }
})

export const {
  loginStart, loginSuccess, loginFail
} = userSlice.actions

export default userSlice.reducer

export const login = (email, password) => dispatch => {
  console.log('accountreducer login')
  dispatch(loginStart)
  // api.login(
  api.loginFake(
    email, 
    password, 
    data => dispatch(loginSuccess(data)),
    error => dispatch(loginFail(error.message))
  )
}

// export const register = (email, password) => dispatch => {
//   console.log('accountreducer register')
//   dispatch(loginStart)
//   api.register(
//     email, 
//     password, 
//     response => dispatch(loginSuccess(response)),
//     error => dispatch(loginFail(error.message))
//   )
// }
