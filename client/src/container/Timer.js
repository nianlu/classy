/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

function Layout(props) {

  const [time, setTime] = useState(0)
  const [start, setStart] = useState(Date.now())
  // const timer = setInterval(() => setTime((Date.now() - start)/1000), 1000)

    return (
        <div>
          <nav className="panel">
            <p className="panel-heading">
              Timers {time}
            </p>
            <div className="panel-block">
              <input type="text"></input>
              <button>start</button>
              <button>stop</button>
              <button>cancel</button>
            </div>
          </nav>
        </div>
    )
}

export default Layout;