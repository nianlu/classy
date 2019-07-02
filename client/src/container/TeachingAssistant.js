/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { useStateWithLocalStorage } from './useStateWithLocalStorage';

function TeachingAssistant() {
  // localStorage.setItem('myValueInLocalStorage', JSON.stringify('test'));
  // localStorage.setItem('students', JSON.stringify(['cc']));

  const [search, setSearch] = React.useState('');
  const [students, setStudents] = useStateWithLocalStorage('students', []);

  const [tables, setTables] = useStateWithLocalStorage('tables', Array(10).fill(Array(12).fill({hasTable: false, sit: null})));
  
  const [selected, setSelected] = React.useState(null);

  return (
    <div className="columns">
      <div className="column is-2">
        {/* <input className="text" value={value} onChange={onChange}></input> */}
        <nav className="panel">
          <p className="panel-heading">
            Students
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
            <a className={selected === s.id? "panel-block is-active c-used" : "panel-block"} key={s.id} onClick={() => setSelected(selected === s.id? null : s.id)}>
              {s.name}
            </a>
          )}
        </nav>
      </div>
      <div className="column">
        <div className="buttons has-addons">
          <span className="button is-small">Random Students</span>
          <span className="button is-small" 
          >Clear Students</span>
          <span className="button is-small" 
          >Clear Tables</span>
        </div>
        <table className="table is-bordered">
          <tbody>
          {tables.map((r,i) =>
            <tr key={'r'+i}>
              {r.map((t,j) =>
                <td className="c-td" key={'s'+i+''+j}>
                  {t.hasTable?
                    (selected === null?
                      <div className={t.sit? "box c-box c-used" : "box c-box c-selected"} 
                      >
                        {t.sit? t.sit : 'Table'}
                      </div>
                    :
                      <div className={t.sit? "box c-box c-used" : "box c-box c-selected"} 
                      >
                        {t.sit? t.sit : 'Table'}
                      </div>
                    )
                  :
                    <div className="box c-box"></div>
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

export default TeachingAssistant;