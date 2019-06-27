/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { useStateWithLocalStorage } from './useStateWithLocalStorage';

function StudentManagement() {

  const [students, setStudents] = useStateWithLocalStorage('students', []);
  const [newName, setNewName] = React.useState('');

  const [selected, setSelected] = React.useState(0);
  const onChangeStudent = (index, student) => {
    console.log('changing', index, student);
    setStudents(
      students.map((s) => 
        (s.id === index)?
          Object.assign({}, s, student)
          :
          s
      )
    )
  }

  // console.log(students);
  // console.log(selected);
  // console.log(students[selected]);

  return (
    <div className="columns">
      <div className="column is-2">
        <nav className="panel">
          <p className="panel-heading">
            Students
          </p>
          {students.map((s) => 
            <a className={selected === s.id? "panel-block is-active c-selected" : "panel-block"} key={s.id} onClick={() => setSelected(s.id)}>
              {s.name}
            </a>
          )}
          <div className="panel-block">
            <input className="input is-small" type="text" placeholder="name" value={newName} onChange={e => setNewName(e.target.value)}></input>
            <button className="button is-link is-outlined is-small" onClick={() => {
              setStudents([...students, {name: newName, id: students.length}]);
              setNewName('');
            }}>+</button>
            {/* <button className="button is-link is-outlined is-fullwidth" onClick={() => setStudents([...students, 'new'])}> add </button> */}
          </div>
        </nav>
      </div>

      <div className="column is-6">
        {students.filter((s) => s.id === selected).map((s) =>
          <div className="card" key={'s'+s.id}>
            <div className="card-header c-shadow">
              <p className="card-header-title">Information</p>
            </div>
            <div className="card-content">

              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input className="input" type="text" value={s.name} onChange={e => onChangeStudent(s.id, {name: e.target.value})} />
                </div>
              </div>

              <div className="field">
                <label className="label">Student ID</label>
                <div className="control">
                  <input className="input" type="text" value={s.sid} onChange={e => onChangeStudent(s.id, {sid: e.target.value})} />
                </div>
              </div>

              <div className="field">
                <label className="label">Gender</label>
                <div className="control">
                  <div className="select">
                    <select value={s.gender} onChange={e => onChangeStudent(s.id, {gender: e.target.value})}>
                      <option value=""></option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input className="input" type="email" value={s.email} onChange={e => onChangeStudent(s.id, {email: e.target.value})} />
                </div>
              </div>


              <div className="field">
                <label className="label">Comment</label>
                <div className="control">
                  <textarea className="textarea" placeholder="Textarea" value={s.comment} onChange={e => onChangeStudent(s.id, {comment: e.target.value})} />
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default StudentManagement;
