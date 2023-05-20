import React, { useEffect, useState } from "react";
import { faChessRook, faGun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { series_service } from "../../services/series.service";

const Sidebar = () => {
  const games = [
    {
      name: "lol",
      display_name: "League of Legends",
      icon: faChessRook,
      series: [],
    },
    {
      name: "valorant",
      display_name: "Valorant",
      icon: faGun,
      series: [],
    },
  ];

  const [activeGames, setActiveGames] = useState([]);

  const handleButtonClick = async (index) => {
    if (activeGames.includes(index)) {
      // Si l'index est déjà dans le tableau, on le retire pour masquer la liste
      setActiveGames(activeGames.filter((gameIndex) => gameIndex !== index));
    } else {
      // Sinon, on ajoute l'index pour afficher la liste
      setActiveGames([...activeGames, index]);
      //   setSelectedGame(games[index].name.toLowerCase());
    }
  };

  useEffect(() => {
    games.forEach((game) => {
      series_service
        .getSerieByGame(game.name)
        .then((response) => {
          const data = response.data.slice(-5);
          game.series.push(data);
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération des séries :", error);
        });
    });
    console.log(games);
  }, []);

  return (
    <div className="bg-white min-h-screen border border-cyan-950 sticky top-2 self-start p-4 rounded">
      <h2 className="text-lg font-semibold pb-2">Sports et Compétitions</h2>
      <ul>
        {games.map((game, index) => (
          <li className="py-1" key={index}>
            <a
              className="flex bg-slate-200 rounded-md shadow-sm items-center py-2 pl-1"
              href={"/" + game.name.toLowerCase()}
              onClick={(event) => {
                event.preventDefault();
                handleButtonClick(index);
              }}
            >
              <FontAwesomeIcon icon={game.icon} />
              <span className="ml-1">{game.display_name}</span>
            </a>
            {activeGames.includes(index) && (
              <ul className="pl-8">
                {game.series.map((serie, index) => (
                  <div>
                    <p>{console.log(serie)}</p>
                    <li key={index}>
                      <a href="/">
                        {serie.leagueId.name + " " + serie.fullName}
                      </a>
                    </li>
                  </div>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
