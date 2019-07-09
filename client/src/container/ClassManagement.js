/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { useStateWithLocalStorage } from './useStateWithLocalStorage';

function ClassManagement() {
  // localStorage.setItem('myValueInLocalStorage', JSON.stringify('test'));
  // localStorage.setItem('students', JSON.stringify(['cc']));

  const [value, setValue] = useStateWithLocalStorage('myValueInLocalStorage');
  const onChange = event => setValue(event.target.value);

  const [search, setSearch] = React.useState('');
  const [students, setStudents] = useStateWithLocalStorage('students', []);
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

  const [tables, setTables] = useStateWithLocalStorage('tables', Array(10).fill(Array(12).fill({hasTable: false, sit: null})));
  const onChangeTable = (i, j, table) => 
    setTables(tables.map((row, rownum) => 
      (rownum === i)?
        row.map((tab, colnum) => 
          (colnum === j)?
            Object.assign({}, tab, table)
            :
            tab
        )
        :
        row
    ));
  
  const randomStudent = () => {
    const availableTables = tables.map((r, i) => r.map((t, j) => 
      (t.hasTable && t.sit === null)?
        {i: i, j: j}
      :
        null
    )).flat().filter(t => t !== null)

    setStudents(students.map(s => {
      if (availableTables.length > 0 && (s.table === undefined || s.table === null)) {
        const idx = Math.floor(Math.random() * Math.floor(availableTables.length))
        tables[availableTables[idx].i][availableTables[idx].j].sit = s.name
        s.table = [availableTables[idx].i, availableTables[idx].j]
        availableTables.splice(idx, 1)
      }
      return s
    }))
    // students.filter(s => s.table === undefined || s.table === null).forEach(s => {
    //   const idx = Math.floor(Math.random() * Math.floor(availableTables.length))
    //   tables[availableTables[idx].i][availableTables[idx].j].sit = s.name
    //   onChangeStudent(s.id, {table: [availableTables[idx].i, availableTables[idx].j]})
    //   availableTables.splice(idx, 1)
    // })
    setTables(tables.map(r => r))
  }

  const [selected, setSelected] = React.useState(null);

  // const tables = Array(10).fill(Array(12).fill());
  // console.log('table', tables);

  return (
    <div className="columns">
      <div className="column is-2">
        {/* <input className="text" value={value} onChange={onChange}></input> */}
        <nav className="panel">
          <p className="panel-heading">
            Class
          </p>
          <div className="panel-block">
            <p className="control has-icons-left">
              <input className="input is-small" type="text" placeholder="search" value={search} onChange={e => setSearch(e.target.value)} />
              <span className="icon is-small is-left">
                <i className="fas fa-search" aria-hidden="true"></i>
              </span>
            </p>
          </div>
          {students.filter(s => s.name.toLowerCase().indexOf(search.toLowerCase()) > -1).map((s, i) => 
            <a className={selected === s.id? "panel-block is-active c-used" : s.table? "panel-block c-selected" : "panel-block"} key={s.id} 
              onClick={() => 
                setSelected((s.table === undefined || s.table === null)?
                  (selected === s.id? null : s.id)
                :
                  null
                )
              }
            >
              {s.name}
            </a>
          )}
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
                  {t.hasTable?
                    (selected === null?
                      <div className={t.sit? "box c-box c-used" : "box c-box c-selected"} 
                        onClick={() => onChangeTable(i, j, {hasTable: false, sit: null})}
                      >
                        {t.sit? t.sit : 'Table'}
                      </div>
                    :
                      <div className={t.sit? "box c-box c-used" : "box c-box c-selected"} 
                        onClick={() => {
                          onChangeTable(i, j, {sit: students.find((s) => s.id === selected).name})
                          onChangeStudent(selected, {table: [i, j]})
                        }}
                      >
                        {t.sit? t.sit : 'Table'}
                      </div>
                    )
                  :
                    <div className="box c-box" onClick={() => onChangeTable(i, j, {hasTable: true})}></div>
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

export default ClassManagement;
