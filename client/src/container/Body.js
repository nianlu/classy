import React from 'react';
import './Body.sass';

function Body() {
  return (
    <body className="body">
      <div className="container">
      <table className="table is-bordered">
        {Array(10).fill().map((_,i) =>
          <tr>
            {Array(16).fill().map((_,j) =>
              <td className="c-box">Seat R{i} C{j}</td>
            )}
          </tr>
        )}
      </table>
      </div>
    </body>
  );
}

export default Body;
