/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './Nav.sass';

function Nav(props) {

  const { act, onAct, login, onLogout } = props

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item subtitle" href="./">Classy</a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className={act === 1? "navbar-item c-active" : "navbar-item"} onClick={() => onAct(1)}>
            Layout Selection
          </a>

          <a className={act === 2? "navbar-item c-active" : "navbar-item"} onClick={() => onAct(2)}>
            Student Management
          </a>
    
          <a className={act === 3? "navbar-item c-active" : "navbar-item"} onClick={() => onAct(3)}>
            Teaching Assistant
          </a>
    
          <a className={act === 4? "navbar-item c-active" : "navbar-item"} onClick={() => onAct(4)}>
            Class Management
          </a>

          <a className={act === 5? "navbar-item c-active" : "navbar-item"} onClick={() => onAct(5)}>
            Student Score
          </a>

        </div>
  
        <div className="navbar-end">
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              More
            </a>
    
            <div className="navbar-dropdown">
              <a className="navbar-item">
                About
              </a>
              <a className="navbar-item">
                Contact
              </a>
              <hr className="navbar-divider" />
              <a className="navbar-item">
                Report an issue
              </a>
            </div>
          </div>
          <div className="navbar-item">
            <div className="buttons">
              {login?
                <a className="button" onClick={() => {onLogout();onAct(0)}}>
                  Log out
                </a>
                :
                <a className="button" onClick={() => onAct(0)}>
                  Login
                </a>
              }
            </div>
          </div>
        </div>
      </div>
      </div>
    </nav>
  );
}

export default Nav;
