/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function Layout(props) {

    const tables = props.tables;
    const onChangeTable = props.onChangeTable;

    return (
        <div className="tab">

        <table className="table is-bordered">
          <tbody>
          {tables.map((r,i) =>
            <tr key={'r'+i}>
              {r.map((t,j) =>
                // <td className="c-box" key={'s'+i+''+j}>Seat R{i} C{j}</td>
                <td className="c-td" key={'s'+i+''+j}>
                  {t.hasTable?
                    <a className={t.sit? "box c-box c-used" : "box c-box c-selected"} 
                      onClick={() => onChangeTable(i, j, {hasTable: false, sit: null})}
                    >
                    {t.sit? t.sit : 'Table'}
                    </a>
                  :
                    <a className="box c-box" onClick={() => onChangeTable(i, j, {hasTable: true})}></a>
                  }
                </td>
              )}
            </tr>
          )}
          </tbody>
        </table>
        </div>
    )
}

export default Layout;