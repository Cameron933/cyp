import React from "react";

type TableProps = {
  data: ProcessedData[];
};

const Table: React.FC<TableProps> = ({ data }) => {
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
        <tbody>
          {data.map((item) => (
            <tr key={item.Name} className="hover">
              <td className="flex items-center justify-between">
                <div className="text-sm">{item.Name}</div>
                <div className="text-xs text-gray-500">{item.Symbol}</div>
              </td>
              <td>{item.Price}</td>
              <td>{item.Difference24h}</td>
              <td>{item.Difference7Days}</td>
              <td>{item.DifferenceOneMonth}</td>
              <td>{item.Volume24h}</td>
              <td>{item.MarketCap}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
