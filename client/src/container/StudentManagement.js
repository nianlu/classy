/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { useStateWithLocalStorage } from './useStateWithLocalStorage';

function StudentManagement() {

  const [students, setStudents] = useStateWithLocalStorage('students', []);
  const [newName, setNewName] = React.useState('');

  const [selected, setSelected] = React.useState(0);
  const onChangeStudent = (index, student) => {
    console.log('changing', index, student);
    setSelected(
      students.map((s, i) => 
        (i === index)?
          Object.assign({}, s, student)
          :
          s
      )
    )
  }

  console.log(students);
  console.log(students[selected]);

  return (
    <div className="columns">
      <div className="column is-2">
        <nav className="panel">
          <p className="panel-heading">
            Students
          </p>
          {students.map((s, i) => 
            <a className={selected === i? "panel-block is-active c-selected" : "panel-block"} key={i} onClick={() => setSelected(i)}>
              {s.name}
            </a>
          )}
          <div className="panel-block">
            <input className="input is-small" type="text" placeholder="name" value={newName} onChange={e => setNewName(e.target.value)}></input>
            <button className="button is-link is-outlined is-small" onClick={() => {
              setStudents([...students, {name: newName}]);
              setNewName('');
            }}>+</button>
            {/* <button className="button is-link is-outlined is-fullwidth" onClick={() => setStudents([...students, 'new'])}> add </button> */}
          </div>
        </nav>
      </div>

      <div className="column">
        {students.filter((_,i) => i === selected).map((s, i) =>
        <div>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" value={s.name} onChange={e => onChangeStudent(i, {name: e.target.value})} />
          </div>
        </div>

        <div className="field">
          <label className="label">ID</label>
          <div className="control">
            <input className="input" type="text" placeholder="Text input" />
          </div>
        </div>

        <div className="field">
          <label className="label">Gender</label>
          <div className="control">
            <input className="input" type="text" placeholder="Text input" />
          </div>
        </div>

        <div className="field">
          <label className="label">Username</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input is-success" type="text" placeholder="Text input" value="bulma" />
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </div>
          <p className="help is-success">This username is available</p>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input is-danger" type="email" placeholder="Email input" value="hello@" />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle"></i>
            </span>
          </div>
          <p className="help is-danger">This email is invalid</p>
        </div>

        <div className="field">
          <label className="label">Subject</label>
          <div className="control">
            <div className="select">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea className="textarea" placeholder="Textarea"></textarea>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input type="checkbox" />
              I agree to the <a href="#">terms and conditions</a>
            </label>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="radio">
              <input type="radio" name="question" />
              Yes
            </label>
            <label className="radio">
              <input type="radio" name="question" />
              No
            </label>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
          <div className="control">
            <button className="button is-text">Cancel</button>
          </div>
        </div>

        </div>
        )}
      </div>
    </div>
  );
}

export default StudentManagement;
