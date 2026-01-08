import React, { useContext } from "react";
import GeneralContext from "./GeneralContext";

const Orders = () => {
  const { orders = [] } = useContext(GeneralContext);

  if (!orders.length) return <p>No Orders yet</p>;

  return (
    <>
      <h3>Orders ({orders.length})</h3>
      <table>
        <thead>
          <tr>
            <th>Stock</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o, i) => (
            <tr key={i}>
              <td>{o.name}</td>
              <td>{o.qty}</td>
              <td>{o.price}</td>
              <td>{o.mode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Orders;
