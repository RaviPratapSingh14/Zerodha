import React, { useContext } from "react";
import GeneralContext from "./GeneralContext";

const Holdings = () => {
  const { holdings = [] } = useContext(GeneralContext);

  if (!holdings.length) return <p>No Holdings yet</p>;

  return (
    <>
      <h3>Holdings ({holdings.length})</h3>
      <table>
        <thead>
          <tr>
            <th>Stock</th>
            <th>Qty</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {holdings.map((h, i) => (
            <tr key={i}>
              <td>{h.name}</td>
              <td>{h.qty}</td>
              <td>{h.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Holdings;
