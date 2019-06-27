/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './Nav.sass';

function Nav(props) {
  console.log('nav');
  console.log(props);
  console.log(props.act);
  const reset = () => {
    localStorage.clear();
    // localStorage.setItem('myValueInLocalStorage', JSON.stringify('test'));
    // localStorage.setItem('students', JSON.stringify([]));
    // localStorage.setItem('tables', JSON.stringify(Array(10).fill(Array(12).fill(false))));
  }

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item subtitle" href="./">Classy</a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className={props.act === 1? "navbar-item c-active" : "navbar-item"} onClick={() => props.onAct(1)}>
            Layout Selection
          </a>

          <a className={props.act === 2? "navbar-item c-active" : "navbar-item"} onClick={() => props.onAct(2)}>
            Student Management
          </a>
    
          <a className={props.act === 3? "navbar-item c-active" : "navbar-item"} onClick={() => props.onAct(3)}>
            Teaching Assistant
          </a>
    
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
        </div>
  
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-light" onClick={() => reset()} href='./'>
                Reset
              </a>
              <a className="button is-light">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </nav>
  );
}

export default Nav;
