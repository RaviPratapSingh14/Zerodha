import React, { useContext, useState } from "react";
import GeneralContext from "./GeneralContext";

const BuyActionWindow = ({ uid }) => {
  const { closeBuyWindow, placeOrder } = useContext(GeneralContext);
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(0);

  const handleBuy = () => {
    placeOrder({ name: uid, qty: Number(qty), price: Number(price), mode: "BUY" });
    closeBuyWindow();
  };

  return (
    <div className="buy-window">
      <h4>Buy {uid}</h4>
      <input type="number" value={qty} onChange={(e)=>setQty(e.target.value)} />
      <input type="number" value={price} onChange={(e)=>setPrice(e.target.value)} />

      <button onClick={handleBuy}>Buy</button>
      <button onClick={closeBuyWindow}>Cancel</button>
    </div>
  );
};

export default BuyActionWindow;
