import React from "react";

const Table = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>24h Change Difference</th>
            <th>7d Change Difference</th>
            <th>1 Month Change Difference</th>
            <th>24h Volume</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default Table;
