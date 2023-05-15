import React from "react";
import KarmineCorpLogo from "./Karmine_Corp_logo.png";
import TeamVitalityLogo from "./Team_Vitality_logo.png";

const Betlist = () => {
  const matches = [
    { team1: "Karmine Corp", team2: "Team Vitality", odds1: 10.5, odds2: 2.0 },
    { team1: "G2 Esports", team2: "Fnatic", odds1: 1.8, odds2: 2.2 },
    { team1: "Team Liquid", team2: "Cloud9", odds1: 200.5, odds2: 200.0 },
    { team1: "Natus Vincere", team2: "Astralis", odds1: 1.7, odds2: 12.3 },
  ];

  return (
    <div className="betting-area border border-orange-700 flex-1 p-4">
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
                <p className="text-lg font-bold">{match.team1}</p>
                <p
                  className="bg-blue-500 hover:bg-blue-700 text-white font-semibold p-1 rounded"
                  onClick={() => {
                    /* Add bet to user basket */
                  }}
                >
                  Cote: {match.odds1}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div>
                <p className="text-lg font-bold">{match.team2}</p>
                <p
                  className="bg-blue-500 hover:bg-blue-700 text-white font-semibold p-1 rounded"
                  onClick={() => {
                    /* Add bet to user basket */
                  }}
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
