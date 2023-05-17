import React, { useContext } from "react";
import KarmineCorpLogo from "./Karmine_Corp_logo.png";
import TeamVitalityLogo from "./Team_Vitality_logo.png";
import { BetContext } from "../BetContext";

const Betlist = () => {
  const { setBets, setTotalOdds } = useContext(BetContext);

  const matches = [
    { team1: "Karmine Corp", team2: "Team Vitality", odds1: 10.5, odds2: 2.0 },
    { team1: "G2 Esports", team2: "Fnatic", odds1: 1.8, odds2: 2.2 },
    { team1: "Team Liquid", team2: "Cloud9", odds1: 200.5, odds2: 200.0 },
    { team1: "Natus Vincere", team2: "Astralis", odds1: 1.7, odds2: 12.3 },
    { team1: "Evil Geniuses", team2: "OG", odds1: 2.1, odds2: 1.9 },
    { team1: "Team Liquid", team2: "Virtus.pro", odds1: 1.8, odds2: 2.2 },
    { team1: "G2 Esports", team2: "FaZe Clan", odds1: 1.6, odds2: 2.4 },
    { team1: "Fnatic", team2: "Team Vitality", odds1: 1.9, odds2: 2.1 },
    { team1: "Cloud9", team2: "Mousesports", odds1: 1.5, odds2: 2.5 },
    { team1: "Fnatic", team2: "Ninjas in Pyjamas", odds1: 2.2, odds2: 1.8 },
    { team1: "FaZe Clan", team2: "Natus Vincere", odds1: 1.7, odds2: 2.3 },
    { team1: "G2 Esports", team2: "Evil Geniuses", odds1: 2.0, odds2: 2.0 },
    { team1: "Team Liquid", team2: "OG", odds1: 1.6, odds2: 2.4 },
    { team1: "Virtus.pro", team2: "Astralis", odds1: 1.9, odds2: 2.1 },
  ];

  const handleAddBet = (team, odds) => {
    setBets((prevBets) => [...prevBets, { team, odds }]);
    setTotalOdds((prevOdds) => prevOdds + odds);
  };

  return (
    <div className="bg-white betting-area border-2 border-violet-700 flex-auto rounded p-4">
      <h2 className="text-lg font-semibold">Paris en cours</h2>
      {matches.map((match, index) => (
        <div className="match-card py-1" key={index}>
          <div className="w-auto rounded-lg shadow-lg border-2 border-yellow-500 bg-white p-4 grid grid-cols-3 justify-center items-center">
            <div className="flex items-start border-2 border-green-500">
              <div className="w-1/2 border-2 border-pink-400 bg-cover bg-no-repeat bg-center mr-2">
                <img
                  src={KarmineCorpLogo}
                  alt="Logo Karmine Corp"
                  className="w-full h-full"
                />
              </div>
              <div className="flex flex-col border-2 border-amber-900 justify-between">
                <p className="text-lg text-start font-bold">{match.team1}</p>
                Cote: {match.odds1}
              </div>
            </div>

            <div className="flex flex-col items-center border-2 border-indigo-600">
              <p className="text-xl font-bold">VALORANT</p>
              <p className="text-sm font-semibold p-2 text-center">
                Champions Tour 2023: EMEA League
              </p>

              <div className="flex items-center border-2 border-indigo-600">
                <p
                  className="bg-blue-500 hover:bg-blue-700 text-white font-semibold p-1 rounded text-center cursor-pointer"
                  onClick={() => handleAddBet(match.team1, match.odds1)}
                >
                  Cote: {match.odds1}
                </p>
                <p className=" text-3xl font-bold p-2">VS</p>
                <p
                  className="bg-blue-500 hover:bg-blue-700 text-white font-semibold p-1 rounded text-center cursor-pointer"
                  onClick={() => handleAddBet(match.team2, match.odds2)}
                >
                  Cote: {match.odds2}
                </p>
              </div>
            </div>
            <div className="flex items-start border-2 border-lime-400 justify-end">
              <div className="text-right">
                <p className="text-lg font-bold">{match.team2}</p>
                Cote: {match.odds2}
              </div>
              <div className="w-2/5 border-2 border-orange-400 bg-cover bg-no-repeat bg-center ml-2">
                <img
                  src={TeamVitalityLogo}
                  alt="Logo Team Vitality"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Betlist;
