import React, { useState } from 'react';
import './App.sass';

import Nav from '../container/Nav';
import Body from '../container/Body';

function App() {
  const [active, setActive] = useState(0);
  return (
    <div>
      <Nav act={active} onAct={setActive} />

      <Body act={active}/>
    </div>
  );
}

export default App;
