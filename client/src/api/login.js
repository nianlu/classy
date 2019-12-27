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

// export const login = (username, password, thenback, catchback) =>
//   thenback('eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoidXNlciJ9.wIh6IORjUMCIeJAyXohVfpt4VqSlR1uyIrMGmaxR5u4')