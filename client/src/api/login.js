import axios from 'axios'

// axios.defaults.baseURL = 'http://localhost:8080'
// axios.defaults.baseURL = './api'

axios.interceptors.request.use(
  config => {
    // console.log('axios')
    if (!config.headers.Authorization) {
      // const token = localStorage.getItem('token')
      const token = sessionStorage.getItem('token')
      // console.log(token)
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    // console.log('config', config.headers.Authorization)
    return config;
  },
  error => Promise.reject(error)
)

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