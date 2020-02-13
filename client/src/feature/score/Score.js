import React, { useState } from 'react'
import ReactFileReader from 'react-file-reader'
import Papa from 'papaparse'

const Score = (props) => {

  const [csv, setCsv] = useState([])

  const handleFiles = files => {
    console.log('files', files)
    var reader = new FileReader();
    reader.onload = function(e) {
      // Use reader.result
      const csv = reader.result
      // console.log(csv)
      const parsed = Papa.parse(csv).data
      console.log(parsed)
      setCsv(parsed)
    }
    reader.readAsText(files[0]);
  }
 
  return (
    <div className="columns">
      <div className="column is-2">
        {/* <input className="text" value={value} onChange={onChange}></input> */}
        <nav className="panel">
          <p className="panel-heading">
            Classs
          </p>
          <div className="panel-block">
            <p className="control has-icons-left">
              {/* <input className="input is-small" type="text" placeholder="search" value={search} onChange={e => setSearch(e.target.value)} /> */}
              <span className="icon is-small is-left">
                <i className="fas fa-search" aria-hidden="true"></i>
              </span>
            </p>
          </div>
          {/* {clases.filter(s => s.name.toLowerCase().indexOf(search.toLowerCase()) > -1).map((s, i) => 
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
          )} */}
        </nav>
      </div>
      <div className="column is-10">
        <div className="buttons has-addons">
          <ReactFileReader handleFiles={handleFiles} fileTypes={['.csv']}>
            <span className="button is-small">Upload</span>
          </ReactFileReader>
          <span className="button is-small" onClick={_ => console.log(csv)}>Save</span>
        </div>
        {(csv && csv !== undefined && csv.length > 0) &&
          <div className="table-container">
            <table className="table is-bordered is-hoverable is-narrow" style={{fontSize: '0.8rem'}}>
              <thead>
                <tr>
                  {
                    csv[0].map(title =>
                      <th>{title}</th>
                    )
                  }
                </tr>
              </thead>
              <tbody>
                {csv.map((record, i) =>
                  i > 0 &&
                  <tr>
                    {record.map(field =>
                      <td>{field}</td>
                    )}
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        }
      </div>
    </div>
  )
}

export default Score