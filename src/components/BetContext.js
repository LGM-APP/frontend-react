import React, { createContext, useState } from "react";

export const BetContext = createContext();

export const BetProvider = ({ children }) => {
  const [bets, setBets] = useState([]);
  const [totalOdds, setTotalOdds] = useState(1);
  const [stake, setStake] = useState(0);

  return (
    <BetContext.Provider value={{ bets, setBets, totalOdds, setTotalOdds, stake, setStake }}>
      {children}
    </BetContext.Provider>
  );
};
