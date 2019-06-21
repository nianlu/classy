import React, { useState } from 'react';
import './Body.sass';

import SeatManagement from './SeatManagement';

function Body(props) {
  console.log(props);
  return (
    <div className="body">
      <div className="container">
        {props.act === 1 &&
          <SeatManagement />
        }
      </div>
    </div>
  );
}

export default Body;
