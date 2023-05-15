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
    <div className="betting-area border border-orange-700 flex-auto rounded m-3 p-4">
      <h2 className="text-lg font-semibold">Paris en cours</h2>
      {matches.map((match, index) => (
        <div className="match-card py-1" key={index}>
          <div className=" w-auto rounded-lg shadow-lg border border-orange-700 bg-white p-4 flex justify-between items-center">
            <div className="flex items-center">
              <div className=" w-14 h-14 border border-orange-700 bg-cover bg-no-repeat bg-center mr-2">
                <img
                  src={KarmineCorpLogo}
                  alt="Logo Karmine Corp"
                  className="w-full h-full"
                />
              </div>
              <div>
                <p className="text-lg text-left font-bold">{match.team1}</p>
                <p
                  className="bg-blue-500 hover:bg-blue-700 text-white font-semibold p-1 rounded cursor-pointer"
                  onClick={() => handleAddBet(match.team1, match.odds1)}
                >
                  Cote: {match.odds1}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div>
                <p className="text-lg text-right font-bold">{match.team2}</p>
                <p
                  className="bg-blue-500 hover:bg-blue-700 text-white font-semibold p-1 rounded cursor-pointer"
                  onClick={() => handleAddBet(match.team2, match.odds2)}
                >
                  Cote: {match.odds2}
                </p>
              </div>
              <div className="w-14 h-14 border border-orange-700 bg-cover bg-no-repeat bg-center ml-2">
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
