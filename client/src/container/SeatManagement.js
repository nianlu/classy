import React from 'react';

function SeatManagement() {
  return (
      <table className="table is-bordered">
        <tbody>
        {Array(8).fill().map((_,i) =>
          <tr key={'r'+i}>
            {Array(10).fill().map((_,j) =>
              <td className="c-box" key={'s'+i+''+j}>Seat R{i} C{j}</td>
            )}
          </tr>
        )}
        </tbody>
      </table>
  );
}

export default SeatManagement;
