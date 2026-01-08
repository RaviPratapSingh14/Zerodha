import React, { createContext, useState } from "react";
import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = createContext();

export const GeneralContextProvider = ({ children }) => {
  const [isBuyOpen, setIsBuyOpen] = useState(false);
  const [selectedUID, setSelectedUID] = useState(null);
  const [holdings, setHoldings] = useState([]);
  const [orders, setOrders] = useState([]);

  const openBuyWindow = (uid) => {
    setSelectedUID(uid);
    setIsBuyOpen(true);
  };

  const closeBuyWindow = () => {
    setSelectedUID(null);
    setIsBuyOpen(false);
  };

  const placeOrder = (order) => {
    setOrders((prev) => [...prev, order]);
    setHoldings((prev) => [...prev, order]); // fake holdings for now
  };

  return (
    <GeneralContext.Provider
      value={{ openBuyWindow, closeBuyWindow, placeOrder, orders, holdings }}
    >
      {children}
      {isBuyOpen && <BuyActionWindow uid={selectedUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
