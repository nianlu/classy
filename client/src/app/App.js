import React, { useState } from 'react';
import { connect } from 'react-redux'
import './App.sass';

import Nav from './Nav';
import Body from './Body';

import { logout } from 'feature/user/userSlice'

const mapDispatch = { logout }

function App(props) {
  const { login, logout } = props

  const [active, setActive] = useState(0)

  React.useEffect(() => {
    console.log('login', login)
    login? active === 0 && setActive(5) : setActive(0)
    // console.log('checking token');
    // const a = sessionStorage.getItem('token');
    // console.log(a);
    // a? active === 0 && setActive(5) : setActive(0)
  })

  const handleLogout = _ => {
    sessionStorage.removeItem('token')
    logout()
  }

  return (
    <div>
      <Nav act={active} onAct={setActive} login={login} onLogout={handleLogout} />

      <Body act={active}/>
    </div>
  )
}

const mapState = state => ({
  login: state.user.login
})

export default connect(mapState, mapDispatch)(App)