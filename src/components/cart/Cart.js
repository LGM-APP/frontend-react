import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./cart.css";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { BetContext } from "../BetContext";

const Cart = () => {
  const { bets, totalOdds, setBets, setTotalOdds } = useContext(BetContext);
  const [stake, setStake] = useState(0);
  const [, setCartEmpty] = useState(true);

  const handleAddBet = (team, odds) => {
    const newBet = { team, odds };
    const newBets = [...bets, newBet];
    setBets(newBets);
    setCartEmpty(false);

    const newTotalOdds = totalOdds + odds;
    setTotalOdds(newTotalOdds);
  };

  const handleRemoveBet = (index, odds) => {
    const newBets = [...bets];
    newBets.splice(index, 1);
    setBets(newBets);
    setTotalOdds((prevOdds) => prevOdds - odds);

    if (newBets.length === 0) {
      setCartEmpty(true);
    }
  };

  const handleClearCart = () => {
    setBets([]);
    setTotalOdds(0);
    setStake(0);
    setCartEmpty(true);
  };

  const handleStakeChange = (e) => {
    const newStake = parseFloat(e.target.value);
    setStake(newStake);
  };

  const calculatePotentialGain = () => {
    return stake * totalOdds;
  };

  return (
    <div className="bg-white min-h-screen	sticky top-2 self-start items-start p-4 rounded m-6 border border-teal-400">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Panier de paris</h2>
        <button
          className="text-red-600"
          onClick={handleClearCart}
          disabled={bets.length === 0}
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
      <div className="bet-cart-container mb-4">
        {bets.map((bet, index) => (
          <div
            className="bet-item flex justify-between items-center py-2"
            key={index}
          >
            <span>{bet.team}</span>
            <button
              className="text-red-500 hover:text-red-700 font-bold px-2"
              onClick={() => handleRemoveBet(index, bet.odds)}
            >
              Supprimer
            </button>
          </div>
        ))}
      </div>
      <div className="stake mb-4">
        <label className="flex items-center">
          Mise :
          <input
            type="number"
            value={stake}
            onChange={handleStakeChange}
            className="ml-2 py-1 px-2 border border-gray-300 rounded"
          />
        </label>
      </div>
      <div className="total-odds mb-4">Côte totale : {totalOdds}</div>
      <div className="potential-gain">
        Gains potentiels : {calculatePotentialGain()}
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={() => handleAddBet("Team X", 2.5)}
      >
        Ajouter un pari
      </button>
    </div>
  );
};

export default Cart;
