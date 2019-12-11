import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8080'

export const login = (username, password, thenback, catchback) =>
  axios.get('/api/login', {
    auth: {
      username,
      password,
    }
  })
  .then(response => thenback(response.data))
  .catch(error => catchback(error))

export const loginFake = (username, password, thenback, catchback) =>
  thenback('fake-login-token')

// export const test = () =>
//   axios.get('/accounts', {
//   })
//   .then(() => console.log('success'))
//   .catch(() => console.log('failure'))