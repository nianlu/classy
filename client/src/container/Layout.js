/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

function Layout(props) {

    const tables = props.tables;
    const onChangeTable = props.onChangeTable;

    const getTable = (tableOn, tableOff) => (table, i, j) => 
      table.hasTable?
        <a className={table.sit? "box c-box c-used" : "box c-box c-selected"} 
          onClick={tableOn(i, j)}
        >
          {table.sit? table.sit : 'Table'}
        </a>
        :
        <a className="box c-box" onClick={tableOff(i, j)}> </a>

    const getFeature = (active) => {
      if (active === 0) {
        return {active: active, produce: getTable(
          (i, j) => () => {},
          (i, j) => () => {}
        )}
      } else if (active === 1) {
        return {active: active, produce: getTable(
          (i, j) => () => onChangeTable(i, j, {hasTable: false, sit: null}), 
          (i, j) => () => onChangeTable(i, j, {hasTable: true})
        )}
      } else if (active === 2) {
        return {active: active, produce: getTable(
          (i, j) => () => onChangeTable(i, j, {hasTable: false, sit: null}), 
          (i, j) => () => onChangeTable(i, j, {hasTable: true})
        )}
      } else if (active === 3) {
        return {active: active, produce: getTable(
          (i, j) => () => onChangeTable(i, j, {hasTable: false, sit: null}), 
          (i, j) => () => onChangeTable(i, j, {hasTable: true})
        )}
      }
    }

    const [feature, setFeature] = useState(getFeature(0))
    const onFeature = (active) => setFeature(getFeature(active))

    return (
        <div className="tab">

        <div className="buttons has-addons">
          <span className={feature.active === 1? "button is-small is-active" : "button is-small"} 
            onClick={() => feature.active === 1? onFeature(0) : onFeature(1)}>Assign Table</span>
          {feature.active === 2? <span className="button is-small is-active">0</span> : <span />}
          <span className={feature.active === 2? "button is-small is-active" : "button is-small"} 
            onClick={() => feature.active === 2? onFeature(0) : onFeature(2)}>Group Table</span>
          {feature.active === 3? <span className="button is-small is-active">0</span> : <span />}
          <span className={feature.active === 3? "button is-small is-active" : "button is-small"} 
            onClick={() => feature.active === 3? onFeature(0) : onFeature(3)}>Prioritize Table</span>
        </div>
        <table className="table is-bordered">
          <tbody>
          {tables.map((r,i) =>
            <tr key={'r'+i}>
              {r.map((t,j) =>
                // <td className="c-box" key={'s'+i+''+j}>Seat R{i} C{j}</td>
                <td className="c-td" key={'s'+i+''+j}>
                  {feature.produce(t, i, j)}
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