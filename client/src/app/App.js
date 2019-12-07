import React, { useState } from 'react';
import './App.sass';

import Nav from './Nav';
import Body from './Body';

function App() {
  const [active, setActive] = useState(0);

  React.useEffect(() => {
    console.log('checking token');
    const a = sessionStorage.getItem('token');
    console.log(a);
  });

  return (
    <div>
      <Nav act={active} onAct={setActive} />

      <Body act={active}/>
    </div>
  );
}

export default App;
