import React from 'react';
import './Body.sass';

import SeatManagement from '../container/SeatManagement';
import StudentManagement from '../container/StudentManagement';
import TeachingAssistant from '../container/TeachingAssistant';
import ClassManagement from '../container/ClassManagement';
import Login from '../feature/user/Login';
import Score from '../feature/score/Score';

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
        {props.act === 4 &&
          <ClassManagement />
        }
        {props.act === 5 &&
          <Score />
        }
        {props.act === 0 &&
          <Login />
        }
      </div>
    </div>
  );
}

export default Body;
