import React, { useState } from 'react';
import { connect } from 'react-redux'
import './App.sass';

import Nav from './Nav';
import Body from './Body';

function App(props) {
  const { login } = props

  const [active, setActive] = useState(0)

  React.useEffect(() => {
    console.log('login', login)
    login? active === 0 && setActive(5) : setActive(0)
    // console.log('checking token');
    // const a = sessionStorage.getItem('token');
    // console.log(a);
    // a? active === 0 && setActive(5) : setActive(0)
  })

  return (
    <div>
      <Nav act={active} onAct={setActive} />

      <Body act={active}/>
    </div>
  )
}

const mapState = state => ({
  login: state.user.login
})

export default connect(mapState, null)(App)