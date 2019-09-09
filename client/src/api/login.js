import axios from 'axios'

export const login = (username, password) =>
  axios.get('/login', {
    auth: {
      username,
      password,
    }
  })
  .then(() => console.log('login'))
  .catch(() => console.log('login error'))