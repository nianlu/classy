/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const useStateWithLocalStorage = (localStorageKey, defaultValue='') => {
  // console.log('key', localStorageKey);
  // console.log('value', defaultValue);
  // console.log(localStorage.getItem(localStorageKey));

  const [value, setValue] = React.useState(
    JSON.parse(localStorage.getItem(localStorageKey)) || defaultValue
  );

  // console.log('localvalue', value);

  const valueString = JSON.stringify(value);

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, valueString);
  }, [value]);

  return [value, setValue];
};

function SeatManagement() {
  // localStorage.setItem('myValueInLocalStorage', JSON.stringify('test'));
  // localStorage.setItem('students', JSON.stringify(['cc']));

  const [value, setValue] = useStateWithLocalStorage('myValueInLocalStorage');
  const onChange = event => setValue(event.target.value);

  const [students, setStudents] = useStateWithLocalStorage('students', ['TestStudent']);
  const [newName, setNewName] = React.useState('');

  const [tables, setTables] = useStateWithLocalStorage('tables', Array(10).fill(Array(12).fill()));
  const onChangeTable = (i, j, value) => 
    setTables(tables.map((row, rownum) => 
      (rownum === i)?
        row.map((col, colnum) => 
          (colnum === j)?
            value
            :
            col
        )
        :
        row
    ));

  // const tables = Array(10).fill(Array(12).fill());

  // console.log('table', tables);

  return (
    <div className="columns">
      <div className="column is-2">
        {/* <input className="text" value={value} onChange={onChange}></input> */}
        <nav className="panel">
          <p className="panel-heading">
            Students
          </p>
          {/* <div className="panel-block">
            <p className="control has-icons-left">
              <input className="input is-small" type="text" placeholder="search" />
              <span className="icon is-small is-left">
                <i className="fas fa-search" aria-hidden="true"></i>
              </span>
            </p>
          </div> */}
          {students.map((s, i) => 
            <a className="panel-block" key={i}>
              <span className="panel-icon">
                <i className="fas fa-book" aria-hidden="true"></i>
              </span>
              {s}
            </a>
          )}
          <div className="panel-block">
            <input className="input" placeholder="name" value={newName} onChange={e => setNewName(e.target.value)}></input>
            <button className="button is-link is-outlined" onClick={() => {setStudents([...students, newName]);setNewName('');}}>+</button>
            {/* <button className="button is-link is-outlined is-fullwidth" onClick={() => setStudents([...students, 'new'])}> add </button> */}
          </div>
        </nav>
      </div>
      <div className="column">
        <table className="table is-bordered">
          <tbody>
          {tables.map((r,i) =>
            <tr key={'r'+i}>
              {r.map((t,j) =>
                // <td className="c-box" key={'s'+i+''+j}>Seat R{i} C{j}</td>
                <td className="c-td" key={'s'+i+''+j}>
                  {t?
                    <div className="box c-box c-selected" onClick={() => onChangeTable(i, j, false)}>Selected</div>
                  :
                    <div className="box c-box" onClick={() => onChangeTable(i, j, true)}>Empty</div>
                  }
                </td>
              )}
            </tr>
          )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SeatManagement;
