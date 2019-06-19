import React from 'react';
import './App.sass';

function App() {
  return (
    <div>
      <div className="header">
        <nav className="navbar">
          <button>aa</button>
        </nav>
      </div>

      <div className="body">
        <div className="tile is-ancestor" id="anc">
          <div className="tile is-4 is-vertical" id="par">
            <div className="tile" id="chi">
              <div className="box">Top</div>
              <div className="box">Top</div>
              <div className="box">Top</div>
            </div>
            <div className="tile">
              <div className="box">Bottom</div>
            </div>
          </div>
          <div className="tile">
            <div className="box">vertical</div>
          </div>
        </div>

        <div className="tile is-ancestor is-vertical" id="anc">
          <div className="tile" id="par">
            <div className="box">box</div>
            <div className="box">box</div>
            <div className="box">box</div>
            <div className="box">box</div>
            <div className="box">box</div>
            <div className="box">box</div>
            <div className="box">box</div>
            <div className="box">box</div>
            <div className="box">box</div>
            <div className="box">box</div>
            <div className="box">box</div>
          </div>
          <div className="tile" id="chi">
            <div className="box">box</div>
            <div className="box">box</div>
            <div className="box">box</div>
            <div className="box">box</div>
            <div className="box">box</div>
            <div className="box">box</div>
            <div className="box">box</div>
            <div className="box">box</div>
            <div className="box">box</div>
            <div className="box">box</div>
            <div className="box">box</div>
          </div>
          <div className="tile" id="par">
            <div className="box">box</div>
            <div className="box">box</div>
            <div className="box">box</div>
            <div className="box">box</div>
            <div className="box">box</div>
            <div className="box">box</div>
            <div className="box">box</div>
            <div className="box">box</div>
            <div className="box">box</div>
            <div className="box">box</div>
            <div className="box">box</div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
