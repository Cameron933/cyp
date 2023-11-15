import React from "react";
import Image from "next/image";

type TableProps = {
  data: ProcessedData[];
};

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
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
          {data.map(
            (item) =>
              item.Pic !== undefined && (
                <tr key={item.Name} className="hover">
                  <td>{item.No}</td>
                  <td className="flex items-center justify-between">
                    <Image
                      src={item.Pic}
                      alt={`${item.Symbol} icon`}
                      width={20}
                      height={20}
                    />
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
              )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
