/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { login } from '../api/login'

function Login(props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-5-tablet is-4-desktop is-3-widescreen">
              <form onSubmit={() => login(username, password)} class="box">
                <div class="field">
                  <label for="" class="label">Email</label>
                  <div class="control">
                    <input type="email" class="input" required value={username} onChange={(e) => setUsername(e.target.value)} />
                  </div>
                </div>
                <div class="field">
                  <label for="" class="label">Password</label>
                  <div class="control">
                    <input type="password" class="input" required value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                </div>
                <div class="field">
                  <label for="" class="checkbox">
                    <input type="checkbox" />
                    <span style={{paddingLeft: "0.5rem"}}>
                      Remember me
                    </span>
                  </label>
                </div>
                <div class="field">
                  <button class="button is-success is-centered" type="submit" style={{marginLeft: '5rem'}}>
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

export default Login;