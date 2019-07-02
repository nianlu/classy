import React from 'react';
import './Body.sass';

import SeatManagement from './SeatManagement';
import StudentManagement from './StudentManagement';
import TeachingAssistant from './TeachingAssistant';

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
        {props.act === 3 &&
          <TeachingAssistant />
        }
      </div>
    </div>
  );
}

export default Body;
