import React from 'react';
import './Body.sass';

import SeatManagement from './SeatManagement';
import StudentManagement from './StudentManagement';

function Body(props) {
  console.log(props);
  return (
    <div className="body">
      <div className="container">
        {props.act === 1 &&
          <SeatManagement />
        }
        {props.act === 2 &&
          <StudentManagement />
        }
      </div>
    </div>
  );
}

export default Body;
