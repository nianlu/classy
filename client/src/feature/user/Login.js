/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { connect } from 'react-redux'
// import { login } from '../../api/login'

import { login } from './userSlice'

const mapDispatch = { login }

function Login(props) {

  // console.log('login', props)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-5-tablet is-4-desktop is-3-widescreen">
              <form className="box">
                <div className="field">
                  <label className="label">Username</label>
                  <div className="control">
                    {/* <input type="email" className="input" required value={username} onChange={(e) => setUsername(e.target.value)} /> */}
                    <input type="text" className="input" required value={username} onChange={(e) => setUsername(e.target.value)} />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input type="password" className="input" required value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                </div>
                <div className="field">
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span style={{paddingLeft: "0.5rem"}}>
                      Remember me
                    </span>
                  </label>
                </div>
                <div className="field">
                  {/* <button className="button is-success is-centered" type="submit" style={{marginLeft: '5rem'}}> */}
                  <button className="button is-success is-centered" onClick={e => {e.preventDefault();props.login(username, password);}} style={{marginLeft: '5rem'}}>
                  {/* <button className="button is-success is-centered" onClick={e => {props.login(username, password);}} style={{marginLeft: '5rem'}}> */}
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const mapState = state => ({
  user: state.user
})

export default connect(mapState, mapDispatch)(Login)