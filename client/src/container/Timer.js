/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

function Layout(props) {

  const [timer, setTimer] = useState(0)
  const [time, setTime] = useState(0)
  const [start, setStart] = useState(Date.now())
  // const timer = setInterval(() => setTime((Date.now() - start)/1000), 100)

  const startTimer = () => {
    console.log('start', timer)
    setTimer(setInterval(() => setTime((Date.now() - start)/1000), 100))
    console.log('start', timer)
  }

  const stopTimer = () => {
    console.log('stop', timer)
    setStart(Date.now())
    console.log('stop', start)
    clearInterval(timer)
  }

  const cancelTimer = () => {
    clearInterval(timer)
    setTime(0)
  }

    return (
        <div>
          <nav className="panel">
            <p className="panel-heading">
              Timers {time}
            </p>
            <div className="panel-block">
              <input type="text"></input>
              <button onClick={startTimer}>start</button>
              <button onClick={stopTimer}>stop</button>
              <button onClick={cancelTimer}>cancel</button>
            </div>
          </nav>
        </div>
    )
}

export default Layout;