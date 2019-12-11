import { createSlice } from '@reduxjs/toolkit'
import * as api from '../../api/login'

const scoreSlice = createSlice({
  name: 'score',
  initialState: {
    list: []
  },
  reducers: {
    // loginStart(state, action) {
    //   console.log('accountreducer loginstart')
    //   state.login = null
    // },
    // loginSuccess(state, action) {
    //   console.log('accountreducer', action.payload)
    //   if (action.payload) {
    //     sessionStorage.setItem('token', action.payload)
    //     state.login = true
    //     console.log('success')
    //   } else {
    //     sessionStorage.removeItem('token')
    //     state.login = false
    //     console.log('failed')
    //   }
    //   // state.login = true
    // },
    // loginFail(state, action) {
    //   console.log('accountreducer loginfail', action.payload)
    //   sessionStorage.removeItem('token')
    //   state.login = false
    // }
  }
})

export const {
  loginStart, loginSuccess, loginFail
} = scoreSlice.actions

export default scoreSlice.reducer

// export const login = (email, password) => dispatch => {
//   console.log('accountreducer login')
//   dispatch(loginStart)
//   api.login(
//     email, 
//     password, 
//     response => dispatch(loginSuccess(response.data)),
//     error => dispatch(loginFail(error.message))
//   )
// }

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
